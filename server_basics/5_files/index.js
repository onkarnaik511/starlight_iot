var fs = require('fs');

fs.writeFile('welcome.txt', 'Welcome to Starlight!!!', function (err) {
    if (err) throw err;
    console.log('File Write Complete!');

    fs.readFile('welcome.txt', function(err, data) {
        console.log(data.toString());
    });
});

