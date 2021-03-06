var spec = module.exports = require('../mapbox-gl-js/src/style-spec/reference/v8');

// Make temporary modifications here when Native doesn't have all features that JS has.
delete spec.layout_symbol['symbol-sort-key'];
delete spec.layout_symbol['symbol-z-order'].values['auto'];
spec.layout_symbol['symbol-z-order'].default = 'viewport-y';

delete spec.layout_symbol['text-variable-anchor'];
delete spec.layout_symbol['text-radial-offset'];
delete spec.layout_symbol['text-justify'].values['auto'];
spec.layout_symbol['text-offset'].requires.splice(1, 1); // { "!": "text-radial-offset" }