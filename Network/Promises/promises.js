const promises = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

// promises
//     .then(result => result + '!')
//     .then(result2 => {
//         console.log(result2);
//     })
//     .catch(console.log('error'));

// Catches any error that happens in the promise


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiiii')
});
// after 100 ms, return 'Hiiii

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Helloooo')
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "It's me")
});

// will not return if there is at least one error
Promise.all([promises, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

// all Settled runs all the promises regardless of errors
Promise.allSettled([promises, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})
// it waits for everything to load first before logging the values