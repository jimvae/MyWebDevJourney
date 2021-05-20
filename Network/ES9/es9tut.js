// Object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {tiger, lion, ...canbeanyname} = animals
// canbeanyname includes lion and monkey

const array = [1,2,3,4,5];
function sum (a,b,c,d,e){
    return a + b + c + d + e;
}

sum(...array);

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

objectSpread( tiger, lion, canbeanyname);
