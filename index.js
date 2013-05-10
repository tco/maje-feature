// Resources
var stampit = require('stampit');

// Maje Feature
var feature = stampit({
    extend: function extend(specification) {
        return stampit(this).create(specification);
    }
});

module.exports = feature