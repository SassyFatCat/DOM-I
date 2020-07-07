const timeString = prompt("Enter timer amount", "####").split('');
const timeObj = {
    tens: parseInt(timeString[0], 10),
    ones: parseInt(timeString[1], 10),
    tenSec: parseInt(timeString[2], 10),
    oneSec: parseInt(timeString[3], 10),
}
console.log(timeObj);
//Assign variables
const tens = document.querySelector('#tens');
const ones = document.querySelector('#ones');
const tenSec = document.querySelector('#tenSec');
const oneSec = document.querySelector('#oneSec');
tens.textContent = timeObj.tens;
ones.textContent = timeObj.ones;
tenSec.textContent = timeObj.tenSec;
oneSec.textContent = timeObj.oneSec;

let timerInterval = setInterval(timer, 1000);

function timer() {
tens.textContent = timeObj.tens;
ones.textContent = timeObj.ones;
tenSec.textContent = timeObj.tenSec;
oneSec.textContent = timeObj.oneSec;
if (timeObj.tens === 0 && timeObj.ones === 0 && timeObj.tenSec === 0 && timeObj.oneSec === 0) {
        stop();
}

if (timeObj.ones === 0 && timeObj.tenSec === 0 && timeObj.oneSec === 0 && timeObj.tens > 0) {
    tenSpot();
    timeObj.ones = 10;
}

if (timeObj.tenSec === 0 && timeObj.oneSec === 0) {
    timeObj.tenSec = 6;
    oneSpot();
    timeObj.oneSec = 10;
    tenSecSpot();
}

timeObj.oneSec--
if (timeObj.oneSec < 0) {
    timeObj.oneSec = 9;
    tenSecSpot();
}
}

function tenSecSpot() {
    timeObj.tenSec--;
}

function oneSpot() {
    timeObj.ones--;
}

function tenSpot() {
    timeObj.tens--
}
const stop = function() {
    clearInterval(timerInterval);
}