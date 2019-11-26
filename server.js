var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));

app.all('/*', function (req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile(__dirname + '/index.html');
});

app.listen(3002); //the port you want to use
