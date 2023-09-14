let timer = document.getElementById("timer");

//set counter to switch between work and break
let workOrBreak = 0;

//set work's duration
let minWorkDeparture = 0;
let secWorkDeparture = 10;

//set break's duration
let minBreakDeparture = 0;
let secBreakDeparture = 10;

let time = minWorkDeparture * 60 + secWorkDeparture;

minWorkDeparture = minWorkDeparture < 10 ? "0" + minWorkDeparture : minWorkDeparture;
secWorkDeparture = secWorkDeparture < 10 ? "0" + secWorkDeparture : secWorkDeparture;
timer.innerText = `${minWorkDeparture}:${secWorkDeparture}`;

// initialize buttons
/*
onclick="timeRunning = setInterval(timeRunningFunc, 1000)" (bouton lancer)
 onclick="clearInterval(timeRunning)" (bouton mettre en pause)
*/
let buttonStart = document.getElementById("start");
buttonStart.addEventListener("click", () => {
    timeRunning = setInterval(timeRunningFunc, 1000);
});

function timeRunningFunc() {
    console.log("coucou");

    //initialize minutes and seconds
    let min = parseInt(time / 60, 10);
    let sec = parseInt(time % 60, 10);

    //always have minutes and seconds in 2 figure
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    //running time and switch beatween work and break
    if (time <= 0 && workOrBreak == 0) {
        //display 00:00
        timer.innerText = `${min}:${sec}`;
        //switch to break time
        time = minBreakDeparture * 60 + secBreakDeparture;
        workOrBreak = 1;
    }
    else if (time <= 0 && workOrBreak == 1) {
        //display 00:00
        timer.innerText = `${min}:${sec}`;
        //switch to work time
        time = minWorkDeparture * 60 + secWorkDeparture;
        workOrBreak = 0;
    }
    else {
        //reduce the time by one second until zero seconds left
        //and can't go less than 0 seconds
        time = time <= 0 ? 0 : time - 1;
        timer.innerText = `${min}:${sec}`;
    }
}
