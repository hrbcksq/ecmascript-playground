module.exports = {
    port: process.env.PORT || 3005,
    address: 'localhost',
    static: `${__dirname}\\public`,
    viewEngine: 'pug',
    viewsPath: `${__dirname}\\views`
}