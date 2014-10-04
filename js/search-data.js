
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
    "body": "<p>Please see the <a href=\"https://trello.com/b/f2PkdRlH/commons\">trello board</a> and <a href=\"https://drive.google.com/drive/#folders/0B5EFkhXKnIfTU2trM3hiSHR0azQ\">google docs folders</a>.</p>\n<p>This project includes:</p>\n<ul>\n<li>Economy</li>\n<li><a href=\"/commons/command\">Command</a></li>\n</ul>\n<h2 id=\"philosophy\">Philosophy</h2>\n<h3 id=\"modular\">Modular</h3>\n<p>Lapis Commons is modular. \nThrough organized design and mindful use of Java’s ClassLoader mechanics, \nwe can ensure that if you’re not using part of the library, it simply does not load from disk.</p>\n<h3 id=\"courteous\">Courteous</h3>\n<p>Lapis Commons is clean and courteous. \nIt registers as a Sponge plugin, does not “reach down” into Forge code, and works carefully to honor Sponge’s enable/disable/reload-config, \nits built-in dependency resolution, and its global server settings.</p>\n\nPlease see the [trello board](https://trello.com/b/f2PkdRlH/commons) and [google docs folders](https://drive.google.com/drive/#folders/0B5EFkhXKnIfTU2trM3hiSHR0azQ).\n\nThis project includes:\n- Economy\n- [Command](/commons/command)\n\n## Philosophy\n\n### Modular\nLapis Commons is modular. \nThrough organized design and mindful use of Java’s ClassLoader mechanics, \nwe can ensure that if you’re not using part of the library, it simply does not load from disk.\n\n### Courteous\nLapis Commons is clean and courteous. \nIt registers as a Sponge plugin, does not “reach down” into Forge code, and works carefully to honor Sponge’s enable/disable/reload-config, \nits built-in dependency resolution, and its global server settings.\n",
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
    "link": "/commons/perms/algebra",
    "title": "Perms Algebra",
    "body": "<p>The following is an overview of how the Lapis permissions &#39;algebra&#39; works.\nIt is basically just set theory, applied to Minecraft.\nPermissions files are declared in a special syntax, this will be adapted and definitely changed later.</p>\n<h2 id=\"permissions\">Permissions</h2>\n<p>Individual permissions are simply period-separated strings.\nIf you append a <code>*</code> asterisk to the end of a node, every possible sub-node is valid.\nFor example:</p>\n<pre><code>=&gt; means &#39;implies&#39;\n\na.b.c\na.b.c.d\n\na.b.* =&gt; a.b.c\na.b.* =&gt; a.b.c.d\n</code></pre><h2 id=\"buckets\">Buckets</h2>\n<p>Because they are not really groups, I chose to adopt a different name: Buckets.\nA bucket is simply a collection of permissions.\n<em>It has no other given meaning.</em>\nBelow is an example syntax of how to declare some buckets:</p>\n<pre><code>CanPlace {\n  modify.block.place.non_destructive\n}\n\nCanPlaceDestructive {\n  modify.block.place.non_destructive\n  modify.block.place.destructive\n}\n\nCanModify {\n  modify.block.*\n}\n</code></pre><h3 id=\"bucket-inheritance\">Bucket Inheritance</h3>\n<p>Buckets can inherit the permissions of several parent buckets.\nHere&#39;s an example syntax of how to declare some bucket inheritance:</p>\n<pre><code>CanPlace {\n  modify.block.place.non_destructive\n}\n\n// Outside\nCanPlaceDestructive &lt;- CanPlace\nCanPlaceDestructive &lt;- ABucket\n\nCanPlaceDestructive {\n  modify.block.place.destructive\n}\n\n// Inline\nCanModify &lt;- CanPlaceDestructive {\n  modify.block.*\n}\n</code></pre><p>This leads us to our first axiom:</p>\n<blockquote>\n<p><strong>Axiom #1</strong>: if C &lt;- B and B &lt;- A then C &lt;- A</p>\n</blockquote>\n<p>Pretty easy and reasonable.\nThis basically just means that <code>&lt;-</code>, or inheritance, is transitive.</p>\n<p>Here&#39;s a picture:</p>\n<p><strong>TODO</strong> insert picture here</p>\n<h3 id=\"-computed-buckets\">&#39;Computed&#39; buckets</h3>\n<p>The only reason that this Permissions algebra can be interesting is because buckets can be computed based on\nthe state of the Minecraft game.\nHere&#39;s an example syntax of how a computed world bucket would look:</p>\n<pre><code>w[FreeForAll] {\n  modify.*\n}\n</code></pre><p>Or maybe a user bucket:</p>\n<pre><code>u[Notch] {\n  modify.game\n}\n</code></pre><p>These buckets can also be inherited from other ones, like regular buckets:</p>\n<pre><code>u[Notch] &lt;- CanPlace\n</code></pre><h3 id=\"bucket-unions\">Bucket unions</h3>\n<p>We can take the union of two or more buckets to form a virtual bucket.\nThis is done implicitly when a bucket inherits from more than one parent bucket,\nbut can also be done implicitly with our example syntax.</p>\n<pre><code>CanChat {\n  chat.*\n}\n\nGuest {}\nMember &lt;- CanChat | Guest {}\n</code></pre><p>This leads us to our second axiom:</p>\n<blockquote>\n<p><strong>Axiom #2</strong>: if C &lt;- A | B then C &lt;- A and C &lt;- B</p>\n</blockquote>\n<p>This axiom goes in reverse as well(making number three)</p>\n<blockquote>\n<p><strong>Axiom #3</strong>: if C &lt;- A and C &lt;- B then C &lt;- A | B</p>\n</blockquote>\n<p>Here&#39;s a picture:</p>\n<p><strong>TODO</strong> insert picture here</p>\n<h3 id=\"bucket-intersections\">Bucket intersections</h3>\n<p>A query can be made based on if an object belongs in two or more buckets at the same time.\nIt looks like a typical <code>&amp;</code> query.</p>\n<pre><code>CanModify {\n  modify.block.*\n}\n\nCanChat {\n  chat.*\n}\n\nGuest {}\nMember &lt;- CanChat | Guest {}\n\nw[FreeForAll] &amp; Guest &lt;- CanModify\nw[World] &amp; Guest &lt;- CanChat\n</code></pre><p>This leads us to our fourth axiom:</p>\n<blockquote>\n<p><strong>Axiom #4</strong>: if B &lt;- A and A &amp; C &lt;- D then B &amp; C &lt;- D</p>\n</blockquote>\n<p>In English means that a group&#39;s intersections inherit from any intersections of its parent groups.</p>\n<p>It may be easier to understand as a picture:</p>\n<p><strong>TODO</strong> insert picture here</p>\n<h3 id=\"more\">More</h3>\n<p>More may be coming on possible implementations and stuff.</p>\n\nThe following is an overview of how the Lapis permissions 'algebra' works.\nIt is basically just set theory, applied to Minecraft.\nPermissions files are declared in a special syntax, this will be adapted and definitely changed later.\n\n## Permissions\nIndividual permissions are simply period-separated strings.\nIf you append a `*` asterisk to the end of a node, every possible sub-node is valid.\nFor example:\n\n```\n=> means 'implies'\n\na.b.c\na.b.c.d\n\na.b.* => a.b.c\na.b.* => a.b.c.d\n```\n\n## Buckets\nBecause they are not really groups, I chose to adopt a different name: Buckets.\nA bucket is simply a collection of permissions.\n_It has no other given meaning._\nBelow is an example syntax of how to declare some buckets:\n```\nCanPlace {\n  modify.block.place.non_destructive\n}\n\nCanPlaceDestructive {\n  modify.block.place.non_destructive\n  modify.block.place.destructive\n}\n\nCanModify {\n  modify.block.*\n}\n```\n\n### Bucket Inheritance\nBuckets can inherit the permissions of several parent buckets.\nHere's an example syntax of how to declare some bucket inheritance:\n```\nCanPlace {\n  modify.block.place.non_destructive\n}\n\n// Outside\nCanPlaceDestructive <- CanPlace\nCanPlaceDestructive <- ABucket\n\nCanPlaceDestructive {\n  modify.block.place.destructive\n}\n\n// Inline\nCanModify <- CanPlaceDestructive {\n  modify.block.*\n}\n```\n\nThis leads us to our first axiom:\n\n> __Axiom #1__: if C <- B and B <- A then C <- A\n\nPretty easy and reasonable.\nThis basically just means that `<-`, or inheritance, is transitive.\n\nHere's a picture:\n\n__TODO__ insert picture here\n\n### 'Computed' buckets\nThe only reason that this Permissions algebra can be interesting is because buckets can be computed based on\nthe state of the Minecraft game.\nHere's an example syntax of how a computed world bucket would look:\n```\nw[FreeForAll] {\n  modify.*\n}\n```\nOr maybe a user bucket:\n```\nu[Notch] {\n  modify.game\n}\n```\nThese buckets can also be inherited from other ones, like regular buckets:\n```\nu[Notch] <- CanPlace\n```\n\n### Bucket unions\nWe can take the union of two or more buckets to form a virtual bucket.\nThis is done implicitly when a bucket inherits from more than one parent bucket,\nbut can also be done implicitly with our example syntax.\n```\nCanChat {\n  chat.*\n}\n\nGuest {}\nMember <- CanChat | Guest {}\n```\n\nThis leads us to our second axiom:\n\n> __Axiom #2__: if C <- A | B then C <- A and C <- B\n\nThis axiom goes in reverse as well(making number three)\n\n> __Axiom #3__: if C <- A and C <- B then C <- A | B\n\nHere's a picture:\n\n__TODO__ insert picture here\n\n### Bucket intersections\nA query can be made based on if an object belongs in two or more buckets at the same time.\nIt looks like a typical `&` query.\n```\nCanModify {\n  modify.block.*\n}\n\nCanChat {\n  chat.*\n}\n\nGuest {}\nMember <- CanChat | Guest {}\n\nw[FreeForAll] & Guest <- CanModify\nw[World] & Guest <- CanChat\n```\n\nThis leads us to our fourth axiom:\n\n> __Axiom #4__: if B <- A and A & C <- D then B & C <- D\n\nIn English means that a group's intersections inherit from any intersections of its parent groups.\n\nIt may be easier to understand as a picture:\n\n__TODO__ insert picture here\n\n### More\nMore may be coming on possible implementations and stuff.",
    "crumbsFlat": "docs/commons/perms/algebra",
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
        "active": false,
        "title": "perms",
        "link": "/commons/perms"
      },
      {
        "active": true,
        "title": "algebra",
        "link": "/commons/perms/algebra"
      }
    ]
  },
  {
    "link": "/commons/perms",
    "title": "Perms",
    "body": "<p>Lapis Commons contains a simple, but robust and extensible permissions system.\nSee <a href=\"/commons/perms/algebra\">An Algebra of Permissions</a> to see the &#39;theory&#39; behind the permissions system.</p>\n\nLapis Commons contains a simple, but robust and extensible permissions system.\nSee [An Algebra of Permissions](/commons/perms/algebra) to see the 'theory' behind the permissions system.\n",
    "crumbsFlat": "docs/commons/perms",
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
        "title": "perms",
        "link": "/commons/perms"
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
    "body": "<p>Welcome to the Lapis documentation!\nWe opted to have a static site generated by some markdown files as opposed to a wiki. \nPress the edit button on any article to be taken to the corresponding markdown file,\nmake a PR and we will look at it.</p>\n<h2 id=\"-about-lapis-lapis-\"><a href=\"/lapis\">About Lapis</a></h2>\n<h2 id=\"projects\">Projects</h2>\n<ul>\n<li><a href=\"/commons\">Commons</a>: An advanced toolkit for plugin authors.</li>\n<li><a href=\"/pore\">Pore</a>: Run existing Bukkit plugins on Sponge natively.</li>\n</ul>\n<h2 id=\"-javadocs-http-jd-lapis-blue-\"><a href=\"http://jd.lapis.blue\">Javadocs</a></h2>\n<h2 id=\"work-with-us\">Work with us</h2>\n<p>We&#39;d love to have any help you wish to give!</p>\n<p>We have several communication methods:</p>\n<ul>\n<li>File an issue in one of our <a href=\"https://github.com/LapisBlue\">github repos</a><ul>\n<li>Be sure to check how to <a href=\"/lapis/contributing\">contribute</a></li>\n</ul>\n</li>\n<li>Talk with us on IRC at <code>#lapis</code> on irc.esper.net</li>\n<li>View/modify one of our <a href=\"https://trello.com/lapis\">Trello boards</a></li>\n<li>Take a look at a few of our <a href=\"https://drive.google.com/drive/#folders/0B5EFkhXKnIfTU2trM3hiSHR0azQ\">google docs</a></li>\n</ul>\n\nWelcome to the Lapis documentation!\nWe opted to have a static site generated by some markdown files as opposed to a wiki. \nPress the edit button on any article to be taken to the corresponding markdown file,\nmake a PR and we will look at it.\n\n## [About Lapis](/lapis)\n## Projects\n- [Commons](/commons): An advanced toolkit for plugin authors.\n- [Pore](/pore): Run existing Bukkit plugins on Sponge natively.\n\n## [Javadocs](http://jd.lapis.blue)\n\n## Work with us\n\nWe'd love to have any help you wish to give!\n\nWe have several communication methods:\n\n- File an issue in one of our [github repos](https://github.com/LapisBlue)\n    - Be sure to check how to [contribute](/lapis/contributing)\n- Talk with us on IRC at `#lapis` on irc.esper.net\n- View/modify one of our [Trello boards](https://trello.com/lapis)\n- Take a look at a few of our [google docs](https://drive.google.com/drive/#folders/0B5EFkhXKnIfTU2trM3hiSHR0azQ)\n",
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
    "body": "<ul>\n<li><p><strong>4-space indents, no tabs</strong></p>\n</li>\n<li><p>Oracle style guidelines</p>\n</li>\n<li><p><strong>Java 6 only</strong>. It’s unfortunate, but some day a mac user will thank you.</p>\n</li>\n<li><p>Use <code>javax.annotation.*</code> classes to communicate nullity intent.</p>\n</li>\n<li><p>No “<a href=\"http://en.wikipedia.org/wiki/Yoda_conditions\">yoda conditions</a>”. Some coders do this for null-pointer resiliency, but this sacrifices readability.</p>\n</li>\n<li><p><strong>115-character width</strong>. This helps us stay sane for side-by-side diffs and Github reading without sacrificing code readability from excessive wrapping.</p>\n</li>\n<li><p>Every file needs the LapisCommons header specifying the MIT license. \nIf you commit your code to the repository, it is a declaration of consent to distribute your contribution under the MIT license, both individually and as part of the collective work.</p>\n<ul>\n<li>You can run <code>./gradlew licenseFormat</code> to let Gradle do that automatically.</li>\n</ul>\n</li>\n<li><p>When in doubt, ignore all rules and write the most readable code you can. We’re on Git, we can always revert and discuss something if we don’t like it.</p>\n</li>\n<li><p>We have an IntelliJ formatting configuration file <a href=\"https://github.com/LapisBlue/Commons/blob/master/etc/formatter/intellij/LapisCommons.xml\">in our repo</a>. You can use it to reformat your code before contributing.</p>\n</li>\n</ul>\n- __4-space indents, no tabs__\n\n- Oracle style guidelines\n\n- __Java 6 only__. It’s unfortunate, but some day a mac user will thank you.\n\n- Use `javax.annotation.*` classes to communicate nullity intent.\n\n- No “[yoda conditions](http://en.wikipedia.org/wiki/Yoda_conditions)”. Some coders do this for null-pointer resiliency, but this sacrifices readability.\n\n- __115-character width__. This helps us stay sane for side-by-side diffs and Github reading without sacrificing code readability from excessive wrapping.\n\n- Every file needs the LapisCommons header specifying the MIT license. \n  If you commit your code to the repository, it is a declaration of consent to distribute your contribution under the MIT license, both individually and as part of the collective work.\n  \n    - You can run `./gradlew licenseFormat` to let Gradle do that automatically.\n    \n- When in doubt, ignore all rules and write the most readable code you can. We’re on Git, we can always revert and discuss something if we don’t like it.\n\n- We have an IntelliJ formatting configuration file [in our repo](https://github.com/LapisBlue/Commons/blob/master/etc/formatter/intellij/LapisCommons.xml). You can use it to reformat your code before contributing.\n",
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
  },
  {
    "link": "/pore/contributing",
    "title": "Contributing",
    "body": "<h2 id=\"requirements\">Requirements</h2>\n<p>At this time, Pore&#39;s contribution guidelines are very loose, though this is subject to change as development progresses.\nCurrently, the only criteria are that contributions compile, and that they adhere to Pore&#39;s goals as a project.\nPore&#39;s goals are as follows:</p>\n<ul>\n<li>Pore should serve only as an abstraction layer between Bukkit and Sponge.\n  As such, it must include as little non-reference code as possible.</li>\n<li>Pore follows a minimal-diff policy for the sake of maintained compatibility.\n  As such, contributions should avoid modifying the copy of the Bukkit API included in this repository at all costs.\n  If the API absolutely must be modified, a comment should be added denoting the change (e.g. // Pore: protected -&gt; public).</li>\n</ul>\n<h2 id=\"concurrent-development\">Concurrent Development</h2>\n<p>To avoid the issue of conflicting pull requests, we have set up <a href=\"https://trello.com/b/J6AT6tDl/pore\">a page on Trello</a> used to track who&#39;s working on what.\nWe ask that you reference this before starting work, and create or move a card once you have.</p>\n<h2 id=\"submitting-a-pull-request\">Submitting a Pull Request</h2>\n<p>Once you&#39;ve ensured that your contribution meets the above requirements, you may submit them as a pull request to the main repository.\nThe pull request must include information regarding what has been changed and what is accomplished. Ultimately, the repository owner will have final discretion as to what is and is not merged.</p>\n\nRequirements\n------------\nAt this time, Pore's contribution guidelines are very loose, though this is subject to change as development progresses.\nCurrently, the only criteria are that contributions compile, and that they adhere to Pore's goals as a project.\nPore's goals are as follows:\n- Pore should serve only as an abstraction layer between Bukkit and Sponge.\n    As such, it must include as little non-reference code as possible.\n- Pore follows a minimal-diff policy for the sake of maintained compatibility.\n    As such, contributions should avoid modifying the copy of the Bukkit API included in this repository at all costs.\n    If the API absolutely must be modified, a comment should be added denoting the change (e.g. // Pore: protected -> public).\n\nConcurrent Development\n----------------------\nTo avoid the issue of conflicting pull requests, we have set up [a page on Trello](https://trello.com/b/J6AT6tDl/pore) used to track who's working on what.\nWe ask that you reference this before starting work, and create or move a card once you have.\n\nSubmitting a Pull Request\n-------------------------\nOnce you've ensured that your contribution meets the above requirements, you may submit them as a pull request to the main repository.\nThe pull request must include information regarding what has been changed and what is accomplished. Ultimately, the repository owner will have final discretion as to what is and is not merged.",
    "crumbsFlat": "docs/pore/contributing",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "pore",
        "link": "/pore"
      },
      {
        "active": true,
        "title": "contributing",
        "link": "/pore/contributing"
      }
    ]
  },
  {
    "link": "/pore",
    "title": "Pore",
    "body": "<p>Please see the <a href=\"https://trello.com/b/J6AT6tDl/pore\">trello board</a>.</p>\n<p>A plugin for the up-and-coming Sponge project which serves as a bridge between the Bukkit and Sponge APIs.</p>\n<h2 id=\"compilation\">Compilation</h2>\n<p>Gradle is used to handle dependencies.</p>\n<ul>\n<li>Clone the repo: <code>git clone https://github.com/LapisBlue/Pore.git</code></li>\n<li>Initialize the <a href=\"https://github.com/SpongePowered/SpongeAPI\">SpongeAPI</a> dependency: <code>git submodule update --init</code></li>\n<li>Compile the project using the Gradle wrapper: <code>./gradlew</code></li>\n</ul>\n<h2 id=\"licensing\">Licensing</h2>\n<p>Pore is made available under the MIT license. You may do as you wish with the software within its bounds.</p>\n\nPlease see the [trello board](https://trello.com/b/J6AT6tDl/pore).\n\nA plugin for the up-and-coming Sponge project which serves as a bridge between the Bukkit and Sponge APIs.\n\nCompilation\n-----------\n\nGradle is used to handle dependencies.\n\n- Clone the repo: `git clone https://github.com/LapisBlue/Pore.git`\n- Initialize the [SpongeAPI](https://github.com/SpongePowered/SpongeAPI) dependency: `git submodule update --init`\n- Compile the project using the Gradle wrapper: `./gradlew`\n\nLicensing\n---------\n\nPore is made available under the MIT license. You may do as you wish with the software within its bounds.\n",
    "crumbsFlat": "docs/pore",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": true,
        "title": "pore",
        "link": "/pore"
      }
    ]
  }
]);