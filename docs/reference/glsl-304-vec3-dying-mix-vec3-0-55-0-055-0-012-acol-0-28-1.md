# GLSL note — line 304

From the water vertex shader.

```glsl
vec3 dying = mix(vec3(0.55,0.055,0.012), aCol*0.28, 1.0 - aFl.y);
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
