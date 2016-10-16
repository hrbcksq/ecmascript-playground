module.exports = {
    port: process.env.PORT || 3005,
    address: 'localhost',
    static: `${__dirname}\\public`,
    viewEngine: 'pug',
    viewsPath: `${__dirname}\\views`,
    databaseCredentials: {
        host: 'localhost',
        user: 'root',
        password: 'ascent',
        database: 'pike'
    }
}