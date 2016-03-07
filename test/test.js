var test = require("tape");
var server = require('../server.js');

test("'/' returns 302 statusCode", function (t) {
    server.inject({method: 'GET', url: '/'}, function (res) {
        t.equal(res.statusCode, 302, 'redirects successfully');
        t.end();
    });
});

test("'/static/{file*}' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/static/public/css/main.css'}, function (res) {
        t.equal(res.statusCode, 200, 'static file retrieved');
        t.end();
    });
});
