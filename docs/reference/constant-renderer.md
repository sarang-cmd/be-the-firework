# `renderer`

A constant in the index.html.

## Source

```js
const canvas = document.getElementById('cv');
const renderer = new THREE.WebGLRenderer({canvas, antialias:false, powerPreference:'high-performance', stencil:false, alpha:false});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
```

First seen at line 162; used 1 time(s).
