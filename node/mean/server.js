var express = require('express');

var app = express();

var items = [
    'toby',
    'angela',
    'markus'
]

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json(items);
    res.end();
});

app.listen('4000', 'localhost', () => {
    console.log('Server is running on 4000 port');
});