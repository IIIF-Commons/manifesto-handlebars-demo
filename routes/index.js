var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });

    var text = manifesto.escape("test & test");
    res.render('index', {
        text: text,
        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'foo.'; }
        }
    });
});

module.exports = router;
