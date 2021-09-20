const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input'); 
const ticker = document.querySelector('circle');

//Get CSS properties
let tickerStyles = window.getComputedStyle('circle');

//Reusable Timer Class
let tickerTotal = ticker.getPropertyValue('stroke-dasharray');

const inputValue = Number(input.value);

//Can't seem to get the appropriate values from these variables the way I would like/expect
// const timerLength = ticker.style.strokeDasharray; 

// const timerIncrement = timerLength / inputValue;

function tickDown() {   
            ticker.style.strokeDashoffset = `${countDownNum}`;
            countDownNum = countDownNum - 41.83;
        }

const timer1 = new Timer(input, playBtn, pauseBtn, {
    onTick() {
        tickDown();
    },
    
    onStart() {
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
        tickDown();
    },

    onPause() {
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
    },

    onComplete() {

    }
});








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
