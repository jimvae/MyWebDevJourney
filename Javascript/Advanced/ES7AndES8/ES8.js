// string method
const a = "string"
const b = a.padStart(10); //'          string' -> 10 spaces in front
const c = a.padEnd(10);
console.log(b);
// padEnd and padStart can have a second parameter -> padStart(10, =), pads the end with 10 '='


// trailing commas in parameters, much cleaner and good for larger code (easier to see changes in github)
const fun = (
                a,
                b,
                c,
                d) => {
    console.log(a);
}

// 
// Object.values;
// Object.entries;
// Object.keys;
// enables you to use array functions such as map, filter, reduce
let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})


Object.values(obj).forEach((value) => {
    console.log(value);
})

Object.entries(obj).forEach((value) => {
    console.log(value);
})

Object.entries(obj).map((entry) => {
    // entry[1] is the value
    // entry[0] is the key
    return entry[1] + entry[0].replace('username', '');
})



Object.entries(obj).map(value => value.join(" ")).join(' ');