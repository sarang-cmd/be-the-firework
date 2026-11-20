# GLSL note — line 276

From the water vertex shader.

```glsl
w = clamp(w*headFlare, dist*0.0015, dist*0.0105) * born;
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
