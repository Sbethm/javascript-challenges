const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');

//Global Variables
let inputNum = 

function countdown() {
    const inputNum = document.querySelector('input').value;
    return inputNum;
}    
countdown()

playBtn.addEventListener('click', () => {
    //Btn style change
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');

    //Input countdown
    
})

pauseBtn.addEventListener('click', () => {
    //Btn style change
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})
