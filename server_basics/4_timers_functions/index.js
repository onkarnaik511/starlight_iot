// Declare the timer variable
var tim;

// Function that will print hello world.
function consoledata() {
        console.log("Hello World!!!")
}

// Function that will stop the timer
function stoptimer() {
        // clearInterval function stops the execution of timer function defined in setInternal function
        clearInterval(tim);
}

// setTimeout function calls the stoptimer() function only once after 3500 ms interval has passed
setTimeout(stoptimer, 3500);

// setInterval function calls the function consoledata() continuously every 1000 ms.
tim = setInterval(consoledata, 1000);
