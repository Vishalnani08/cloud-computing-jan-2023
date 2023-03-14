/*
function multiply(number) {
    return number * number;
}

function square(number) {
    return multiply(number);
}

function printSquareOfANumber(number) {
    const answer = square(number);
    console.log(`square of ${number} is ${answer}`);
}

console.log("Hello I'm January");

setTimeout(function () {
    console.log("Hello I'm February");
}, 6000);

console.log("I'm before add event listener");
addEventListener('click', function() {
    console.log('You clicked something');
})
setTimeout(function() {
    console.log("I'm from set timeout");
}, 6000)
console.log("I'm after add event listener");

printSquareOfANumber(4);

setTimeout(function () {
    console.log("Hello I'm March");
    printSquareOfANumber(5);
}, 1000);

function callbackFunctionToHandleClickEvent() {
    console.log('You clicked something');
}
addEventListener('click', callbackFunctionToHandleClickEvent)

console.log("Hello I'm April");

addEventListener('dragstart', function() {
    console.log('This is dragstart event');
})

addEventListener('drag', function() {
    console.log('This is drag event');
})

addEventListener('dragend', function() {
    console.log('This is dragend event');
})

*/

const { rejects } = require("assert");
const { resolve } = require("path");

/* ************************CALLBACKS***************************** */

addEventListener('dragstart', function() {
    console.log('This is dragstart event');
    addEventListener('drag', function() {
        console.log('This is dragstart event');
        addEventListener('dragend', function() {
            console.log('This is dragstart event');
        })
    })
})

/* ************************CALLBACKS***************************** */

/* ************************PROMISES***************************** */
const wakeUpEarly = new Promise((resolve, rejects) => {
    const iWakeUpEarly = false;
    if (iWakeUpEarly) {
        return resolve("I'll go to temple");
    } else {
        return rejects("I'll go to movie");
    }
})

wakeUpEarly
.then(function(msg) {
    console.log("I'm from then function");
    console.log(msg);
})
.catch(function(error) {
    console.log("I'm from catch function");
    console.log(error);
})
.finally(function() {
    console.log("I'm from finally function");
    console.log("I'm done with my promise");
})

/* ************************PROMISES***************************** */

