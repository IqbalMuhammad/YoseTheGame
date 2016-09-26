var checkBombAround = require('../../../libs/world.minesweeper/lib/check.bomb.around');
var expect = require('chai').expect;

var data = [
		['empty', 'bomb', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty'],
		['bomb',  'bomb', 'empty', 'empty', 'empty', 'empty', 'bomb', 'bomb'],
		['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
		['bomb',  'empty', 'empty', 'bomb',  'empty', 'empty', 'empty', 'empty'],
		['empty', 'empty', 'empty', 'empty', 'bomb', 'bomb', 'bomb', 'empty'],
		['empty', 'empty', 'empty', 'empty', 'bomb',  'empty', 'bomb', 'empty'],
		['bomb', 'bomb', 'bomb',  'empty', 'bomb',  'bomb',  'bomb', 'bomb'],
		['empty', 'bomb', 'empty', 'empty', 'empty', 'empty', 'bomb',  'empty'],
	]
describe("Check bomb around", function() {
  it("checks how many bombs around (middle field)", function() {
  	var bombCount = checkBombAround(data, [5,5]); 

  	expect(bombCount).to.equal(8);
  });

  it("checks how many bombs around (top corner)", function(){
	var bombCount = checkBombAround(data, [0,0]);

	expect(bombCount).to.equal(3);
  });

  it("checks how many bombs around (top corner)", function(){
	var bombCount = checkBombAround(data, [0,7]);

	expect(bombCount).to.equal(3);
  });

  it("checks how many bombs around (bottom corner)", function(){
	var bombCount = checkBombAround(data, [7,7]);

	expect(bombCount).to.equal(3);
  });

  it("checks how many bombs around (bottom corner)", function(){
	var bombCount = checkBombAround(data, [7,0]);

	expect(bombCount).to.equal(3);
  });
});
