var fm = require('front-matter');
var jade = require('jade');
var marked = require('marked');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var glob = require('glob');
var highlight = require('highlight.js');

var docTpl = function () {
  return jade.compileFile('./app/_doc.jade', {pretty: true});
};

var sidebarTpl = function () {
  return jade.compileFile('./app/_sidebar.jade', {pretty: true});
};

var link = function (dir) {
  return '/' + dir.replace(/^docs\//, '').replace(/\.md$/, '').replace(/index$/, '').replace(/\/$/, '');
};

marked.setOptions({
  highlight: function (code, lang) {
    if(lang) {
      return highlight.highlight(lang, code, true).value;
    } else {
      return code;
    }
  }
});

var getInfo = function (file) {
  var content = fm(fs.readFileSync(file, 'utf8'));

  var docLink = link(file);
  var docTitle = content.attributes.title;
  var docBody = content.body;
  var docIndex = path.basename(file) === 'index.md';

  return {
    link: docLink,
    title: docTitle,
    body: docBody,
    index: docIndex,
    file: file
  }

};

var getCrumbs = function (info) {
  var breadcrumbs = info.link.split('/').slice(1);
  if(breadcrumbs.length == 1 && breadcrumbs[0] === '')
    breadcrumbs = [];
  var out = [];
  var acc = '';
  out.push({
    active: false,
    title: 'docs',
    link: '/'
  });
  breadcrumbs.forEach(function (item) {
    acc += '/' + item;
    out.push({
      active: false,
      title: item,
      link: acc
    })
  });
  out[out.length - 1].active = true;
  return out;
};

var recurse = function (dir, top) {
  var docs = fs.readdirSync(dir);

  var out = top ? [] : {articles: []};

  docs.forEach(function (doc) {
    var docPath = path.join(dir, doc);
    var stats = fs.statSync(docPath);

    if(stats.isDirectory()) {
      if(top) {
        out.push(recurse(docPath, false));
      } else {
        out.articles.push(recurse(docPath, false));
      }
    } else if(stats.isFile()) {

      if(top) {
        out.push(getInfo(docPath));
      } else {
        var info = getInfo(docPath);
        if(info.index) {
          out.link = info.link;
          out.title = info.title;
          out.body = info.body;
          out.index = info.index;
        } else {
          out.articles.push(info);
        }
      }

    }

  });

  return out;
};

module.exports = function (cb) {
  var articles = recurse('./docs/', true);
  // move to first
  for(var i = 0; i < articles.length; i++) {
    var article = articles[i];
    if(article.link === '/') {
      articles.splice(i, 1);
      articles.splice(0, 0, article);
    }
  }

  var sidebart = sidebarTpl();
  var doct = docTpl();

  var searchData = [];

  var files = glob.sync('docs/**/*.md');
  files.forEach(function (file) {
    var info = getInfo(file);
    var publicFile = file.replace(/^docs/, 'public').replace(/\.md$/, '.html');
    mkdirp.sync(path.dirname(publicFile));
    var doc = marked(info.body);
    var crumbs = getCrumbs(info);
    var activeLinks = crumbs.length === 1 ? [crumbs[0].link] :
      crumbs.slice(1).map(function (crumb) { return crumb.link });
    var compiled = doct({
      title: info.title,
      doc: doc,
      sidebar: sidebart({
        articles: articles,
        activeLinks: activeLinks
      }),
      breadcrumbs: crumbs,
      link: 'https://github.com/LapisBlue/Docs/blob/master/' + info.file
    });
    searchData.push({
      link: info.link,
      title: info.title,
      body: doc + info.body,
      crumbsFlat: crumbs.map(function (crumb) { return crumb.title }).join('/'),
      crumbs: crumbs
    });
    fs.writeFileSync(publicFile, compiled);
  });

  mkdirp.sync('./public/js/');
  fs.writeFileSync('./public/js/search-data.js', '\nsetSearchData(' + JSON.stringify(searchData, null, 2) + ');');

  if(cb) cb();
};

if(require.main === module) {
  module.exports();
}