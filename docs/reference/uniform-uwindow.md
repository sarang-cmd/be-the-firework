# `uWindow`

A uniform in the fragment shader.

## Source

```js
      varying vec3 vW, vN, vL; varying float vSeed, vDist;
      uniform float uFlash, uTime, uWindow, uBase; uniform vec3 uFlashCol;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
```

First seen at line 726; used 1 time(s).
