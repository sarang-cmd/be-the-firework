# GLSL note — line 445

From the sky vertex shader.

```glsl
void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
```
