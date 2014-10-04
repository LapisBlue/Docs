var gulp = require('gulp');
var bower = require('main-bower-files');
var deploy = require('gulp-gh-pages');
var rimraf = require('gulp-rimraf');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var markdown = require('gulp-markdown');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var templates = require('gulp-jade');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var filter = require('gulp-filter');
var livereload = require('gulp-livereload');
var runseq = require('run-sequence');
var open = require('open');
var buildDocs = require('./build-docs');

// server stuff
var connect = require('connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var connectLivereload = require('connect-livereload');

var paths = {
  assets: ['./app/assets/**/*'],
  coffee: ['./app/**/*.coffee'],
  docs: './docs/**/*.md',
  stylus: ['app/**/*.styl', 'app/**/*.css', '!app/**/_*.styl'],
  templates: ['app/**/*.jade', '!app/**/_*.jade'],
  bower: ['bower_components/**/*']
};

// BUILD

gulp.task('assets', function () {

  return gulp.src(paths.assets)
    .pipe(gulp.dest('./public'));

});

gulp.task('stylus', function () {

  return gulp.src(paths.stylus)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: require('nib')()
    }))
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write('../maps/', {sourceRoot: '../app/'}))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('coffee', function () {
  return gulp.src(paths.coffee)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('../maps/', {sourceRoot: '../app/'}))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('templates', function () {

  return gulp.src(paths.templates)
    .pipe(templates())
    .pipe(gulp.dest('./public'));

});

gulp.task('bower', function () {

  var js = filter('**/*.js');
  var css = filter('**/*.css');

  var b = gulp.src(bower(), {base: 'bower_components/'});

  b
    .pipe(js)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('vendor.js'))
    .pipe(sourcemaps.write('../maps/', {sourceRoot: '../bower_components/'}))
    .pipe(gulp.dest('./public/js'));

  return b
    .pipe(css)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('vendor.css'))
    .pipe(sourcemaps.write('../maps/', {sourceRoot: '../bower_components/'}))
    .pipe(gulp.dest('./public/css'));


});

// DOCS
gulp.task('docs', buildDocs);

// PRODUCTION BUILD

gulp.task('stylus:prod', function () {

  return gulp.src(paths.stylus)
    .pipe(stylus({
      use: require('nib')()
    }))
    .pipe(concat('app.css'))
    .pipe(minify())
    .pipe(gulp.dest('./public/css'));

});

gulp.task('coffee:prod', function () {
  return gulp.src(paths.coffee)
    .pipe(coffee())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('bower:prod', function () {

  var js = filter('**/*.js');
  var css = filter('**/*.css');

  var b = gulp.src(bower(), {base: 'bower_components/'});

  b
    .pipe(js)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));

  return b
    .pipe(css)
    .pipe(concat('vendor.css'))
    .pipe(minify())
    .pipe(gulp.dest('./public/css'));


});

gulp.task('clean', function () {
  return gulp.src('./public', {read: false})
    .pipe(rimraf());
});

gulp.task('build', ['bower', 'templates', 'coffee', 'stylus', 'assets', 'docs']);
gulp.task('build:prod', function (cb) {
  runseq(
    'clean',
    ['bower:prod','templates', 'coffee:prod', 'stylus:prod', 'assets', 'docs'],
    cb
  );
});

// DEVELOPMENT

gulp.task('serve', ['build'], function () {
  var port = livereload.listen().port;

  connect()
    .use(connectLivereload({
      port: port
    }))
    .use(serveStatic('public/', {
      extensions: ['html']
    }))
    .use(serveIndex('public/'))
    .listen(3000, '0.0.0.0');

  gulp.watch(['public/**/*'], function (file) {
    livereload.changed(file.path);
  });
});

gulp.task('watch', ['build'], function () {

  gulp.watch(paths.assets, ['assets']);
  gulp.watch(paths.coffee, ['coffee']);
  gulp.watch([paths.docs, 'app/**/*.jade'], ['docs']);
  gulp.watch(['app/**/*.styl'], ['stylus']);
  gulp.watch(['app/**/*.jade'], ['templates']);
  gulp.watch(paths.bower, ['bower']);

});

gulp.task('open', ['serve'], function () {
  open('http://localhost:3000');
});

gulp.task('dev', ['watch', 'serve', 'open']);

// DEPLOYMENT

gulp.task('deploy', ['build:prod'], function () {

  return gulp.src(['./public/**/*', './public/.travis.yml'])
    .pipe(deploy());

});

gulp.task('travis-deploy', ['build:prod'], function () {

  return gulp.src(['./public/**/*', './public/.travis.yml'])
    .pipe(deploy({
      remoteUrl: process.env.GIT_REPO
    }));

});