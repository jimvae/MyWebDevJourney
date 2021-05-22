const fs = require('fs');

function count(puzzle) {
    // const len = puzzle.length
    // let number = 0;

    // for(let i = 0; i < len; i++) {
    //     if (puzzle[i] === '(') {
    //         number++;
    //     } else {
    //         number--;
    //     }

    // }

    const open = puzzle.split("(").length - 1;
    const closed = puzzle.split(")").length - 1;

    return open - closed
}

fs.readFile('./puzzle.txt', (err, data) => {
    if (err) {
        console.log('errrrrorrrrrr');
    }
    console.time('timerName');
    const datagram = data.toString('utf-8');
    const array = datagram.split('');

    const answer = array.reduce((acc, currentValue) => {
        return (currentValue === '(' ? acc + 1 : acc - 1);
    },0);

    console.log('answer', answer);

    // const open = datagram.split("(").length - 1;
    // const closed = datagram.split(")").length - 1;
    // const answer = open - closed;
    // console.log('answer', answer);

    console.timeEnd('timerName');
    // encoding to utf 8
})

