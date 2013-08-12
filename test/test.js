var assert = require('assert')

describe('sgRandomBetween', function(){

	it('should get a random number between 1-2', function(){

		var val = sgRandomBetween(1,2);

		assert(val === 1 || val === 2);

	});

	it('should get a random number between 2-1', function(){

		var val = sgRandomBetween(2,1);

		assert(val === 1 || val === 2);

	});

	it('should get a random number with invalid params', function(){

		assert(isNaN(sgRandomBetween(1,'a')));
		assert(isNaN(sgRandomBetween('a',1)));
		assert(isNaN(sgRandomBetween('a','b')));
		assert(isNaN(sgRandomBetween('a',null)));
		assert(isNaN(sgRandomBetween('a',undefined)));
		assert(isNaN(sgRandomBetween('a',true)));
		assert(isNaN(sgRandomBetween('a',false)));
		assert(isNaN(sgRandomBetween('a',{})));
		assert(isNaN(sgRandomBetween('a',/./)));

	});

	it('should get a random number between 1-5 and ensure that 1 and 5 are inclusive', function(_done){

		this.slow(10000);

		/**
		 * I totally get that this test could theoratically not work
		 */
		var numGoodRandomNumbersFound = []
		  , getARandomNumber = function() {

		  		var val = sgRandomBetween(1,5);

		  		if (val == 1 || val == 5) numGoodRandomNumbersFound.push(val);

		  		if (numGoodRandomNumbersFound.length < 2)
		  			setTimeout(getARandomNumber, 10)
		  		else
		  			_done()

			}

		getARandomNumber();

	});

});