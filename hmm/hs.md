---
layout: main
tags: hmm
---

# HS

___

tbh, I've been thinking about making a text language thing for [Hopscotch](https://gethopscotch.com), so I guess I'll brainstorm stuff here

so uh, I think I want it to be extendable (for secret blocks, etc), so I guess importing "blocks" or something would be nice so I guess something like `import(blocks.json)`. oh and I think the standard blocks should be auto-imported

wait  
haven't even figured out what the language will be written in so uh... I guess Go? if Go is too complicated I'll go with Ruby or even JS.

so uh I think the syntax will look like this

```
object(Objects.SQUARE, "Name")
global("test") %* variable (this is a comment) *%

on("Name") {
  when(Rules.IS_TAPPED, SELF) {
    increase("test", 1)
  }
}
```

yes very weird syntax, I know

I'll add more stuff here probably