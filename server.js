const express = require('express');
const nextJS = require('next');

async function start() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = nextJS({ dev });
  const server = express();
  await app.prepare();


  server.get('/*', async (req, res, next) => {
    try {
        return app.handleRequest(req, res, req.originalUrl)
    } catch (e) {
      next(e);
    }  });

  server.listen(4000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:4000`);
  });
}

start();