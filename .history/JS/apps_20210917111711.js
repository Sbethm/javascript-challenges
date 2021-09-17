const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');


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
})
