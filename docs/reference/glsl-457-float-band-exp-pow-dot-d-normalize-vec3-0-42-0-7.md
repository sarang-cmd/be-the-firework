# GLSL note — line 457

From the sky fragment shader.

```glsl
float band = exp(-pow((dot(d, normalize(vec3(0.42,0.72,0.55)))-0.12)*2.6,2.0));
```

## Context

Surrounding shader line in the sky fragment shader; see `docs/reference/` for the
symbols it touches.
