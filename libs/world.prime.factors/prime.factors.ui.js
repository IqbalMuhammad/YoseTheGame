var primeFactors = require('./prime.factors')

var ui = function(request, response){
    response.setHeader('Content-Type', 'text/html');
    var number = request.query['number'];
    var results =  primeFactors.doElection(number);
    var numbers = results.decomposition;
    // console.log();
    numbers = numbers.toString();
    console.log(numbers);
    numbers = numbers.replace(/[,]+/g, " x ");
    var results = results.number+ '= '+ numbers;
    console.log(results);
    response.render("primeFactors.ui.ejs", {result:results});

}
module.exports =  ui;
