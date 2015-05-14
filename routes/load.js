var express = require('express');
var router = express.Router();
var manifesto = require('manifesto');

router.get('/', function(req, res, next) {

    var title = manifesto.sayHello("from node");

    //http://wellcomelibrary.org/iiif/b18035723/manifest
    manifesto.load("/data/manifest.json", function(manifest) {
        res.render('load', {
            title: title,
            manifest: manifest.label
        });
    });

});

module.exports = router;
