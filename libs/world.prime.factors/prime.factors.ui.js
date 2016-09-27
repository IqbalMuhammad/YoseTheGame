var primeFactors = require('./prime.factors')

var ui = function(request, response){
    response.setHeader('Content-Type', 'text/html');
    response.render("primeFactors.ui.html");
}
module.exports =  ui;
