var primeFactors = require('./prime.factors')

var ui = function(request, response){
    response.setHeader('Content-Type', 'text/html');
    var number = request.query['number'];
    var results =  primeFactors.doElection(number);
    var results = results.number+ ': '+ results.decomposition;
    console.log(results);
    response.render("primeFactors.ui.ejs", {result:results});

}
module.exports =  ui;
