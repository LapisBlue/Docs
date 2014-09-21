---
title: Commands
---

Here's what we would like commands to be:
```java
//No annotation needed on the main class
public class SomeCommands {
  
  @CommandHandler(name="slap", permissions= {"command.slap.self"})
  public void slap(CommandSource source) {
    //TODO: Slap self
  }
  
  @CommandHandler(name="slap", permissions= {"command.slap.other"})
  public void slap(CommandSource source, Player other) {
    //TODO: Slap other
  }
  
  @CommandHandler(name="slap", permissions= {"command.slap.other"})
  public void slap(CommandSource source, Player other, CommandFlags flags) {
    //TODO: Slap other, but more specifically
  }
  
  
}
```
