var astroport = function(request, response) {
	var content="<html><head><style>";
	content+='td { border: 1px solid #000; width: 30px; height: 30px; }\n';
	content+='.lost{ background: red; }';
	content+='</style>';
	content+='</head>';
	content+='<body><h1 id="astroport-name">Darth Vader</h1>';

	content+="</body></html>";

	response.setHeader('Content-Type', 'text/html');
	response.send(content);
};

module.exports = astroport;