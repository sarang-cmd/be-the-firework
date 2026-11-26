# GLSL note — line 291

From the water vertex shader.

```glsl
fl = mix(0.02, 2.3, smoothstep(0.34,0.44,ph)*smoothstep(0.80,0.66,ph));
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
