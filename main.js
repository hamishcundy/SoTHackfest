var fs = require('fs');
var Xero = require('xero');
var express = require('express');
var xero = new Xero('NJRM3XEXDZDC6LSWFI4J9JREUD1IQK', 'QACOP5VZH6PBTTWFLAQCPPALRSG7JQ', fs.readFileSync('privatekey.pem'));
var users;
var invoices;
var receipts;
var payments;
//var xerocall = 
//app.use('/test', xerocall(req, res));
var app = express();
app.use('/', express.static('InvoiceTracker/home.html'));
app.use('/GraphTest', express.static('subxero/'));
app.get("/test", function (req, res) {
	xero.call('GET', '/Users', null, function(err, json) {
        if(users == null){
            console.log('Users called');
            if (err) {
                log.error(err);
                return res.json(400, {error: 'Unable to contact Xero'});
            }
            console.log('fetching');
            users = json;;
        }else{
            console.log('using cache');
        }
        return res.json(200, users);
    });
});
app.get("/Invoices", function (req, res) {
	xero.call('GET', '/Invoices', null, function(err, json) {
        if(invoices == null){
            console.log('Invoices called');
            if (err) {
                log.error(err);
                return res.json(400, {error: 'Unable to contact Xero'});
            }
            console.log('fetching');
            invoices = json;;
        }else{
            console.log('using cache');
        }
        return res.json(200, invoices);
    });
});
app.get("/Payments", function (req, res) {
    xero.call('GET', '/Payments', null, function(err, json) {
        if(payments == null){
            console.log('Payments called');
            if (err) {
                log.error(err);
                return res.json(400, {error: 'Unable to contact Xero'});
            }
            console.log('fetching');
            payments = json;;
        }else{
            console.log('using cache');
        }
        return res.json(200, payments);
    });
});
app.get("/Receipts", function (req, res) {
    xero.call('GET', '/Receipts', null, function(err, json) {
        if(receipts == null){
            console.log('Receipts called');
            if (err) {
                log.error(err);
                return res.json(400, {error: 'Unable to contact Xero'});
            }
            console.log('fetching');
            receipts = json;;
        }else{
            console.log('using cache');
        }
        return res.json(200, receipts);
    });
});
app.listen(9090, function () { console.log("up on 9090") });