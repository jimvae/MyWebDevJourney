function greeting(name='', age=30, pet='cat'){
    return `Hello ${name}, you seem to be ${age} years old. I have a pet ${pet}`;
}

console.log(greeting());
console.log(greeting('NUS', 100, 'snake'));
console.log(greeting('NTU'));