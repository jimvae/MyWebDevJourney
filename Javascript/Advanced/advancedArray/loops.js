const array = [1,2,3,4,5];
const double = [];

// for Each just iterate
// num is the element in the array
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
// ///////////////////MAP////////////////////
// Map returns an array / creates a new array
const mapArray = array.map((num) => {
    return num * 2;
})

// OR

const mapArray2 = array.map(num => num * 2);


// ///////////////////Filter////////////////////
const filterArray = array.filter((num) => {
    return num === 5;
    // must return true or false
    // true => then returns the value
})

// ///////////////////Reduce////////////////////
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
// 0 is the accumulator value;
}, 0);

// filter, map and reduce are deterministics, it does not have any side effects

