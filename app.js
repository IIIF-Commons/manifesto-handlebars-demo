var express = require('express');
var exphbs = require('express-handlebars');
var manifesto = require('manifesto');

var app = express();

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
    var text = manifesto.escape("test & test");
    res.render('home', {
        showTitle: true,
        text: text,
        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'foo.'; }
        }
    });
});

app.listen(3000);