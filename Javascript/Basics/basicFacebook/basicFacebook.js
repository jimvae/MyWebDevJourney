var database = [
    {
        username: "Jim",
        password: "secret"
    },
    {
        username: "Victoria",
        password: "secret"
    }
];

var newsfeed = [
    {
        username: "Regina",
        timeline: "I have a submission on Friday"
    },
    {
        username: "Mihoyo",
        timeline: "Eula is coming out"
    }
];

var userNamePrompt = prompt("Key in your username");
var passwordPrompt = prompt("Key in your password");
function isUserValid(name, password) {
    var check = false;
    database.forEach(function(element, index) {
        console.log("username: " + element.username, name);
        console.log("password: " + element.password, password);
        if (name == element.username && password == element.password) {
            check = true;
        }
    });
    return check;

}

function signIn(name, password) {
    if (isUserValid(name, password)) {
        console.log(newsfeed);        
    } else {
        alert("Wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);