# GLSL note — line 266

From the water vertex shader.

```glsl
side = sl > 1e-5 ? side/sl : vec3(1.0,0.0,0.0);
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
