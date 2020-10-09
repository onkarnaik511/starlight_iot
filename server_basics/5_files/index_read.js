var fs = require('fs');

fs.readFile('welcome.txt', function(err, data) {
    console.log(data);
});
