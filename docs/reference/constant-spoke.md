# `spoke`

A constant in the index.html.

## Source

```js
  const a = i/12*TAU;
  const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.28, 21, 0.28), new THREE.MeshBasicMaterial({color:0x0d0a07}));
  spoke.position.set(Math.cos(a)*10.5, Math.sin(a)*10.5, 0);
```

First seen at line 975; used 1 time(s).
