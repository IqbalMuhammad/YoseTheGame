var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {

	var number = request.query['number'];
    console.log('Prime Factors Challenge Number: ' + number);
    response.setHeader('Content-Type', 'application/json');
    if(isNaN(number)){
        response.send({ number: number, error: "not a number" })
        return;
    }
    var decomposition = primeFactorsOf(number);

    response.send({ number: parseInt(number), decomposition: decomposition });
};

module.exports = primeFactors;
