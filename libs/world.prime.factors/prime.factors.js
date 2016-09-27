var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
	var number = request.query['number'];
    console.log('Prime Factors Challenge Number: ' + number);
    response.setHeader('Content-Type', 'application/json');
	result = Array.isArray(number)?primeFactors.buildResult(number):primeFactors.doElection(number);
    response.send(result);
};

primeFactors.buildResult = function(number){
	var result =[];
	number.forEach(elem => {
		result.push(primeFactors.doElection(elem));
	});
	return result;
}
primeFactors.doElection = function(elem){
	var result =null;
	if(isNaN(elem)){
		return { number: elem, error: "not a number" };
	}
	if(elem>1000000){
		return ({ number: parseInt(elem), error: "too big number (>1e6)" });
	}else {
		var decomposition = primeFactorsOf(elem);
		return ({ number: parseInt(elem), decomposition: decomposition });
	}
}
module.exports = primeFactors;
