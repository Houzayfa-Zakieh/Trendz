/////////////////////// timer start ///////////////////////

let countdownDuration = 1 * 60 * 60 + 30 * 60;
const timerElement1 = document.querySelector(".timer1");
const timerElement2 = document.querySelector(".timer2");
const timerElement3 = document.querySelector(".timer3");

const interval = setInterval(() => {
    if (countdownDuration <= 0) {
        clearInterval(interval);
        timerElement1.innerText = "Offer Is End";
        timerElement2.innerText = "Offer Is End";
        timerElement3.innerText = "Offer Is End";
        return;
    }
    const hours = String(Math.floor(countdownDuration / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((countdownDuration % 3600) / 60)).padStart(2, '0');
    const seconds = String(countdownDuration % 60).padStart(2, '0');

    timerElement1.innerText = `${hours}:${minutes}:${seconds}`;
    timerElement2.innerText = `${hours}:${minutes}:${seconds}`;
    timerElement3.innerText = `${hours}:${minutes}:${seconds}`;


    countdownDuration--;

}, 1000);

/////////////////////// timer end ///////////////////////

/////////////////////// counter start ////////////////////////////////////


let nums = document.querySelectorAll(".nums .num h1");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
/////////////////////// counter end ////////////////////////////////////

/////////////////////// allow-cookeis start ////////////////////////////////////


const allow = document.querySelector('.allow-cookies');
const button = document.getElementById('allow');
const close = document.getElementById('close');

function show() {
    allow.classList.remove('hide');


};
setTimeout(show, 3000);

button.onclick = () => {
    allow.classList.add('hide');
};
close.onclick = () => {
    allow.classList.add('hide');
};
/////////////////////// allow-cookeis end ////////////////////////////////////
