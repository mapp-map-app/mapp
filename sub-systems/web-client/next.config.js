module.exports = {
  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
    websocketUrl: process.env.WEBSOCKET_HOST || 'http://localhost:4000',
  },
}