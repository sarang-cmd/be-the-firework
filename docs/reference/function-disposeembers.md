# `disposeEmbers`

A function in the index.html.

## Source

```js

function disposeEmbers(){
  if (emberMesh){ scene.remove(emberMesh); emberGeo.dispose(); emberMat.dispose(); emberMesh = null; }
```

First seen at line 324; used 1 time(s).
