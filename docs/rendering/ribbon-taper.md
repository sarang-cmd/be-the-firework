# Ribbon taper

`tailFade = pow(1 - segT*0.97, 0.72)` thins the tail without ever letting it reach zero, so trails dissolve instead of being cut.

## Where it lives

`index.html` — `ember vertex shader`
