var browserify = require('browserify');
var fs = require('fs');

var b = browserify('./lib',{standalone: 'App'});
b.bundle().pipe(fs.createWriteStream('public/app.js'));
