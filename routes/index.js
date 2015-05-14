var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/', function(req, res, next) {

    var text = manifesto.sayHello("IIIF");

    res.render('index', {
        text: text,
        // Override `foo` helper only for this rendering.
        helpers: {
            //foo: function () { return 'foo.'; }
        }
    });
});

module.exports = router;
