const playBtn = document.querySelector('.fa-play-circle ');
const pauseBtn = document.querySelector('.fa-pause-circle ');
const input = document.querySelector('input');

playBtn.addEventListener('click', () => {
    //
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})
