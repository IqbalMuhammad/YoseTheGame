var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
	var number = request.query['number'];

    console.log('Prime Factors Challenge Number: ' + number);
    response.setHeader('Content-Type', 'application/json');
    if(isNaN(number)){
        response.send({ number: number, error: "not a number" });
    }
    if(number>1000000){
        response.send({ number: parseInt(number), error: "too big number (>1e6)" });
    }
    var decomposition = primeFactorsOf(number);

    response.send({ number: parseInt(number), decomposition: decomposition });
};

module.exports = primeFactors;
