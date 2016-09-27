var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../../libs/server');

describe('Passing the astroport gates level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answers with text/html header', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(response.headers['content-type']).to.equal('text/html');
            done(); 
        });
    });

    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'astroport-name' );
            done();
        });
    });
   
    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'gate-1' );
            done(); 
        });
    });
    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'gate-2' );
            done();
        });
    });
    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'gate-3' );
            done();
        });
    });
    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'ship-1' );
            done();
        });
    });
    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'ship-2' );
            done();
        });
    });
    it('returns the expected output', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( 'ship-3' );
            done();
        });
    });
   
});