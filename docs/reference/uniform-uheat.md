# `uHeat`

A uniform in the fragment shader.

## Source

```js
      varying vec2 vUv; varying float vSeed, vAge, vDist;
      uniform float uTime, uFlash, uHeat; uniform vec3 uBurst;
      float h11(float x){ return fract(sin(x*127.1)*43758.5453); }
```

First seen at line 592; used 1 time(s).

## References

Lines 592.

## Status

Extracted from `index.html` at v1.0.0.
