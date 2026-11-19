# GLSL note — line 279

From the water vertex shader.

```glsl
vec3 p = mix(pA, pB, position.x) + side * (position.y + wobble) * w;
```
