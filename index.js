const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return console.log("Something went wrong!")
    }

    try {
        console.log(data)
    }

    catch (err) {
        console.error('Error parsing JSON:', err);
    }
})