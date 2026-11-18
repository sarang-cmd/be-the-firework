# `setupComposer`

A function in the index.html.

## Source

```js
let composer = null, bloomPass = null;
function setupComposer(){
  if (composer){ try{ composer.dispose(); }catch(err){} composer = null; bloomPass = null; }
```

First seen at line 1823; used 1 time(s).

## References

Lines 1823.

## Status

Extracted from `index.html` at v1.0.0.
