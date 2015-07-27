// require express so that we can build an express app
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// require path so that we can use path stuff like path.join
var path = require('path');


// This goes in our server.js file so that we actually use the mongoose config file!
require('./config/mongoose.js');
// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
require('./config/routes.js')(app);
// instantiate the app
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/register', function(req,res){
	console.log("POST /register", req.body);
	res.send(req.body);
})
app.listen(3000, function() {
  console.log('cool stuff on: 3000');
});