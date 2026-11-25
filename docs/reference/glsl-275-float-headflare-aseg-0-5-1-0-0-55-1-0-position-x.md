# GLSL note — line 275

From the water vertex shader.

```glsl
float headFlare = (aSeg < 0.5) ? (1.0 + 0.55*(1.0-position.x)) : 1.0;
```
