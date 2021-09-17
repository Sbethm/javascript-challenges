const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');

playBtn.addEventListener('click', () => {
    //Btn style change
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');

    //Input countdown
    const inputNum = document.querySelector('input').value;

    let countDownNum = Num(inputNum);

    if(!countDownNum || countDownNum.contains('.')) {
        console.log()
    }
    
    
})

pauseBtn.addEventListener('click', () => {
    //Btn style change
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})
