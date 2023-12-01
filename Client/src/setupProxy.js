const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (App) {
  App.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
