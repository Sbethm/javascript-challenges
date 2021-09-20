const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input'); 
const ticker = document.querySelector('circle');

const perimeter = ticker.getAttribute('r') * 2 * Math.PI;

ticker.setAttribute('stroke-dasharray, perimeter')

//Get CSS properties
const tickerStyles = window.getComputedStyle(ticker);

const tickerTotal = Number(tickerStyles.strokeDasharray.slice(0, -2));

//Reusable Timer Class
const inputValue = Number(input.value);

const timerIncrement = tickerTotal / inputValue;

let countDownNum = 0;

//Functions

function tickDown() {   


            ticker.style.strokeDashoffset = `${countDownNum}`;
            countDownNum = countDownNum - timerIncrement;
            console.log(countDownNum);
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
