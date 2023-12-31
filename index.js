// Recreation of my coderpen from Saturday given to me by Zeal IT Consultants.
// By memory since I can't access the problem itself, so the assignment may not be 1 to 1.

const fs = require('fs');

// Format is <tag> <timestamp> <severity> <message>

// To do:
  
    // EDIT: I swapped #1 and #2. When something needs to be sorted, I should really handle that first to avoid headaches I guess.

    // 1) Each line should be ordered by it's timestamp. - COMPLETE
    // 2) E, W, I, T, and so on should be displayed as their full names.
    // 3) If severity is over 15, display "Catastrophic"

// Uses FileSystem node module to read data.txt then stuff it into data arg in it's callback function
fs.readFile('data.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err)
        return console.log("Abort, abort!")
    }

    try {

        // Convert data to an array so I can use array methods on it!
        // Uses .split('\n') to split 'em up by line
        const dataArr = data.split('\n');

        // gonna need this to pull it out of the for loop
        sortedDataArr = [];

        // .split is a string method so I need to loop through dataArr to further mess w/ the data

            // HANDLES SORTING BY TIMESTAMP

            for (var i = 0; i < dataArr.length; i++) {
                // The data in each line needs to be split up, so that should be done first.
                var newData = dataArr[i].split(' ')

                // These lines need to be sorted by the timestamp, so that should be done next.
                // Before the sorting was messing up because I hadn't converted these to integers.
                // This way I can target each index AND give them a name which will hopefully make things easier.
                let timestamp = parseInt(newData[1])
                let severity = parseInt(newData[2])

                // Here I created a new array using the original values for <tag> and <message> and new values for the <timestamp> and <severity>
                var convertedData = [newData[0], timestamp, severity, newData[3]]
                
                // shove convertedData into an empty array defined outside of this for loop's scope
                sortedDataArr.push(convertedData)
            }
        
        // Sort by timestamp!
        sortedDataArr.sort((a,b) => a[1] - b[1])
        
            // Now that the array is sorted it's time to handle the <tag> names
            // Loop through newly sorted array

            // HANDLES TAG NAMES
            for (var i = 0; i < sortedDataArr.length; i++) {

                // conditional statement to handle the different cases
                // EDIT: I'm not sure what I did wrong.
                    // Using the raw reference seems to have fixed it? I'm scared

                if (sortedDataArr[i].includes("E")) {
                    sortedDataArr[i][0] = "Error"
                }
                else if (sortedDataArr[i].includes("W")) {
                    sortedDataArr[i][0] = "Warn"
                }
                else if (sortedDataArr[i].includes("T")) {
                    sortedDataArr[i][0] = "Trace"
                }
                else if (sortedDataArr[i].includes("I")) {
                    sortedDataArr[i][0] = "Info"
                }
                else {
                    
                    // do nothing for now
                    
                }
                
            }

            // HANDLES SEVERITY
            for (let i = 0; i < sortedDataArr.length; i++) {
                if (sortedDataArr[i][2] > 15) {
                    sortedDataArr[i][2] = "CATASTROPHIC"
                }
                else {
                    // do nothing for now
                }
            }

            console.log(sortedDataArr)
    }

    catch (err) {
        // not working w/ json so replaced msg here to avoid confusing myself
        console.error('Uhhh woops', err);
    }
})
