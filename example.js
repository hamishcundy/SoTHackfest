var express = require('express');
var app = express();
app.use('/', express.static('SoTHackfest/InvoiceTracker/'));
app.listen(9090, function(){ console.log('listening')});