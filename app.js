//create an app server
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.listen(process.env.VCAP_APP_PORT || 3000);
console.log('Listening on ' + process.env.VCAP_APP_PORT + ' Or 3000');
