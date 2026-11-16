# `disposeEmbers`

A function in the index.html.

## Source

```js

function disposeEmbers(){
  if (emberMesh){ scene.remove(emberMesh); emberGeo.dispose(); emberMat.dispose(); emberMesh = null; }
```

First seen at line 324; used 1 time(s).

## References

Lines 324.

## Status

Extracted from `index.html` at v1.0.0.
