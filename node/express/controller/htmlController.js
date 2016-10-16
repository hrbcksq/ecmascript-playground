var bodyParser = require('body-parser');
var uuid = require('node-uuid');

module.exports = function(app,storage, logger) {
    //urlencoded parser    
    app.use(bodyParser.urlencoded({extended: false}));

    //error handler
    var errorHandler = function(res) {
        return function(err) {
            logger.log(err);
            res.status(500);
        };        
    }

    // index
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Person database',
            message: 'Enter the person credentials'
        });
    });    

    //get person
    app.get('/person/:id', (req, res) => {
        var id = req.params.id;
        storage.getById(id)
            .then((item) => {
                res.render('person', item);
            })
            .catch(errorHandler(res));        
    });

    //post person
    app.post('/person', (req, res) => {          
        storage.create(req.body)
            .then(() => {
                console.log('person is created');
                res.end();
                // res.redirect(`/person/${id}`);
            })
            .catch(errorHandler(res));                
    });    
}