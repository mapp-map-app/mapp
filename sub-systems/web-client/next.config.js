module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    apiUrl: process.env.WEBSOCKET_HOST || 'http://localhost:4000',
  },
}
