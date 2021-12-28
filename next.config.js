const withTwin = require('./next-twin.js')


module.exports = withTwin({
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  }
})
