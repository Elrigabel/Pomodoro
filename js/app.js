// collect the timer location
let timer = document.getElementById("timer");

// set counter to switch between work and break (initialized on break time)
let workOrBreak = 1;

// set work's duration (by default)
let minWorkDeparture = 25;
let secWorkDeparture = 0;

// set break's duration (by default)
let minBreakDeparture = 5;
let secBreakDeparture = 0;

// good time display, with zero before if minutes or seconds choose are smaller than 10
minWorkDeparture = minWorkDeparture < 10 ? "0" + minWorkDeparture : minWorkDeparture;
secWorkDeparture = secWorkDeparture < 10 ? "0" + secWorkDeparture : secWorkDeparture;

// display by default of the timer
timer.innerText = `${minWorkDeparture}:${secWorkDeparture}`;

// set the variable for the timer and its interval
let time;
let timeRunning;

// initialize buttons
let buttonStart = document.getElementById("start");
let buttonReset = document.getElementById("reset");
let buttonSetTime = document.getElementById("setTime");
let buttonSettings = document.getElementById("settings");
let buttonCloseSettings = document.getElementById("closePopup");


// button to start the timer
buttonStart.addEventListener("click", () => {
    setTime();
    timeRunning = setInterval(timeRunningFunction, 1000);
    buttonReset.style.display = "block";
    buttonStart.style.display = "none";
    buttonSettings.style.display = "none";
});

buttonStart.addEventListener("mouseover", () => {
    buttonStart.setAttribute("src", "images/startButtonHover.png");
})

buttonStart.addEventListener("mouseout", () => {
    buttonStart.setAttribute("src", "images/startButton.png");
})

// button to personalize Work time and Break time
buttonSetTime.addEventListener("click", () => {
    // collect data from the input
    if (setTimeCollectData()) {
        // prepare the display
        minWorkDeparture = minWorkDeparture < 10 ? "0" + minWorkDeparture : minWorkDeparture;
        secWorkDeparture = secWorkDeparture < 10 ? "0" + secWorkDeparture : secWorkDeparture;
        minBreakDeparture = minBreakDeparture < 10 ? "0" + minBreakDeparture : minBreakDeparture;
        secBreakDeparture = secBreakDeparture < 10 ? "0" + secBreakDeparture : secBreakDeparture;
        
        // display the new timer
        timer.innerText = `${minWorkDeparture}:${secWorkDeparture}`;
    }

});



// button to reset completely the timer
buttonReset.addEventListener("click", () => {
    clearInterval(timeRunning);
    workOrBreak = 1;
    timer.innerText = `${minWorkDeparture}:${secWorkDeparture}`;
    buttonReset.style.display = "none";
    buttonStart.style.display = "block";
    buttonSettings.style.display = "block";
    document.getElementById("working").style.borderBottomStyle = "none";
    document.getElementById("break").style.borderBottomStyle = "none";
})

buttonSettings.addEventListener("click", () => {
    document.getElementById("popup").classList.add("show");
})
buttonCloseSettings.addEventListener("click", () => {
    document.getElementById("popup").classList.remove("show");
})

buttonSettings.addEventListener("mouseover", () => {
    buttonSettings.setAttribute("src", "images/setTimerHover.png");
})

buttonSettings.addEventListener("mouseout", () => {
    buttonSettings.setAttribute("src", "images/setTimer.png");
})

// initialize time
function setTime() {
    // switch to break time if it was work time
    if (workOrBreak == 0) {
        time = parseInt(minBreakDeparture) * 60 + parseInt(secBreakDeparture);
        timer.innerText = `${minBreakDeparture}:${secBreakDeparture}`;
        workOrBreak = 1;
        document.getElementById("break").style.borderBottomStyle = "solid";
        document.getElementById("working").style.borderBottomStyle = "none";
    }
    // switch to work time if it was break time
    else {
        time = parseInt(minWorkDeparture) * 60 + parseInt(secWorkDeparture);
        timer.innerText = `${minWorkDeparture}:${secWorkDeparture}`;
        workOrBreak = 0;
        document.getElementById("working").style.borderBottomStyle = "solid";
        document.getElementById("break").style.borderBottomStyle = "none";
    }
}

function timeRunningFunction() {
    if(time <= 0) {
        setTime();
    }
    else {
        time = time <= 0 ? 0 : time - 1;

        // initialize minutes and seconds
        let min = parseInt(time / 60, 10);
        let sec = parseInt(time % 60, 10);

        // always have minutes and seconds in 2 figure
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
    
        // reduce the time by one second until zero seconds left
        // and can't go less than 0 seconds
        timer.innerText = `${min}:${sec}`;
    }
}

function setTimeCollectData() {
    if (document.getElementById("minWork").value < 0
    || document.getElementById("secWork").value < 0
    || document.getElementById("minBreak").value < 0
    || document.getElementById("secBreak").value < 0
    || document.getElementById("secWork").value > 59
    || document.getElementById("secBreak").value > 59) {
        document.getElementById("error").innerHTML = "Please enter correct data";
        return false;
    }
    else {
        minWorkDeparture = document.getElementById("minWork").value;
        console.log(document.getElementById("minWork").value);
        secWorkDeparture = document.getElementById("secWork").value;
        console.log(document.getElementById("secWork").value);
        minBreakDeparture = document.getElementById("minBreak").value;
        console.log(document.getElementById("minBreak").value);
        secBreakDeparture = document.getElementById("secBreak").value;
        console.log(document.getElementById("secBreak").value);
        document.getElementById("error").innerHTML = "";
        return true;
    }
    
}


/*

let divButtonStart = document.getElementById("buttonStart");
divButtonStart.addEventListener("mouseover", () => {
    divButtonStart.innerHTML = `<input id="start" type=image src="images/startButtonHover.png"/>`
})

divButtonStart.addEventListener("mouseover", () => {
    divButtonStart.innerHTML = `<input id="start" type=image src="images/startButtonHover.png"/>`
}) */