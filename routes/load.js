var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/:url', function(req, res, next) {

    var url = decodeURIComponent(req.params.url);

    manifesto.load(url, function(manifest) {

        manifest = manifesto.create(manifest);

        res.render('load', {
            //title: title,
            manifest: manifest.getLabel()
        });

    });

});

module.exports = router;
