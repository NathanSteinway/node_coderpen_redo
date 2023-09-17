// Recreation of my coderpen from Saturday given to me by Zeal IT Consultants.
// By memory since I can't access the problem itself, so the assignment may not be 1 to 1.

const fs = require('fs');

// Format is <tag> <timestamp> <severity> <message>

// To do:
  
    // EDIT: I swapped #1 and #2. When something needs to be sorted, I should really handle that first to avoid headaches I guess.
    
    // 1) Each line should be ordered by it's timestamp.
    // 2) E, W, I, T, and so on should be displayed as their full names.
    // 3) If severity is over 15, display "Catastrophic"

// Uses FileSystem node module to read data.txt then stuff it into data arg in it's callback function
fs.readFile('data.txt', 'utf8', (err, data) => {

    // removed if (err) statement from nodejs documentation, It doesn't seem necessary

    try {

        // Convert data to an array so I can use array methods on it!
        // Uses .split('\n') to split 'em up by line
        const dataArr = data.split('\n');

        // .split is a string method so I need to loop through dataArr to further mess w/ the data

        for (var i = 0; i < dataArr.length; i++) {
            // The data in each line needs to be split up, so that should be done first.
            let newData = dataArr[i].split(' ')
            
            // These lines need to be sorted by the timestamp, so that should be done next.
            // Before the sorting was messing up because I hadn't converted these to integers.
            // This way I can target each index AND give them a name which will hopefully make things easier.
            let timestamp = parseInt(newData[1])
            let severity = parseInt(newData[2])

            // Here I created a new array using the original values for <tag> and <message> and new values for the <timestamp> and <severity>
            let convertedData = [newData[0], timestamp, severity, newData[3]]
            
            console.log(convertedData)
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
