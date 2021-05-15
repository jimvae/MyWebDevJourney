// reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};


// context
// this refers to what object it is inside of
function a() {
    console.log(this);
    let b = 4;
}

const obj4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}. I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
