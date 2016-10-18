var _ = require('lodash');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');

module.exports = function(app, storage, logger) {
    //json body parser
    app.use(bodyParser.json());

    //error handler
    var errorHandler = function(res) {
        return function (err) {
            logger.log(err);
            res.status(500).end();
        };        
    }

    //Simple api
    app.get('/api', (req, res) => {
        storage.getAll() 
            .then((result) => {
                // console.log(result);
                res.json(result)
                res.status(200).end();                
            })
            .catch(errorHandler(res));
    });

    app.get('/api/:id', (req, res) => {
        var id = req.params.id;
        storage.getById(id)
            .then((result) => {
                res.json(result);
                res.status(200).end();
            })
            .catch(errorHandler(res));        
    });

    app.post('/api', (req, res) => {
        var item = req.body;
        storage.create(item)
            .then(() => {
                console.log('created item: ' + JSON.stringify(item));
                res.status(200).end();
            })
            .catch(errorHandler(res));
    });

    app.delete('/api', (req, res) => {
        var id = req.body.id;
        storage.delete(id)
            .then(() => {
                console.log('deleted item with ID:' + id);
                res.status(200).end();
            })
            .catch(errorHandler(res));               
    });

    app.put('/api', (req, res) => {
        var input = req.body;        
        storage.update(input)
            .then(() => {
                console.log('updated')
                res.status(200).end();
            })
            .catch(errorHandler(res));
    });    
}