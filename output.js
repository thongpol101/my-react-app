var flowRemoveTypes = require('flow-remove-types');
var fs = require('fs');

var input = fs.readFileSync('input.js', 'utf8');
var output = flowRemoveTypes(input);
fs.writeFileSync('output.js', output.toString());
