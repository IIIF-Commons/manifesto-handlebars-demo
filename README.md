# manifesto-site

This demonstrates using https://github.com/edsilv/manifesto as both a node module and bower component.

##Setup

    npm install
    bower install
    npm start

browse to `http://localhost:3000`

The home page title text "hello from server" is being written to the page using the node module (see `routes/index.js`)
and "hello from client" is being written using the bower component (see `views/layouts/main.hbs`).

Clicking the "Load (Client)" button will use the bower version (`manifesto.client.js`) to load the specified manifest.

Clicking the "Load (Server)" button will use the node version (`manifesto.js`) to load the specified manifest.
