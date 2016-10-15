var config = require('./config'),
    express = require('express'),
    apiController = require(`./controller/apiController`),
    htmlController = require(`./controller/htmlController`),
    storageService = require(`./service/storage`),
    logginService = require(`./service/logging`);

var app = express();
var storage = storageService();

//View engine
app.set('view engine', config.viewEngine);
app.set('views', config.viewsPath);

//Static files
app.use(express.static(config.static));

//Controllres
logginService(app);
apiController(app, storage);
htmlController(app, storage);


//Start
app.listen(config.port, config.address, () => {
    console.log(`Server running at ${config.port} port`);
});