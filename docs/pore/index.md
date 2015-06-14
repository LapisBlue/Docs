---
title: 'Pore'
---

Pore is a plugin for the up-and-coming SpongeAPI built to provide compatibility for Bukkit plugins on the platform.
Please note that this project is still under heavy development and **is not yet considered functional**. Currently, no
Bukkit plugins are verified to be supported.

Compilation
-----------

Gradle is used to handle dependencies.

- Clone the repo: `git clone https://github.com/LapisBlue/Pore.git`
- Navigate to the new directory: `cd Pore`
- Initialize the project: `./poredev update` (`poredev update` on Windows)
- Compile the project using the Gradle wrapper: `./gradlew` (`gradlew` on Windows)

Running
-------

You can run and debug Pore directly in your IDE if you setup your workspace like described in the following steps:

1. Setup the Pore project as described in [Plugin Debugging and Hotswapping (SpongeDocs)](https://docs.spongepowered.org/en/plugin/advanced/debugging.html)
2. Unlike in the description above, create a **new** run configuration with the same as the defaults but add the this as program argument: `--tweakClass blue.lapis.pore.tweaker.RemapTweaker`
3. Run the server as usual, Pore should load and you should be able to debug in your IDE.

Questions?
----------

Have an issue or a question about Pore? No problem! Feel free to ask in #lapis on EsperNet.

Licensing
---------

Pore's source code is made available under the [MIT license](http://opensource.org/licenses/MIT). You may do as you wish
with the source within its bounds.

`.patch` files for Bukkit are made available under the [GPLv3](http://opensource.org/licenses/gpl-3.0.html).

Pore's distribution is made available under the [GPLv3](http://opensource.org/licenses/gpl-3.0.html).
