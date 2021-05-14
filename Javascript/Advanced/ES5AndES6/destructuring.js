// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// // same as
// const {player, experience} = obj;
// let {wizardLevel} = obj;

// select the properties you want, and you can get them

const name = "john snow";
const obj = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}

// same as 
const obj2 = {
    name, [1 + 2]: 'hihi'
}

console.log(obj2);