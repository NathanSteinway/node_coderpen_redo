// Recreation of my coderpen from Saturday given to me by Zeal IT Consultants.
// By memory since I can't access the problem itself, so the assignment may not be 1 to 1.

const fs = require('fs');

// Format is <tag> <timestamp> <severity> <message>

// To do:
    // E, W, I, and so on should be displayed as their full names.
    // Each line should be ordered by it's timestamp.
    // If severity is over 15, display "Catastrophic"

// Uses FileSystem node module to read data.txt then stuff it into data arg in it's callback function
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return console.log("Something went wrong!")
    }

    try {

        // Convert data to an array so I can use array methods on it!
        const dataArr = data.split('\n');

        // Sort to be easier to take in with the eyes
        dataArr.sort();
    }

    catch (err) {
        console.error('Error parsing JSON:', err);
    }
})