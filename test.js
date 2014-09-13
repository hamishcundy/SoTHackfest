var fs = require('fs');
var Xero = require('xero');
var xero = new Xero('NJRM3XEXDZDC6LSWFI4J9JREUD1IQK', 'QACOP5VZH6PBTTWFLAQCPPALRSG7JQ', fs.readFileSync('privatekey.pem'));
var req = xero.call('GET', '/Users');
req.setHeader('Accept', 'text/json');
req.on('data', function(response){
	console.log(response);
});

req.end();
