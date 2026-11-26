# GLSL note — line 305

From the water vertex shader.

```glsl
c = mix(c, dying, smoothstep(0.34, 1.0, age));
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
