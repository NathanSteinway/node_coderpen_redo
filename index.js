// Recreation of my coderpen from Saturday given to me by Zeal IT Consultants.
// By memory since I can't access the problem itself, so the assignment may not be 1 to 1.

const fs = require('fs');

// Format is <tag> <timestamp> <severity> <message>

// To do:
    // 1) E, W, I, and so on should be displayed as their full names.
    // 2) Each line should be ordered by it's timestamp.
    // 3) If severity is over 15, display "Catastrophic"

// Uses FileSystem node module to read data.txt then stuff it into data arg in it's callback function
fs.readFile('data.txt', 'utf8', (err, data) => {

    // removed if (err) statement from nodejs documentation, It doesn't seem necessary

    try {

        // Convert data to an array so I can use array methods on it!
        const dataArr = data.split('\n');

        // Sort to be easier to take in with the eyes
        dataArr.sort();

        // Since data is now an array called dataArr, I can access the strings within each indice w/ a for loop!
        for (var i = 0; i < dataArr.length; i++) {
            // Pseudocode:
                // Step 1:
                    // The prefix for each log tag begins at the start of each string. They need to be replaced with their full names.
                    // I need a way to track the current string, so I need a variable set to it.

            let currentString = dataArr[i]

                    // I need a method that will begin at the start of each string, then another to replace it w/ the full name without deleting the rest of the string.
                    // My set of data has E, W, I, and invalid strings, so I need a conditional statement to treat them differently.
            
            if (currentString.charAt(0) === ("E")) {
                let newString = currentString.replace("E", "Error");
                dataArr[currentString] = newString
                console.log(newString)
            } 
            else if (currentString.charAt(0) === ("W")) {
                let newString = currentString.replace("W", "Warn");
                dataArr[currentString] = newString
                console.log(newString)
            }
            else if (currentString.charAt(0) === ("I")) {
                let newString = currentString.replace("I", "Info")
                dataArr[currentString] = newString
                console.log(newString)
            }
            else {
                // If it ain't E, W, or I, don't do anything.
            }

        }
    }

    catch (err) {
        // not working w/ json so replaced msg here to avoid confusing myself
        console.error('Uhhh woops', err);
    }
})