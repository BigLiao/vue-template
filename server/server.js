let express = require('express');
let proxy = require('http-proxy-middleware');

let app = express();

const options = {
  target: 'http://restapi.smartpoints.network',
  // target: 'http://10.19.52.37:8390',
  changeOrigin: true,
  onProxyRes(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'; // add new header to response
  }
};

app.options('*', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(200);
});

app.use('/api', proxy(options));
app.listen(3000);