const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input'); 

//Reusable Timer Class

class Timer {
    constructor(durationInput, playBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;

        this.playBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        if(this.timeRemaining > 0){
            this.interval = setInterval(this.tick, 1000);
        } else {
            this.pause();
        }
        
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
        // for(let i = durationInput; durationInput > 0; i--){
        //     setTimeout(this.tick, 1000);
        // }
    };

    pause = () => {
        clearInterval(this.interval);

        pauseBtn.classList.remove('active');
        playBtn.classList.add('active');
    };

    tick = () => {
        // if(this.timeRemaining > 0){
        //     this.timeRemaining = this.timeRemaining - 1;
        // } else {
        //     this.pause();
        // }
        
    };

    get timeRemaining () {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining (time) {
        this.durationInput.value = time;
    }
}
const timer1 = new Timer(input, playBtn, pauseBtn);








// //FUNCTIONS
// function startTimer() {
//     let inputNum = document.querySelector('input').value;

//     let countDownNum = Number(inputNum);

//     if(!countDownNum || countDownNum !== Math.floor(countDownNum)) {
//         console.log("WHOLE NUMBERS ONLY!")
//     } else {
//         countDownNum--;
//         inputNum = countDownNum;
//         console.log(inputNum);
//     }
// }

// function pauseTimer() {

// }



// playBtn.addEventListener('click', () => {
//     //Btn style change
//     playBtn.classList.remove('active');
//     pauseBtn.classList.add('active');

//     //Input countdown
//     startTimer()
    
    
// })

// pauseBtn.addEventListener('click', () => {
//     //Btn style change
//     pauseBtn.classList.remove('active');
//     playBtn.classList.add('active');

//     //Pause Timer
//     pauseTimer();
// })
