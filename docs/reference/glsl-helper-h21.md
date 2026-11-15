# `h21`

A glsl-helper in the fragment shader.

## Source

```js
      uniform float uFlash, uTime, uWindow, uBase; uniform vec3 uFlashCol;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      void main(){
```

First seen at line 727; used 2 time(s).

## References

Lines 727, 770.

## Status

Extracted from `index.html` at v1.0.0.
