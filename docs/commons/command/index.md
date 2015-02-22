---
title: 'Command'
---

Here's what we would like commands to look like:
```java
// No annotation needed on the main class
public class SlapCommand {

    @Command(
        aliases = { "slap" },
        permissions = { "command.slap.self" })
    public void slap(CommandSource source) {
        // TODO: Slap self
    }
    
    @Command(
        aliases = { "slap" },
        permissions = { "command.slap.other" })
    public void slap(CommandSource source, Player other) {
        // TODO: Slap other
    }

    @Command(
        aliases = { "slap" },
        permissions = { "command.slap.other" })
    public void slap(CommandSource source, Player other, CommandFlags flags) {
      // TODO: Slap other, but more specifically
    }
    
    @TabComplete(commands = { "slap" })
    public List<String> slapTabComplete(CommandSource source, String[] parameters) {
        // TODO: return List<String>
    }
}
```
