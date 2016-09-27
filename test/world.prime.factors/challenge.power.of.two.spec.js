var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();

var server  = require('../../libs/server');
var expect = require('expect');

describe('Passing the Power of Two level:', function() {

    var testServer;

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('returns the expected output', function(done) {
        request('http://localhost:7000/primeFactors?number=16', function(error, response, body) {
            expect(body.replace(/\r?\n|\r|\s/g,"")).toEqual( JSON.stringify(
                {
                    "number" : 16,
                    "decomposition" : [ 2, 2, 2, 2 ]
                }
            ));

            done();
        });
    });
});
describe('return should be error not a number', () => {

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('return error not a number', done => {
        request('http://localhost:7000/primeFactors?number=hello', function(error, response, body){
            var json = JSON.stringify(eval("(" + body + ")"));
            expect(json).toEqual('{"number":"hello","error":"not a number"}');
            done();
        });
    });
});
describe('return should be error too big number', () => {

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('return error too big number', done => {
        request('http://localhost:7000/primeFactors?number=1000001', function(error, response, body){
            var json = JSON.stringify(eval("(" + body + ")"));
            expect(json).toEqual('{"number":1000001,"error":"too big number (>1e6)"}');
            done();
        });
    });
});
describe('return should multiple number', () => {

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('return error too big number', done => {
        request('http://localhost:7000/primeFactors?number=hello&number=200&number=300', function(error, response, body){
            var json = JSON.stringify(eval("(" + body + ")"));
            expect(json).toEqual('[{"number":"hello","error":"not a number"},{"number":200,"decomposition":[2,2,2,5,5]},{"number":300,"decomposition":[2,2,3,5,5]}]');
            done();
        });
    });
});

describe('form test ', () => {
    var url     = "http://localhost:7000/primeFactors/ui";

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('test all element', done => {
        browser.visit(url, function(error){
            browser.assert.elements("h1#title", 1);
            done()
        });
    });
});
