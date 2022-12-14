/*
Create a function which takes number from input <input type=“text”
id=“inputName”></input> and prints to span string - “Hello ” with input value. Call this
function from button’s onclick event.*/

const textInput = document.getElementById('“inputName”');
const el = document.getElementById('text1');

function isNumber(x) {
    if (x === "") {
        return false;
    }
    const numX = +x;
    if (isNaN(numX)) {
        return false;
    } else {
        return true;
    }
}

function printInput() {
    if (isNumber(textInput.value)) {
        el.textContent = 'Hello , ' + textInput.value + '!';
    } else {
        alert('It is NaN!')
    }
}

/*
Create a function which gets 2 strings from 2 inputs with type=“password”,
compares it and prints to span “Equal” if they are equal, and “Not equal” otherwise.
    Call this function from button’s onclick event*/

const pass1 = document.getElementById('“inputPass1”');
const pass2 = document.getElementById('“inputPass2”');
const equal = document.getElementById('equal');

function equalPassword() {
    if (pass1.value === pass2.value) {
        equal.textContent = "Equal";
    } else {
        equal.textContent = "Not equal";
    }
}

/*
Create a function which prints random number to span. Call this function from
button’s onclick event.
    Random function example is here:
    https://developer.mozilla.org/en-
        US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
const random = document.getElementById('random');

function randomToSpan() {

    random.textContent = Math.random();
}
