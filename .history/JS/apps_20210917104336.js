const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input');

playBtn.addEventListener('click', () => {
    //Btn style change
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');

    //Input countdown
    function countdown ()
})

pauseBtn.addEventListener('click', () => {
    //Btn style change
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})
