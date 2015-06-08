
var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;