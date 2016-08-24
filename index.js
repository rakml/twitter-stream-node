var express = require('express')
	, app 	= express()
	, http	= require('http').Server(app)

app.get('/', function(req, res) {
	res.send('Hello World')
})

app.set('port', process.env.PORT || 8080);
http.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});