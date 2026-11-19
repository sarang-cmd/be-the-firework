# GLSL note — line 281

From the water vertex shader.

```glsl
gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
