var astroport = function(request, response) {
	response.setHeader('Content-Type', 'text/html');
	response.render('world.astroport/gates.html');
};

module.exports = astroport;