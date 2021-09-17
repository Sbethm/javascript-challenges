const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');

playBtn.addEventListener('click', () => {
    //Btn style change
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');

    //Input countdown
    const inputNum = document.querySelector('input').value;

    let countDownNum = Number(inputNum);

    if(!countDownNum || ) {
        console.log("WHOLE NUMBERS ONLY!")
    } else {
        console.log("Good JOB!");
    }
    
    
})

pauseBtn.addEventListener('click', () => {
    //Btn style change
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})
