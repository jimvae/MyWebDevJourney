// const script2 = require('./script2');
import { largeNumber } from './script2.js';

const a = largeNumber;
const b = 5;

setTimeout(() => {
    console.log(a + b);
}, 3000);

// console.log(__dirname);


// Remember before and after ES6
// after es6, you can just ' npm init -y'
//  -y to say yes to all the prompts
// use require for backward compatibility
