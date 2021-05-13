// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function (){
//     console.log("CLICK!!!");
// })

// button.addEventListener("mouseenter", function (){
//     button.style.background = "green";
// })

// button.addEventListener("mouseleave", function (){
//     button.style.background = "white";
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    // remember the DOM diagram for the textNode
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// button.addEventListener("click", function(){
//     if (input.value.length > 0) {
//         var li = document.createElement("li");
//         createListElement();
//     }
// })

// OR
function addListAfterClick() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);

// for key press
// input.addEventListener("keypress", function(event){
//     // 13 represents enter
//     if (input.value.length > 0 && event.key === "Enter") {
//         createListElement();
//     }
// })

// OR

function addListAfterKeypress(event) {
    // 13 represents enter
    if (input.value.length > 0 && event.key === "Enter") {
        createListElement();
    }
}

button.addEventListener("keypress", addListAfterKeypress);

// QUESTION: for the parameters of addEvent Listener, why are the functions not ending in '()'?
// 

/*
This is something called a callback function. 
When that line of javascript runs, we don't want the addListAfterClick function 
to run because we are just adding the event listener now to wait for click or keypress. 
We want to let it know though that we want this action to happen when a click happens. 
So the function now automatically gets run (gets added the ()) every time the click happens. 
So we are passing a reference to the function without running it.
*/