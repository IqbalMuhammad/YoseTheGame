var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";
var expect = require('chai').expect;

var data = [
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'bomb' , 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'bomb' , 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ];

describe('Passing the Minesweeper: safe cell level:', function() {
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });

    it("returns class='safe' and innerHTML='1' when cell is clicked", function(done) {
        browser.visit(url, function(err) {
            browser.document.grid = data;

            browser.click('[id="cell-3x3"]');
            var element = browser.query('[id="cell-3x3"]');

            var classes = element.className;
            expect(classes).to.equal('safe');

            var innerHTML = element.innerHTML;
            expect(innerHTML).to.equal('');

            done();
        });
               
    });
   
});
