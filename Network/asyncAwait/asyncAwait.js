movePlayer(100, 'Left')
    .then(() => movePlayer(200, 'Left'))
    .then(() => movePlayer(400, 'Right'))
    .then(() => movePlayer(300, 'Left'));


// same as

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // pause until we get a response
    await movePlayer(200, 'Left'); // pause until we get a response
    await movePlayer(300, 'Left'); // pause until we get a response
    await movePlayer(400, 'Left'); // pause until we get a response
    // you can now declare constants
}

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log('users', results[0]);
    console.log('posts', results[1]);
    console.log('albums', results[2]);
}).catch(() => console.log('error'))

// same as
// same as delcaring it as n async function first
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);

    } catch(err) {
        console.log('oops', err);
    }
}

// for await of
// loop through multiple promises
const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url);
    }
}

const getData2 = async function() {
    const arrayOfPromisses = urls.map(url => fetch(url));
    for await (let request of arrayOfPromisses) {
        const data = await request.json();
        console.log(data);
    }
}