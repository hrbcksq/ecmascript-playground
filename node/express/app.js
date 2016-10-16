var config = require('./config'),
    express = require('express'),
    apiController = require(`./controller/apiController`),
    htmlController = require(`./controller/htmlController`),
    storageProvider = require(`./service/storage`),
    loggerProvider = require(`./service/logging`);

var app = express();
var logger = loggerProvider();
var repository = storageProvider(config.databaseCredentials);

//View engine
app.set('view engine', config.viewEngine);
app.set('views', config.viewsPath);

//Static files
app.use(express.static(config.static));

app.use((req, res, next) => {
    logger.log(req.url);
    next();
});

//Controllres
apiController(app, repository, logger);
htmlController(app, repository, logger);


//Start
app.listen(config.port, config.address, () => {
    console.log(`Server running at ${config.port} port`);
});
