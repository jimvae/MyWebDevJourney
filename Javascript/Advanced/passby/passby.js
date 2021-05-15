// pass by value
const a = 5;
const b = a;
b++;
// a should be 5, b should be 6 --> pass by value (primitive type)


let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypass';
// obj1's password is changed --> pass by reference (objects)

// ARRAY are just objects
var c = [1,2,3,4,5];
var d = c;
d.push(6);
// both c and d are affected --> pass by reference (objects)

var e = [].concat(c);
// creates a new object / copying in a different memory space
e.push(7); // c is not affected


let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj); //no longer pass by reference
let clone2 = {...obj}  // cleaner way to clone

// be warry of shallow clone
let obj2 = {
    a: 'a', 
    b: 'b', 
    c: 'c',
    d: {another: 'copy'} // another object here, 
};
// copying obj2 and modifying d afterwards  affects
// all the copies and original (shallow clone), only copying
// the first layer.

// deep cloning
let deepClone = JSON.parse(JSON.stringify(obj));
// be careful of performance issues