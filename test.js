var fs = require('fs');
var Xero = require('xero');
var express = require('express');
var xero = new Xero('NJRM3XEXDZDC6LSWFI4J9JREUD1IQK', 'QACOP5VZH6PBTTWFLAQCPPALRSG7JQ', fs.readFileSync('privatekey.pem'));
//var xerocall = 
//app.use('/test', xerocall(req, res));

app.get("/test", function (req, res) {
	xero.call('GET', '/Users', null, function(err, json) {
        if (err) {
            log.error(err);
            return res.json(400, {error: 'Unable to contact Xero'});
        }
        return res.json(200, json);
    });
});

app.listen(9090, function () { console.log("up on 9090") });