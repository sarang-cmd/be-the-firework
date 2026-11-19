# GLSL note — line 278

From the water vertex shader.

```glsl
float wobble = sin(tS*13.0 + seed*29.0)*0.055 + sin(tS*5.3 + seed*11.0)*0.045;
```

## Context

Surrounding shader line in the water vertex shader; see `docs/reference/` for the
symbols it touches.
