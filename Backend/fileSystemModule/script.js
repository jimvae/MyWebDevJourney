const fs = require('fs');
// or 
// import fs from 'fs';

// this is asyn, will let you go to the next line of code
// while performing the task inside
// you can keep going ahead
// you are not blocking the execution
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrrrorrrrrr');
    }
    console.log(data.toString('utf-8'));
    // encoding to utf 8
})


// this is synchronous, 
// finish reading the file and then move on line by line
const file = fs.readFileSync('./hello.txt');
console.log(file.toString());

// add txt
// if hello.txt does not exist, it will create it for us
fs.appendFile('./hello.txt', 'This is so cool!', err => {
    if (err) {
        console.log(err);
    }
})

// write
// fs.writeFile('./bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
// })
console.time('timerName');
console.timeEnd('timerName');