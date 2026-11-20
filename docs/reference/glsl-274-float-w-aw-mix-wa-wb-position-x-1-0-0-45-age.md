# GLSL note — line 274

From the water vertex shader.

```glsl
float w = aW * mix(wA, wB, position.x) * (1.0 - 0.45*age);
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
