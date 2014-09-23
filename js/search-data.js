
setSearchData([
  {
    "link": "/commons/command",
    "title": "Command",
    "body": "<p>Here&#39;s what we would like commands to look like:</p>\n<pre><code class=\"lang-java\"><span class=\"hljs-comment\">// No annotation needed on the main class</span>\n<span class=\"hljs-keyword\">public</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">SomeCommands</span> </span>{\n\n  <span class=\"hljs-annotation\">@CommandHandler</span>(name={<span class=\"hljs-string\">\"slap\"</span>}, permissions= {<span class=\"hljs-string\">\"command.slap.self\"</span>})\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">public</span> <span class=\"hljs-keyword\">void</span> <span class=\"hljs-title\">slap</span><span class=\"hljs-params\">(CommandSource source)</span> </span>{\n    <span class=\"hljs-comment\">// TODO: Slap self</span>\n  }\n\n  <span class=\"hljs-annotation\">@CommandHandler</span>(name={<span class=\"hljs-string\">\"slap\"</span>}, permissions= {<span class=\"hljs-string\">\"command.slap.other\"</span>})\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">public</span> <span class=\"hljs-keyword\">void</span> <span class=\"hljs-title\">slap</span><span class=\"hljs-params\">(CommandSource source, Player other)</span> </span>{\n    <span class=\"hljs-comment\">// TODO: Slap other</span>\n  }\n\n  <span class=\"hljs-annotation\">@CommandHandler</span>(name={<span class=\"hljs-string\">\"slap\"</span>}, permissions= {<span class=\"hljs-string\">\"command.slap.other\"</span>})\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">public</span> <span class=\"hljs-keyword\">void</span> <span class=\"hljs-title\">slap</span><span class=\"hljs-params\">(CommandSource source, Player other, CommandFlags flags)</span> </span>{\n    <span class=\"hljs-comment\">// TODO: Slap other, but more specifically</span>\n  }\n\n\n}\n</code></pre>\n\nHere's what we would like commands to look like:\n```java\n// No annotation needed on the main class\npublic class SomeCommands {\n  \n  @CommandHandler(name={\"slap\"}, permissions= {\"command.slap.self\"})\n  public void slap(CommandSource source) {\n    // TODO: Slap self\n  }\n  \n  @CommandHandler(name={\"slap\"}, permissions= {\"command.slap.other\"})\n  public void slap(CommandSource source, Player other) {\n    // TODO: Slap other\n  }\n  \n  @CommandHandler(name={\"slap\"}, permissions= {\"command.slap.other\"})\n  public void slap(CommandSource source, Player other, CommandFlags flags) {\n    // TODO: Slap other, but more specifically\n  }\n  \n  \n}\n```\n",
    "crumbsFlat": "docs/commons/command",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "commons",
        "link": "/commons"
      },
      {
        "active": true,
        "title": "command",
        "link": "/commons/command"
      }
    ]
  },
  {
    "link": "/commons",
    "title": "Commons",
    "body": "<p>This project includes:</p>\n<ul>\n<li>Econ</li>\n<li><a href=\"/commons/command\">Command</a></li>\n</ul>\n<h2 id=\"philosophy\">Philosophy</h2>\n<h3 id=\"modular\">Modular</h3>\n<p>Lapis Commons is modular. \nThrough organized design and mindful use of Java’s ClassLoader mechanics, \nwe can ensure that if you’re not using part of the library, it simply does not load from disk.</p>\n<h3 id=\"courteous\">Courteous</h3>\n<p>Lapis Commons is clean and courteous. \nIt registers as a Sponge plugin, does not “reach down” into Forge code, and works carefully to honor Sponge’s enable/disable/reload-config, \nits built-in dependency resolution, and its global server settings.</p>\n\nThis project includes:\n- Econ\n- [Command](/commons/command)\n\n## Philosophy\n\n### Modular\nLapis Commons is modular. \nThrough organized design and mindful use of Java’s ClassLoader mechanics, \nwe can ensure that if you’re not using part of the library, it simply does not load from disk.\n\n### Courteous\nLapis Commons is clean and courteous. \nIt registers as a Sponge plugin, does not “reach down” into Forge code, and works carefully to honor Sponge’s enable/disable/reload-config, \nits built-in dependency resolution, and its global server settings.",
    "crumbsFlat": "docs/commons",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": true,
        "title": "commons",
        "link": "/commons"
      }
    ]
  },
  {
    "link": "/guides",
    "title": "Guides",
    "body": "<p><strong>TODO:</strong> Under here we will put several guides for developers, server owners, and server users.</p>\n\n__TODO:__ Under here we will put several guides for developers, server owners, and server users.",
    "crumbsFlat": "docs/guides",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": true,
        "title": "guides",
        "link": "/guides"
      }
    ]
  },
  {
    "link": "/",
    "title": "Overview",
    "body": "<p>Welcome to the Lapis documentation!\nWe opted to have a static site generated by some markdown files as opposed to a wiki. \nPress the edit button on any article to be taken to the corresponding markdown file,\nmake a PR and we will look at it.</p>\n<h2 id=\"-about-lapis-lapis-\"><a href=\"/lapis\">About Lapis</a></h2>\n<h2 id=\"projects\">Projects</h2>\n<ul>\n<li><a href=\"/commons\">Commons</a>: An advanced toolkit for plugin authors.</li>\n</ul>\n<h2 id=\"work-with-us\">Work with us</h2>\n<p>We&#39;d love to have any help you wish to give!</p>\n<p>We have several communication methods:</p>\n<ul>\n<li>File an issue in one of our <a href=\"https://github.com/LapisBlue\">github repos</a><ul>\n<li>Be sure to check how to <a href=\"/lapis/contributing\">contribute</a></li>\n</ul>\n</li>\n<li>Talk with us on IRC at <code>#lapis</code> on esper.net</li>\n</ul>\n\nWelcome to the Lapis documentation!\nWe opted to have a static site generated by some markdown files as opposed to a wiki. \nPress the edit button on any article to be taken to the corresponding markdown file,\nmake a PR and we will look at it.\n\n## [About Lapis](/lapis)\n## Projects\n- [Commons](/commons): An advanced toolkit for plugin authors.\n\n## Work with us\n\nWe'd love to have any help you wish to give!\n\nWe have several communication methods:\n\n- File an issue in one of our [github repos](https://github.com/LapisBlue)\n    - Be sure to check how to [contribute](/lapis/contributing)\n- Talk with us on IRC at `#lapis` on esper.net",
    "crumbsFlat": "docs",
    "crumbs": [
      {
        "active": true,
        "title": "docs",
        "link": "/"
      }
    ]
  },
  {
    "link": "/lapis/code-style",
    "title": "Code Style",
    "body": "<ul>\n<li><p><strong>4-space indents, no tabs</strong></p>\n</li>\n<li><p>Oracle style guidelines</p>\n</li>\n<li><p><strong>Java 6 only</strong>. It’s unfortunate, but some day a mac user will thank you.</p>\n</li>\n<li><p>Use <code>javax.annotation.*</code> classes to communicate nullity intent.</p>\n</li>\n<li><p>No “<a href=\"http://en.wikipedia.org/wiki/Yoda_conditions\">yoda conditions</a>”. Some coders do this for null-pointer resiliency, but this sacrifices readability.</p>\n</li>\n<li><p><strong>115-character width</strong>. This helps us stay sane for side-by-side diffs and Github reading without sacrificing code readability from excessive wrapping.</p>\n</li>\n<li><p>Every file needs the LapisCommons header specifying the MIT license. \nIf you commit your code to the repository, it is a declaration of consent to distribute your contribution under the MIT license, both individually and as part of the collective work.</p>\n<ul>\n<li>You can run <code>./gradlew licenseFormat</code> to let Gradle do that automatically.</li>\n</ul>\n</li>\n<li><p>When in doubt, ignore all rules and write the most readable code you can. We’re on Git, we can always revert and discuss something if we don’t like it.</p>\n</li>\n</ul>\n- __4-space indents, no tabs__\n\n- Oracle style guidelines\n\n- __Java 6 only__. It’s unfortunate, but some day a mac user will thank you.\n\n- Use `javax.annotation.*` classes to communicate nullity intent.\n\n- No “[yoda conditions](http://en.wikipedia.org/wiki/Yoda_conditions)”. Some coders do this for null-pointer resiliency, but this sacrifices readability.\n\n- __115-character width__. This helps us stay sane for side-by-side diffs and Github reading without sacrificing code readability from excessive wrapping.\n\n- Every file needs the LapisCommons header specifying the MIT license. \n  If you commit your code to the repository, it is a declaration of consent to distribute your contribution under the MIT license, both individually and as part of the collective work.\n  \n    - You can run `./gradlew licenseFormat` to let Gradle do that automatically.\n    \n- When in doubt, ignore all rules and write the most readable code you can. We’re on Git, we can always revert and discuss something if we don’t like it.\n",
    "crumbsFlat": "docs/lapis/code-style",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "lapis",
        "link": "/lapis"
      },
      {
        "active": true,
        "title": "code-style",
        "link": "/lapis/code-style"
      }
    ]
  },
  {
    "link": "/lapis/compiling",
    "title": "Compiling",
    "body": "<h2 id=\"java-projects\">Java Projects</h2>\n<p>We use <a href=\"http://www.gradle.org/\">Gradle</a>, use <code>./gradlew</code> build to compile the project.</p>\n<h2 id=\"static-sites\">Static Sites</h2>\n<p>On our static sites (including the home page and docs page), we use <a href=\"http://gulpjs.com/\">gulp</a>, a build system on <a href=\"http://nodejs.org\">node.js</a>.\nYou do not have to worry about this when editing documentation, just edit one of the files in the docs directory. \nYour changes will be handled like any PR.</p>\n\n## Java Projects\nWe use [Gradle](http://www.gradle.org/), use `./gradlew` build to compile the project.\n\n## Static Sites\nOn our static sites (including the home page and docs page), we use [gulp](http://gulpjs.com/), a build system on [node.js](http://nodejs.org).\nYou do not have to worry about this when editing documentation, just edit one of the files in the docs directory. \nYour changes will be handled like any PR.",
    "crumbsFlat": "docs/lapis/compiling",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "lapis",
        "link": "/lapis"
      },
      {
        "active": true,
        "title": "compiling",
        "link": "/lapis/compiling"
      }
    ]
  },
  {
    "link": "/lapis/contributing",
    "title": "Contributing",
    "body": "<ol>\n<li><p>Fork one of our repos.</p>\n</li>\n<li><p>In your fork, switch to a different branch, make any changes and commit.</p>\n</li>\n<li><p>Be sure to follow the <a href=\"/lapis/code-style\">code style</a>.</p>\n</li>\n<li><p><a href=\"/lapis/compiling\">Run gradle and compile</a> before you pull, otherwise Travis can get angry at you.</p>\n</li>\n<li><p>Make a Pull Request. A team member will look at the PR and discuss it before merging.</p>\n</li>\n</ol>\n\n1. Fork one of our repos.\n\n2. In your fork, switch to a different branch, make any changes and commit.\n\n3. Be sure to follow the [code style](/lapis/code-style).\n\n4. [Run gradle and compile](/lapis/compiling) before you pull, otherwise Travis can get angry at you.\n\n5. Make a Pull Request. A team member will look at the PR and discuss it before merging.\n",
    "crumbsFlat": "docs/lapis/contributing",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "lapis",
        "link": "/lapis"
      },
      {
        "active": true,
        "title": "contributing",
        "link": "/lapis/contributing"
      }
    ]
  },
  {
    "link": "/lapis",
    "title": "Lapis",
    "body": "<p>Lapis is an organization that is behind several Sponge projects.</p>\n<p>As on our homepage:</p>\n<blockquote>\n<p>We&#39;re a group of Minecraft modders excited about the future of Sponge and Minecraft modding.</p>\n<p>We&#39;re building a variety of toolkits, mods, plugins, and libraries to discourage code duplication and encourage modularity and growth.</p>\n</blockquote>\n<p>This group arose from the intense environment of cooperation and new ideas surrounding Sponge’s API development, \nwhich produced so many clever designs that the Sponge team could never hope to implement them and still have a powerful, \nflexible platform. \nIn the interest of preventing code duplication, \nwe at Lapis feel compelled to develop many of these ideas into a common lexicon that can simplify plugin development \nand lighten the burden on server management.</p>\n<p>We use <a href=\"http://www.gradle.org/\">Gradle</a> to build our Java projects, \nand <a href=\"http://gulpjs.com/\">Gulp + node</a> to build our static website projects(homepage, docs).</p>\n<p>All our work is free, open-source, and MIT-licensed.</p>\n<p>As the project matures, we will transition to incubating new Sponge plugins and APIs. \nThis is in the hope of improving the Sponge API and implementation, as well as lightening the already-heavy burden of the Sponge team.</p>\nLapis is an organization that is behind several Sponge projects.\n\nAs on our homepage:\n> We're a group of Minecraft modders excited about the future of Sponge and Minecraft modding.\n\n> We're building a variety of toolkits, mods, plugins, and libraries to discourage code duplication and encourage modularity and growth.\n\nThis group arose from the intense environment of cooperation and new ideas surrounding Sponge’s API development, \nwhich produced so many clever designs that the Sponge team could never hope to implement them and still have a powerful, \nflexible platform. \nIn the interest of preventing code duplication, \nwe at Lapis feel compelled to develop many of these ideas into a common lexicon that can simplify plugin development \nand lighten the burden on server management.\n\nWe use [Gradle](http://www.gradle.org/) to build our Java projects, \nand [Gulp + node](http://gulpjs.com/) to build our static website projects(homepage, docs).\n\nAll our work is free, open-source, and MIT-licensed.\n\nAs the project matures, we will transition to incubating new Sponge plugins and APIs. \nThis is in the hope of improving the Sponge API and implementation, as well as lightening the already-heavy burden of the Sponge team.",
    "crumbsFlat": "docs/lapis",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": true,
        "title": "lapis",
        "link": "/lapis"
      }
    ]
  }
]);