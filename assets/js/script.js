const startBtn = document.querySelector(".startBtn")
const resetBtn = document.querySelector(".resetBtn")
const stopBtn = document.querySelector(".stopBtn")
const restartBtn = document.querySelector(".restartBtn")


let hourEl = document.querySelector("#hour")
let minEl = document.querySelector('#minutes')
let secEl = document.querySelector('#seconds')
let milisecEl = document.querySelector('#miliseconds')
let isPaused = false

startBtn.addEventListener('click',startTimer)
resetBtn.addEventListener('click',resetTimer)
stopBtn.addEventListener('click',stopTimer)
restartBtn.addEventListener('click',restartTimer)

sec = 0
minutes = 0
hours = 0
miliseconds = 0
function startTimer(){
    isPaused = false
    startBtn.style.display = 'none'
    resetBtn.style.display = 'block'
    stopBtn.style.display = 'block'

    secIn.style.display = 'none'
    secEl.style.display = 'block'
    interval = setInterval(
        function(){
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
    ,1000)}



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
    
    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    stopBtn.style.display = 'none'
    restartBtn.style.display = 'none'
}

function stopTimer(){
    isPaused = true
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
    startTimer()
    stopBtn.style.display = 'block'
    restartBtn.style.display = 'none'
}


function formatTime(time){
    return time < 10 ? `0${time}`:time
}



