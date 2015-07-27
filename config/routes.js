var bodyparser = require('body-parser');

module.exports = function(app) {
 	app.use(bodyparser.json());

 };