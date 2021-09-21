const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input'); 
const ticker = document.querySelector('circle');

//
const inputVal = inp

// Setting the perimeter
const perimeter = ticker.getAttribute('r') * 2 * Math.PI;

ticker.setAttribute('stroke-dasharray', perimeter);

let duration;

// NEW TIMER OBJECT
const timer1 = new Timer(input, playBtn, pauseBtn, {
    onStart(totalDuration) {
        duration = totalDuration;
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
    },
    
    onTick(timeRemaining) {
        ticker.setAttribute("stroke-dashoffset", (perimeter * timeRemaining) / duration - perimeter);
    },
    onComplete() {
        document.createElement(div);

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
