var _ = require('lodash');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');

module.exports = function(app, storage) {
    //json body parser
    app.use(bodyParser.json());

    //Simple api
    app.get('/api', (req, res) => {
        res.json(storage);
    });

    app.get('/api/:id', (req, res) => {
        var id = req.params.id;
        res.json(storage.selector(id));
    });

    app.post('/api', (req, res) => {
        var item = req.body;
        item.id = uuid.v4();
        storage.push(item)
        res.status(200);
        res.end();
    });

    app.delete('/api', (req, res) => {
        var id = req.body.id;
        _.remove(storage, (item) => item.id === id);
        res.status(200).end();
    });

    app.put('/api', (req, res) => {
        var input = req.body;
        var index = _.findIndex(storage, (item) => item.id === input.id);
        storage[index] = input;
        res.status(200);
        res.end();
    });    
}