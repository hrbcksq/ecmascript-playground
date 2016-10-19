var path = require('path');

var config = {
    entry: {
        app: ['./public/main.ts']
    },
    output: {     
        path: path.resolve(__dirname, 'public'), 
        filename: 'app.js'
    },    
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.ts'],        
    },
    module: {
        loaders: [{
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']    
      }]
    }
}

module.exports = config;