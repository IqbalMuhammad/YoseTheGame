var request     = require('request');
var expect      = require('chai').expect;
var http        = require('http');
var querystring = require('querystring');
var Browser     = require('zombie');
var browser     = new Browser();
var server      = require('../../libs/server');
var url         = "http://localhost:7000/fire/geek";

describe('World Fire', function() {
    beforeEach(function() {
        testServer = http.createServer(server).listen(7000);
    });

    afterEach(function() {
        testServer.close();
    });

    it('return correct output when parameter is defined', function(done) {
        var query = {
            width: 3,
            map: '...P...WF'
        };

        browser.visit(url + '?' + querystring.stringify(query), function() {
            var response = browser.document.body.innerHTML;

            expect(JSON.parse(response)).to.deep.equal({
                map: [
                    "...",
                    "P..",
                    ".WF"
                ],
                moves: [
                    { dx: 1, dy: 0 },
                    { dx: 0, dy: 1 },
                    { dx: 1, dy: 0 },
                ]
            });

            done();
        });
    });
});
