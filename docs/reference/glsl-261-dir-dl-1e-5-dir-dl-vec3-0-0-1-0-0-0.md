# GLSL note — line 261

From the water vertex shader.

```glsl
dir = dl > 1e-5 ? dir/dl : vec3(0.0,1.0,0.0);
```
