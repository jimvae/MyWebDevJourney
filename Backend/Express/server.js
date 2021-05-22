import express from 'express';
import path from "path";

const __dirname = path.resolve();
const app = express();

// in order to parse what you get from post 
// parse x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// to parse raw json
app.use(express.json());


// concept of Middleware
// app.use((req, res, next) => {
//     console.log('<h1>HELLLLOOOOOO</h1>');

//     // in order to go to the next function, use next
//     next();
// })

app.post('/profile', (req, res) => {
    
    console.log(req.body);
    res.send('Success');
})


// app.get('/', (req, res) => {
 
//     const user = {
//         name: 'Sally',
//         hobby: 'Soccer'
//     }
//     // res.send('SUP DUDE');
//     res.send(user);
//     // don't need to stringify is the content is a json file (auto)
// })

// http://localhost:3000/profile
app.get('/profile', (req, res) => {
    const user = {
        name: 'Profile',
        hobby: 'Hobby'
    }
    // res.send('SUP DUDE');
    res.send(user);
    // don't need to stringify is the content is a json file (auto)
})
app.listen(3000);


// learning about RESTful APIs
app.get('/:id', (req,res) => {
    // localhost:3000/?name=jim&age=31
    console.log(req.query);
    // returns name -> jim and age -> 31
    // query string

    req.body

    // checkpostman, they have a section that has headers
    console.log(req.headers);

    // if we change / to '/:id', returns {id: 1234} e.g. localhost:3000/1234
    console.log(req.params);

    res.status(404).send('not found');
    // gives the status 

    res.send('getting root');
})

// sending files
app.use(express.static(__dirname + '/public'));
