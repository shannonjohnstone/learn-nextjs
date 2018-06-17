const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'; // eslint-disable-line
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // custom handlers go here…

    server.get('/session-detail/:slug', (req, res) => {
      const { slug } = req.params;
      app.render(req, res, '/session-detail', { ...req.query, slug });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000'); // eslint-disable-line
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line
    process.exit(1); // eslint-disable-line
  });
