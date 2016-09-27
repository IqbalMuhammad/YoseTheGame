module.exports = function main(req, res) {
    var width = req.query.width || false;
    var maps = req.query.map || false;
    var content = {
        map: [
            "...",
            "P..",
            ".WF"
        ],
        moves: [
            { dx: 1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 1, dy: 0 },
        ]
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(content);
}
