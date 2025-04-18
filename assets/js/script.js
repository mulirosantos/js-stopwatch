const startBtn = document.querySelector(".startBtn")
const resetBtn = document.querySelector(".resetBtn")
const stopBtn = document.querySelector(".stopBtn")
const restartBtn = document.querySelector(".restartBtn")
const timerBtn = document.querySelector(".timerBtn")
const stopwatchBtn = document.querySelector(".stopwatchBtn")


//timer menu
const timerMenu = document.querySelector(".menu-timer")

const addOne = document.querySelector(".addOneBtn")
const addFive = document.querySelector(".addFiveBtn")
const addTen = document.querySelector(".addTenBtn")
const subOne = document.querySelector(".subOneBtn")
const subTen = document.querySelector(".subTenBtn")
const subFive = document.querySelector(".subFiveBtn")




let hourEl = document.querySelector("#hour")
let minEl = document.querySelector('#minutes')
let secEl = document.querySelector('#seconds')
let milisecEl = document.querySelector('#miliseconds')


startBtn.addEventListener('click',startTimer)
resetBtn.addEventListener('click',resetTimer)
stopBtn.addEventListener('click',stopTimer)
restartBtn.addEventListener('click',restartTimer)
timerBtn.addEventListener('click',showTimer)
stopwatchBtn.addEventListener('click',showStopWatch)


addOne.addEventListener("click",addTime)
addFive.addEventListener("click",addTime)
addTen.addEventListener("click",addTime)
subOne.addEventListener("click",subTime)
subFive.addEventListener("click",subTime)
subTen.addEventListener("click",subTime)
addOne.myParam = 1
addFive.myParam = 5
addTen.myParam = 10
subOne.myParam = 1
subFive.myParam = 5
subTen.myParam = 10


let isPaused = false
let isTimer = false
let isStopWatch = false
var interval = null
sec = 0
minutes = 0
hours = 0
miliseconds = 0
function startTimer(){
    startBtn.style.display = 'none'
    resetBtn.style.display = 'block'
    stopBtn.style.display = 'block'

    secEl.style.display = 'block'
   
    if(isStopWatch){
        interval = setInterval(swCount,1000)
    }else if(isTimer){
        if(!timerMenu.classList.contains('hide')){
            timerMenu.classList.add('hide')
        }
        if(sec === 0 && minutes === 0 && hours === 0){
            window.alert("No Time was set, try again!!")
            resetTimer()
        }else if(hours > 0){
            if(minutes > 0){
                minutes --
                if(sec > 0){
                    sec --
                }else{
                    sec = 59
                }
            }else{
                minutes = 59

            }
            if(sec > 0){
                sec --
            }else{
                sec = 59
                
            }
            interval = setInterval(timerCount,1000)
        }else if(minutes > 0){
            minutes --
            sec = 59
            interval = setInterval(timerCount,1000)
        }else if(minutes < 0){
            window.alert("[ERROR]")
        }
    }else{
        window.alert("Select Stopwatch or Timer!")
        resetTimer()
    }
    }


function resetTimer(){
    clearInterval(interval)
    miliseconds = 0
    sec = 0
    minutes = 0
    hours = 0
    
    isPaused = true
    secEl.textContent = formatTime(sec)
    minEl.textContent = formatTime(minutes)
    hourEl.textContent = formatTime(hours)

    isTimer = false
    isStopWatch = false
    if(stopwatchBtn.classList.contains('selected')){
        stopwatchBtn.classList.remove('selected')
    }else if(timerBtn.classList.contains('selected')){
        timerBtn.classList.remove('selected')
    }


    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    stopBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    console.log(isTimer)
    console.log(isPaused)
    console.log(isStopWatch)
    isPaused = false
}

function stopTimer(){
    isPaused = true
    console.log(isPaused)
    stopBtn.style.display = 'none'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'block'
}

function restartTimer(){
    isPaused = false
    sec = 0
    minutes = 0 
    hours = 0
    miliseconds = 0
    clearInterval(interval)
    if(isTimer){
        resetTimer()
        window.alert('Set Time Again')


    }else{
        startTimer()
        stopBtn.style.display = 'block'

    }
    restartBtn.style.display = 'none'
}


function formatTime(time){
    return time < 10 ? `0${time}`:time
}



function showStopWatch(){
    isStopWatch = true
    isTimer = false
    console.log('Stopwatch On!')
    stopwatchBtn.classList.add("selected")
    if(timerBtn.classList.contains('selected')){
        timerBtn.classList.remove('selected')
    }
    if(!timerMenu.classList.contains('hide')){
        timerMenu.classList.add('hide')        
    }
}

function showTimer(){
    isTimer = true
    isStopWatch = false
    console.log('Timer On!')
    timerBtn.classList.add('selected')
    if(stopwatchBtn.classList.contains('selected')){
        stopwatchBtn.classList.remove('selected')
    }
    if(timerMenu.classList.contains('hide')){
        timerMenu.classList.remove('hide')
    }
}

function addTime(time){
    time = time.currentTarget.myParam
    minutes += time
    if(minutes == 60){
        hours ++
        minutes = 0
    }
    minEl.textContent = formatTime(minutes)
    hourEl.textContent = formatTime(hours)
}

function subTime(time){
    time = time.currentTarget.myParam
    if(minutes === 0){
        window.alert("Não é possível utilizar valores negativos!")
    }else{
        
        minutes -= time
        minEl.textContent = formatTime(minutes)
    }
}


function swCount(){
    if(!isPaused){
        sec ++               
            
        if (sec === 60){
            minutes ++
            sec = 0
        }
        if(minutes === 60){
            hours ++
            minutes = 0
        }
        secEl.textContent = formatTime(sec)
        minEl.textContent = formatTime(minutes)
        hourEl.textContent = formatTime(hours)
    }
}

function timerCount(){

    if(!isPaused){
        sec --
        if(sec === 0){
            if(minutes === 0){
                if(hours === 0)
                    stopTimer()
            }else{
                minutes --
                sec = 59
                if(minutes === 0){
                    if( hours > 0){
                        hours--
                        minutes = 59

                    }else if(sec === 0){
                        stopTimer()
                    }
                    }
                }
            }
        }
        secEl.textContent = formatTime(sec)
        minEl.textContent = formatTime(minutes)
        hourEl.textContent = formatTime(hours)

    }
