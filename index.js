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
        // Uses .split('\n') to split 'em up by line
        const dataArr = data.split('\n');

            // My set of data has E, W, I, and invalid strings. I'd like to use a conditional statement to handle them, but I ran into a problem.
            // If I use an conditional statement to display the full tag names then it makes grabbing the other info annoying because the tag names are different sizes.
            // In order to avoid dataArr[i] index length shenanigans I should split the info into bits and pieces to be handled separately (maybe)

        // loops through dataArr
        for (let i = 0; i < dataArr.length; i++) {
        
            // logs the split dataArr[i] in console
            console.log(dataArr[i].split(' '))
        }
        


    }

    catch (err) {
        // not working w/ json so replaced msg here to avoid confusing myself
        console.error('Uhhh woops', err);
    }
})

// Ok so this doesn't work bc it makes reaching the other information in the string with array methods annoying because the tag names are different lengths...

// if (currentString.charAt(0) === ("E")) {
//     let newString = currentString.replace("E", "Error");
//     dataArr[currentString] = newString
//     console.log(newString)
// } 
// else if (currentString.charAt(0) === ("W")) {
//     let newString = currentString.replace("W", "Warn");
//     dataArr[currentString] = newString
//     console.log(newString)
// }
// else if (currentString.charAt(0) === ("I")) {
//     let newString = currentString.replace("I", "Info")
//     dataArr[currentString] = newString
//     console.log(newString)
// }
// else {
//     // If it ain't E, W, or I, don't do anything.
// }
