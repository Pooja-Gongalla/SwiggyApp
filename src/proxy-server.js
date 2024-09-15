const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://www.swiggy.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/mapi/homepage/getCards', // Rewrite '/api' to match the target URL path
    },
}));

app.listen(5000, () => {
    console.log('Proxy server is running on http://localhost:5000');
});
