const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	// forum proxy
	app.use(createProxyMiddleware('/forum/api', { target: 'http://127.0.0.1:3001' }));
	// yugioh-fm proxy
	app.use(createProxyMiddleware('/yugioh-fm-tools/api', { target: 'http://127.0.0.1:3002' }));
};
