const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input'); 

//Reusable Timer Class

class Timer {
    constructor(durationInput, playBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;
        this.durationInput.addEventListener('click', start());
    }

    start()
}









//FUNCTIONS
function startTimer() {
    let inputNum = document.querySelector('input').value;

    let countDownNum = Number(inputNum);

    if(!countDownNum || countDownNum !== Math.floor(countDownNum)) {
        console.log("WHOLE NUMBERS ONLY!")
    } else {
        countDownNum--;
        inputNum = countDownNum;
        console.log(inputNum);
    }
}

function pauseTimer() {

}



playBtn.addEventListener('click', () => {
    //Btn style change
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');

    //Input countdown
    startTimer()
    
    
})

pauseBtn.addEventListener('click', () => {
    //Btn style change
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');

    //Pause Timer
    pauseTimer();
})
