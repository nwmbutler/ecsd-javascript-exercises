let fs = require('fs')

let filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data)
});