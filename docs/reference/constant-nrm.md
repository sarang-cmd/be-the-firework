# `nrm`

A constant in the index.html.

## Source

```js
  const k = 0.88, life = 3.5;
  const nrm = _v2.set(RS(-0.16,0.16), 1, RS(-0.16,0.16)).normalize();
  const b1 = new THREE.Vector3().crossVectors(nrm, new THREE.Vector3(0,0,1)).normalize();
```

First seen at line 1288; used 1 time(s).
