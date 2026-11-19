# GLSL note — line 279

From the water vertex shader.

```glsl
vec3 p = mix(pA, pB, position.x) + side * (position.y + wobble) * w;
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
