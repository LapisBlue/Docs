---
title: 'Pore'
---

Pore is a plugin for the up-and-coming SpongeAPI built to provide compatibility for Bukkit plugins on the platform. Please note that this project is still under heavy development and **is not yet considered functional**. Currently, no Bukkit plugins are verified to be supported.

Compilation
-----------

Gradle is used to handle dependencies.

- Clone the repo: `git clone https://github.com/LapisBlue/Pore.git`
- Navigate to the new directory: `cd Pore`
- Compile the project using the Gradle wrapper: `./gradlew` (`gradlew` on Windows)

Running
-------

You can run and debug Pore directly in your IDE if you setup your workspace like described in the following steps:

1. Setup the Pore project as described in
[Plugin Debugging and Hotswapping (SpongeDocs)](https://docs.spongepowered.org/en/plugin/advanced/debugging.html)
2. Create a **new** run configuration with the same settings as described in the link above, but add this as a program
argument: `--tweakClass blue.lapis.pore.tweaker.RemapTweaker`
3. Run the server as usual. Pore should load and you should be able to debug in your IDE.

Configuring the annotation processor
------------------------------------

Pore uses an annotation processor for event registration. It will be run by the Gradle wrapper by default and IDEA when
the project is first built, but if you wish to make changes to event registration, the IDE must be configured to run it
on project rebuild. If you don't know what event registration means, skip this step.

For IntelliJ IDEA:

1. Open `File`->`Settings`->`Build, Execution, and Deployment`->`Compiler`->`Annotation Processors`.
2. Click the `Add` (plus) button and name the new profile `Pore AP`.
3. Click the `Pore` module under the `Default` profile and click the `Move to` button to move it to the `Pore AP`
profile.
4. In the `Processor FQ Name` pane, click the `Add` button and enter the following:
`blue.lapis.pore.event.EventProcessor`
5. Click `Apply`. The processor will be run when the project is rebuilt (`Build`->`Rebuild Project`).

Questions?
----------

Have an issue or a question about Pore? No problem! Feel free to ask in #lapis on EsperNet.

Licensing
---------

Pore's source code is made available under the [MIT license](http://opensource.org/licenses/MIT). You may do as you wish
with the source within its bounds.

`.patch` files for Bukkit are made available under the [GPLv3](http://opensource.org/licenses/gpl-3.0.html).

Pore's distribution is made available under the [GPLv3](http://opensource.org/licenses/gpl-3.0.html).
