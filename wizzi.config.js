const path = require('path');
module.exports = {
    wfjobName: "wizzifactory.github.io-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname),
    plugins: [
        'wizzi-core',
        'wizzi-web',
        'wizzi-js',
    ], 
    schemas: [
    ],
    globalContext: {
        isPackageDeploy: true,
        isDevelopment: false,
    },
};