var astroport = function(request, response) {
	response.setHeader('Content-Type', 'text/html');
	
    var ship = request.query['ship'];
    var res = "";
    if(typeof ship != undefined){        
        res = ship;
    }

    response.render('world.astroport/gates.html', {result:res});
};

module.exports = astroport;