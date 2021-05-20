const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))
// catches any error from any fetch
.finally(() => console.log('extra'));
// finally gets executed regardless of error or success


// Promises are like event listeners, but only fails or success once!
// either resolved or reject 
// fullfill, reject 