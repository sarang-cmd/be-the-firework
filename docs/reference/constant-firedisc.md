# `fireDisc`

A constant in the index.html.

## Source

```js
const fireU = { uTime:{value:0}, uIgnite:{value:0} };
const fireDisc = new THREE.Mesh(new THREE.CircleGeometry(TUBE_R*1.02, 40), new THREE.ShaderMaterial({
  uniforms: fireU, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide,
```

First seen at line 1058; used 1 time(s).
