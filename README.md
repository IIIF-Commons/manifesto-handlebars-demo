# manifesto-site

This demonstrates using https://github.com/edsilv/manifesto as both a node module and bower component.

##Setup

    npm install
    bower install
    npm start

browse to `http://localhost:3000`

The home page title text "hello from node" is being written to the page using the node module (see `routes/index.js`)
and "hello from bower" is being written using the bower component (see `views/layouts/main.hbs`).

Clicking the "load" button will use the bower version (`manifesto.client.js`) to load `/data/manifest.json`.

Browsing to `/load` uses the node version to load `/data/manifest.json` (currently not working)
