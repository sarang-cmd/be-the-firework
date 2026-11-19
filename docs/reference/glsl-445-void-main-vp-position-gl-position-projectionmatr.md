# GLSL note — line 445

From the sky vertex shader.

```glsl
void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
```

## Context

Surrounding shader line in the sky vertex shader; see `docs/reference/` for the
symbols it touches.
