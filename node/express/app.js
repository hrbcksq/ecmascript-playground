var config = require('./config'),
    express = require('express'),
    apiController = require(`./controller/apiController`),
    htmlController = require(`./controller/htmlController`),
    // sqlProvider = require(`./service/sqlProvider`),
    mongoProvider = require('./service/mongoProvider'),
    loggerProvider = require(`./service/logging`);

var app = express();
var logger = loggerProvider();
// var repository = sqlProvider(config.sqlDbConnectionSettings);

var repository = mongoProvider(config.mongoDbConnectionSettings);

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
