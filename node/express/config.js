module.exports = {
    port: process.env.PORT || 3005,
    address: 'localhost',
    static: `${__dirname}\\public`,
    viewEngine: 'pug',
    viewsPath: `${__dirname}\\views`,
    sqlDbConnectionSettings: {
        host: 'localhost',
        user: '<username>',
        password: '<password>',
        database: 'pike'
    },
    mongoDbConnectionSettings: 'mongodb://<username>:<password>@ds059496.mlab.com:59496/shared'

}