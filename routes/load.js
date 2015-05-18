var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/:url', function(req, res, next) {

    //var title = manifesto.sayHello("from node");

    var url = decodeURIComponent(req.params.url);

    manifesto.load(url, function(manifest) {

        manifest = manifesto.parse(manifest);

        res.render('load', {
            //title: title,
            manifest: manifest.label
        });

    });

});

module.exports = router;
