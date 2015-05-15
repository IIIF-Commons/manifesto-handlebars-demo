var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/:url', function(req, res, next) {

    var title = manifesto.sayHello("from node");

    var url = decodeURIComponent(req.params.url);

    manifesto.load(url, function(manifest) {

        var m = JSON.parse(manifest);

        res.render('load', {
            title: title,
            manifest: m.label
        });
    });

});

module.exports = router;
