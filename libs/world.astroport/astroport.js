var astroport = function(request, response) {
	response.setHeader('Content-Type', 'text/html');
	response.render('world.astroport/astroport_name.html');
};

module.exports = astroport;