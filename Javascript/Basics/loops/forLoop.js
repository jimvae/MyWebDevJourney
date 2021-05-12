var todos = [
    "clean room", 
    "brush teeth",
    "exercise"
];

// for (var i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
//     console.log(todos[i]);
// }


// avoid using todos.lenth inside the for loop declaration
// for example if you pop your array, it might affect
// declare the length as a variable instead

function logTodos(youCanNameThisWhatever, Name2) {
    console.log(youCanNameThisWhatever, Name2)
}
// todos.forEach(function(element, index) {
//     console.log(element, index);
// });

// or

// function should have two parameters?
todos.forEach(logTodos);
// first parameter is the element, second paramter is the index, can name them whatever you want