var express = require('express');
var app = express();
app.use('/', express.static('InvoiceTracker/'));

var Xero = require('xero');
var xero = new Xero('NJRM3XEXDZDC6LSWFI4J9JREUD1IQK', 'QACOP5VZH6PBTTWFLAQCPPALRSG7JQ', 'MIICXAIBAAKBgQCzKk8AxYuuAfWwApV6HUMkr/O1YP4f7I9zJ5XM3adSSsoYvBgA
xaXVo0yoZHMFQ6DphGqV9aUUYoG9eRygqiNKtyUNLdqbc3WaCcFKZYJ1itYIYeTv
LT3WuAbcIwYTCBmx7u6Ta2z3EkY5/xG6qqwzzpQsei9UpbbA+cct9dCMewIDAQAB
AoGBAJxQO2E2+Oi1+P65ImTKBvyJLp1+o/iCUZ1sWfvFHuhjK/Nsl5yE1GyR7p20
Fc3v9QIHb16qVH52ey8t7VYXWnWsZwGN2MGWX9cVjP74arVJZS83okZjHx0OUrUm
NHn2si0MJruPWiSJaNUgXXoNRtch6oIvewcn71TfVb1RDBHhAkEA6FPaXwFwUHGO
FONChXdNIpbMvjS9MKmCXDNtSF7Q43UFxOZrHnZlnGSGcTaAyvx2xNtWu2f91Cow
+Hv7G+TMswJBAMVrvoe0FynHbV3APKDzoHNgFZH4N1XN4RcMKX9a4n60+IkclXt9
9exFlhs8c7v9aGolRf1mpUqaSUCrwIRKtRkCQCva4Ea8y8mzlcFloMH24i2cT6u7
4taTuNLUtlVJ6J53EY64fBH1AXtDEom+YxNuErFYQggAOk7ZZAMTzDPYvbcCQH0p
2DwVE3Jre40qqcWpcBp12ncXFY4S3xhLn6ucpWiLt97F/oeyzk2juI1AAGg5Ow/A
3eTQRQ9NTg/wVDgLXVECQF063H/oswSqu0QwOZnaFeoWQ7+q2WpV3EeXiexUg9p7
0EOIzXZdyNAbMLgy1aX6ZdHbU+IJtj0Izubxb7WJ2Co=');
app.use('/test', xero.call('GET', '/Users', null, function(err, json) {
	if(err){
		log.error(err);
		return res.json(400, {error: "Unable to contact Xero"});
	}
	return res.json(200, json);
}));
app.listen(9090, function(){ console.log('listening')});