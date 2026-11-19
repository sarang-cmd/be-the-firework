# GLSL note — line 271

From the water vertex shader.

```glsl
float born = smoothstep(0.0, dt*1.2, tB);        // fade in at the tail tip
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
