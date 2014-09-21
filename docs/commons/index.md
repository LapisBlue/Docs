---
title: 'Commons'
---

This project includes:
- Econ
- [Command](/commons/command)

## Philosophy

### Modular
Lapis Commons is modular. 
Through organized design and mindful use of Java’s ClassLoader mechanics, 
we can ensure that if you’re not using part of the library, it simply does not load from disk.

### Courteous
Lapis Commons is clean and courteous. 
It registers as a Sponge plugin, does not “reach down” into Forge code, and works carefully to honor Sponge’s enable/disable/reload-config, 
its built-in dependency resolution, and its global server settings.