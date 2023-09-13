let timer = document.getElementById("timer");

let workOrBreak = 0;

let minWorkDeparture = 0;
let secWorkDeparture = 10;

let minBreakDeparture = 0;
let secBreakDeparture = 5;

minWorkDeparture = minWorkDeparture < 10 ? "0" + minWorkDeparture : minWorkDeparture;
secWorkDeparture = secWorkDeparture < 10 ? "0" + secWorkDeparture : secWorkDeparture;
timer.innerText = `${minWorkDeparture}:${secWorkDeparture}`;

let time = minWorkDeparture * 60 + secWorkDeparture;


//let timeRunning = setInterval(timeRunningFunc, 1000);

function timeRunningFunc() {
    //initialise minutes and seconds
    let min = parseInt(time / 60, 10);
    let sec = parseInt(time % 60, 10);
  
    //always have minutes and seconds in 2 figure
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    //reduce the time by one second until zero seconds left
    //and can't go less than 0 seconds
    timer.innerText = `${min}:${sec}`
    time = time <= 0 ? 0 : time - 1;

    if (time <= 0 && workOrBreak == 0) {
        timer.innerText = `${min}:${sec}`;
        time = minBreakDeparture * 60 + secBreakDeparture;
        workOrBreak = 1;
    }
    else if (time <= 0 && workOrBreak == 1) {
        timer.innerText = `${min}:${sec}`;
        time = minWorkDeparture * 60 + secWorkDeparture;
        workOrBreak = 0;
    }
}
