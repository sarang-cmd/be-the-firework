# `ng`

A constant in the index.html.

## Source

```js
  const hp = c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value = 850;
  const ng = c.createGain();
  ng.gain.setValueAtTime(0.5, t); ng.gain.exponentialRampToValueAtTime(0.0006, t+0.32);
```

First seen at line 1669; used 1 time(s).

## References

Lines 1669.

## Status

Extracted from `index.html` at v1.0.0.
