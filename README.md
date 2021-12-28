# next-twin
make next12 use tailwind + styled-component


## why
[similar issue](https://github.com/kentcdodds/babel-plugin-macros/issues/144)

next12 use swc complier and not support [twin.macro](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components#add-the-next-config), and can't use tailwind in styled-conpoment

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
