var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/', function(req, res, next) {

    var title = manifesto.sayHello("from server");

    res.render('index', {
        title: title,
        // Override `foo` helper only for this rendering.
        helpers: {
            //foo: function () { return 'foo.'; }
        }
    });

});

module.exports = router;
