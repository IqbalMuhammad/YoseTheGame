var request = require('request');
var http    = require('http');
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
describe('description', () => {

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('return error not a number', done => {
        request('http://localhost:7000/primeFactors?number=hello', function(error, response, body){
            expect(body.replace(/\r?\n|\r/g,"")).toEqual(
                JSON.stringify(
                   {
                       "number" : "hello",
                       "error" : "not a number"
                   }
               )
            );
            done();
        })
    });

});
