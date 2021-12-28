# next-twin
make next12 use tailwind + styled-component


## why
next12 use swc complier and not support twin.macro, and can't use tailwind in styled-conpoment

## how to use
decorate your next.config.js

```js
  const withTwin = require('./next-twin.js')
  module.exports = withTwin({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    }
  })
```
