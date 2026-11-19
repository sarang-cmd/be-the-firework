# `decel`

A constant in the index.html.

## Source

```js
    const rampB = 0.86*smoothstep(0.16, 0.34, u);
    const decel = 1 - smoothstep(0.70, 1.0, u);
    const vv = (rampA + rampB)*decel;
```

First seen at line 1113; used 1 time(s).

## References

Lines 1113.

## Status

Extracted from `index.html` at v1.0.0.
