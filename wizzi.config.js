const path = require('path');
module.exports = {
    wfjobName: "wizzifactory.github.io-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname),
    plugins: [
        './wizzi-core/dist/index.js', 
        './wizzi-js/dist/index.js', 
        './wizzi-web/dist/index.js', 
    ], 
    pluginsBaseFolder: path.join(__dirname, '..', 'wizzi', 'packages'),
    /*
    plugins: [
        'wizzi-core',
        'wizzi-web',
        'wizzi-js',
    ],
    */ 
    schemas: [
    ],
    globalContext: {
        isPackageDeploy: true,
        isDevelopment: false,
    },
};