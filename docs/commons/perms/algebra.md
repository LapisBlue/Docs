---
title: Perms Algebra
---

The following is an overview of how the Lapis permissions 'algebra' works.
It is basically just set theory, applied to Minecraft.
Permissions files are declared in a special syntax, this will be adapted and definitely changed later.

## Permissions
Individual permissions are simply period-separated strings.
If you append a `*` asterisk to the end of a node, every possible sub-node is valid.
For example:

```
=> means 'implies'

a.b.c
a.b.c.d

a.b.* => a.b.c
a.b.* => a.b.c.d
```

## Buckets
Because they are not really groups, I chose to adopt a different name: Buckets.
A bucket is simply a collection of permissions.
_It has no other given meaning._
Below is an example syntax of how to declare some buckets:
```
CanPlace {
  modify.block.place.non_destructive
}

CanPlaceDestructive {
  modify.block.place.non_destructive
  modify.block.place.destructive
}

CanModify {
  modify.block.*
}
```

### Bucket Inheritance
Buckets can inherit the permissions of several parent buckets.
Here's an example syntax of how to declare some bucket inheritance:
```
CanPlace {
  modify.block.place.non_destructive
}

// Outside
CanPlaceDestructive <- CanPlace
CanPlaceDestructive <- ABucket

CanPlaceDestructive {
  modify.block.place.destructive
}

// Inline
CanModify <- CanPlaceDestructive {
  modify.block.*
}
```

This leads us to our first axiom:

> __Axiom #1__: if C <- B and B <- A then C <- A

Pretty easy and reasonable.
This basically just means that `<-`, or inheritance, is transitive.

Here's a picture:

__TODO__ insert picture here

### 'Computed' buckets
The only reason that this Permissions algebra can be interesting is because buckets can be computed based on
the state of the Minecraft game.
Here's an example syntax of how a computed world bucket would look:
```
w[FreeForAll] {
  modify.*
}
```
Or maybe a user bucket:
```
u[Notch] {
  modify.game
}
```
These buckets can also be inherited from other ones, like regular buckets:
```
u[Notch] <- CanPlace
```

### Bucket unions
We can take the union of two or more buckets to form a virtual bucket.
This is done implicitly when a bucket inherits from more than one parent bucket,
but can also be done implicitly with our example syntax.
```
CanChat {
  chat.*
}

Guest {}
Member <- CanChat | Guest {}
```

This leads us to our second axiom:

> __Axiom #2__: if C <- A | B then C <- A and C <- B

This axiom goes in reverse as well(making number three)

> __Axiom #3__: if C <- A and C <- B then C <- A | B

Here's a picture:

__TODO__ insert picture here

### Bucket intersections
A query can be made based on if an object belongs in two or more buckets at the same time.
It looks like a typical `&` query.
```
CanModify {
  modify.block.*
}

CanChat {
  chat.*
}

Guest {}
Member <- CanChat | Guest {}

w[FreeForAll] & Guest <- CanModify
w[World] & Guest <- CanChat
```

This leads us to our fourth axiom:

> __Axiom #4__: if B <- A and A & C <- D then B & C <- D

In English means that a group's intersections inherit from any intersections of its parent groups.

It may be easier to understand as a picture:

__TODO__ insert picture here

### More
More may be coming on possible implementations and stuff.