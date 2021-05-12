var todos = [
    "clean room", 
    "brush teeth",
    "exercise"
];

var todosLenght = todos.length;

var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}

do {
    // do something here first then the while loop is executed
    // keep repeating until the while loop condition returns false;
    console.log(counterOne);
    console.log("still happens bruh");
} while (counterOne > 0);