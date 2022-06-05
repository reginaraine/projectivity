var saveSum = document.querySelector('.fa fa-save');

let [milliseconds,second,minute,] = [0,0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{if(int!==null){
   clearInterval(int);
}

int = setInterval(mainTime,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});

// when reset button is clicked the following event occurs to reset the timer numbers
document.getElementById('reset').addEventListener('click', ()=>{clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
});

//timer functions as an if statement
// if there are 1000 milliseconds, this will equate to a second
// milliseconds increase by 10s and the rest by 1 unit
function mainTime(){
milliseconds+=10;
if(milliseconds == 1000){
milliseconds = 0;
second++;
if(second == 60){
second = 0;
minute++;
if(minute == 60){
minute = 0;
}}}

// refers to how many 0's after an added time
let m = minute < 10 ? "0" + minute : minute;
let s = second < 10 ? "0" + second : second;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}

// next steps are to save the times for each time the stopwatch is started/finished to contribute to the flowtime tracker