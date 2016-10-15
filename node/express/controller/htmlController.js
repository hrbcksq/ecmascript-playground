var bodyParser = require('body-parser');
var uuid = require('node-uuid');

module.exports = function(app,storage) {
    //urlencoded parser    
    app.use(bodyParser.urlencoded({extended: false}));

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
        var item = storage.selector(id);
        res.render('person', item);
    });

    //post person
    app.post('/person', (req, res) => {
        var id = uuid.v4();
        storage.push({
            id: id,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        res.redirect(`/person/${id}`);
    });    
}