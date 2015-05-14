# manifesto-site

This demonstrates using https://github.com/edsilv/manifesto as both a node module and bower component.

##Setup

    npm install
    bower install
    npm start

browse to `http://localhost:3000`

You'll see that the text "Hello, IIIF" is being written to the page using the node module (see `routes/index.js`)
and "Hello, IIIF" is being shown in an alert box using the bower component (see `views/layouts/main.hbs`).
