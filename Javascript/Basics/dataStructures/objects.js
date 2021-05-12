// Objects are collections of properties
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    // array property
    languages: ["Python", "Java"],
    // function inside an object is called a method
    shout: function() {
        console.log("AHHHHHHH")
    }
};

var list = ["apple", "banana", "orange"];
var list2 = [
    {
        username: "andy",
        password: "456"
    },
    {
        username: "jess",
        password: "123"
    }
];


var emptyObject = {};
var nullObject = null;
// cannot set properties for null