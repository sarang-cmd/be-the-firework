# `fwd`

A constant in the index.html.

## Source

```js
    const e = new THREE.Euler(cam.elev + cam.uElev, cam.yaw + cam.uYaw, 0, 'YXZ');
    const fwd = _dir.set(0,0,-1).applyEuler(e);
    const right = new THREE.Vector3(1,0,0).applyEuler(e);
```

First seen at line 1578; used 1 time(s).
