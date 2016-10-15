module.exports = function(app) {    
    //Logging
    app.use('/', (req, res, next) => {
        console.log(req.url);
        next();    
    });
}