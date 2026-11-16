# `vP`

A shader-io in the sky vertex shader.

## Source

```js
  vertexShader: `
    varying vec3 vP;
    void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
```

First seen at line 444; used 2 time(s).
