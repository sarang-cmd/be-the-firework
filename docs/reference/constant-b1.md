# `b1`

A constant in the index.html.

## Source

```js
  const nrm = _v2.set(RS(-0.16,0.16), 1, RS(-0.16,0.16)).normalize();
  const b1 = new THREE.Vector3().crossVectors(nrm, new THREE.Vector3(0,0,1)).normalize();
  const b2 = new THREE.Vector3().crossVectors(nrm, b1).normalize();
```

First seen at line 1289; used 1 time(s).

## References

Lines 1289.

## Status

Extracted from `index.html` at v1.0.0.
