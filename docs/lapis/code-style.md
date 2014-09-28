---
title: 'Code Style'
---
- __4-space indents, no tabs__

- Oracle style guidelines

- __Java 6 only__. It’s unfortunate, but some day a mac user will thank you.

- Use `javax.annotation.*` classes to communicate nullity intent.

- No “[yoda conditions](http://en.wikipedia.org/wiki/Yoda_conditions)”. Some coders do this for null-pointer resiliency, but this sacrifices readability.

- __115-character width__. This helps us stay sane for side-by-side diffs and Github reading without sacrificing code readability from excessive wrapping.

- Every file needs the LapisCommons header specifying the MIT license. 
  If you commit your code to the repository, it is a declaration of consent to distribute your contribution under the MIT license, both individually and as part of the collective work.
  
    - You can run `./gradlew licenseFormat` to let Gradle do that automatically.
    
- When in doubt, ignore all rules and write the most readable code you can. We’re on Git, we can always revert and discuss something if we don’t like it.

- We have an IntelliJ formatting configuration file [in our repo](https://github.com/LapisBlue/Commons/blob/master/etc/formatter/intellij/LapisCommons.xml). You can use it to reformat your code before contributing.
