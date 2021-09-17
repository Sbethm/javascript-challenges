const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');

function countdown() {
    retu let inputNum = document.querySelector('input').value;
}    

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
