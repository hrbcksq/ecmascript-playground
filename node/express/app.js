var uuid = require('node-uuid');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();

//Envirement
var port = process.env.PORT || 3005;

//View engine
app.set('view engine', 'pug');
app.set('views', `${__dirname}\\views`);

//Body parsers
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//Static files
app.use(express.static(`${__dirname}\\public`));

//logging
app.use('/', (req, res, next) => {
    console.log(req.url);
    next();
});

//index
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Person database',
        message: 'Enter the person credentials'
    });    
});

var selector = function(storage, id) {
    return storage.find((obj) => obj.id === id)
}

var storageSelector = selector.bind(null, storage);

//person
app.get('/person/:id', (req, res) => {
    var id = req.params.id;
    var item = storageSelector(id);
    res.render('person', item);    
});


app.post('/person', (req, res) => {
    var id = uuid.v4();
    storage.push({
        id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname   
    });     
    res.redirect(`/person/${id}`);
});


//Simple api

app.get('/api', (req, res) => {
    res.json(storage);
});

app.get('/api/:id', (req, res) => {
    var id = req.params.id;
    res.json(storageSelector(id));
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

app.listen(port, 'localhost', () => {
    console.log(`Server running at ${port} port`);
});

//Lorem ipsum ;)
var storage = [
{
"id": "d58a4cf6-333c-4008-a14c-e6b049a54f99",
"firstname": "Tony",
"lastname": "Alpino"
},
{
"id": "4f843b95-a512-43aa-80d9-edefb99889b6",
"firstname": "Jane",
"lastname": "Loo"
},
{
  "id": "af00b898-da71-4525-948e-081bca826dd4",
  "lastname": "Alfred",
  "firstname": "Einstein"
},
{
"id": "6a48d967-452a-4941-aa1a-9fb752777e78",
"firstname": "Summer",
"lastname": "Autumn"
}
];