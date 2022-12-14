/*
Create a function which takes number from input <input type=“text”
id=“inputName”></input> and prints to span string - “Hello ” with input value. Call this
function from button’s onclick event.*/

const textInput = document.getElementById('“inputName”');
const el = document.getElementById('text1');

function printInput() {
    el.textContent = el.textContent + ', ' + textInput.value + '!';

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
        equal.textContent = equal.textContent;
    } else {
        equal.textContent = 'No ' + equal.textContent;
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
