var fs = require('fs');

fs.writeFile('welcome.txt', 'Welcome to Starlight!!!', function (err) {
    if (err) throw err;
    console.log('File Write Complete!');
});

