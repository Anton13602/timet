const time__daysElement = document.querySelector('.time__days');
const time__hoursElement = document.querySelector('.time__hours');
const time__minsElement = document.querySelector('.time__mins');
const time__secondsElement = document.querySelector('.time__seconds');
const time__millisecondsElement = document.querySelector('.time__milliseconds');


const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(stratTimer, 10)
})
startButton.addEventListener('dblclick', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    time__days = 00;
    time__hours = 00;
    time__mins = 00;
    time__seconds = 00;
    time__milliseconds = 00;
    time__daysElement.textContent = '00';
    time__hoursElement.textContent = '00';
    time__minsElement.textContent = '00';
    time__secondsElement.textContent = '00';
    time__millisecondsElement.textContent = '00';

})



let time__days = 03;
let time__hours = 00;
let time__mins = 00;
let time__seconds = 00;
let time__milliseconds = 00;
let interval

function stratTimer() {
    time__milliseconds++

    //milliseconds
    if (time__milliseconds < 9) {
        time__millisecondsElement.innerText = '0' + time__milliseconds
    }if (time__milliseconds > 9){
        time__millisecondsElement.innerText = time__milliseconds
    }if (time__milliseconds > 99) {
        time__seconds++
        time__secondsElement.innerText = '0' + time__seconds
        time__milliseconds = 0
        time__millisecondsElement.innerText = '0' + time__milliseconds
    }


    //seconds
    if (time__seconds < 9) {
        time__secondsElement.innerText = '0' + time__seconds
    } if (time__seconds > 9) {
        time__secondsElement.innerText =  time__seconds
    } if (time__seconds > 59) {
        time__mins++
        time__minsElement.innerText = '0' + time__mins
        time__seconds = 0 
        time__secondsElement.innerText = '0' + time__secondsElement
    }

    //mins
    if (time__mins < 9) {
        time__minsElement.innerText = '0' + time__mins
    } if (time__mins > 9) {
        time__minsElement.innerText =  time__mins
    } if (time__mins > 59) {
        time__hours++
        time__hoursElement.innerText = '0' + time__hours
        time__mins = 0 
        time__minsElement.innerText = '0' + time__mins
    }


    //hours
    if (time__hours < 9) {
        time__hoursElement.innerText = '0' + time__hours
    } if (time__hours > 9) {
        time__hoursElement.innerText =  time__hours
    } if (time__hours > 23) {
        time__days++
        time__daysElement.innerText = '0' + time__days
        time__hours = 0 
        time__hoursElement.innerText = '0' + time__hours
    }
}