# GLSL note — line 286

From the water vertex shader.

```glsl
float on = step(0.0, tl) * smoothstep(0.0, 0.015, tl) * (1.0 - smoothstep(0.70, 1.0, age));
```
