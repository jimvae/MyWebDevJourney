import http from 'http';

const server = http.createServer((request, response) => {
    // console.log('method', request.method);
    // console.log('url', request.url);
    const user = {
        name: "Jim",
        skill: 'procrastinating'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);