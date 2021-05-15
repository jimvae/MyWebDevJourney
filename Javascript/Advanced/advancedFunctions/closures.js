const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closure - a function ran, the function executed. It's never going to be used again
// but it is going to remember that there are references to those variables
// so child scope always has access to the parent scope

