class Timer {
    constructor(durationInput, playBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;

        this.playBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
        this.onStart
        
        playBtn.classList.remove('active');
        pauseBtn.classList.add('active');
        // for(let i = durationInput; durationInput > 0; i--){
        //     setTimeout(this.tick, 1000);
        // }
    };

    pause = () => {
        clearInterval(this.interval);

        pauseBtn.classList.remove('active');
        playBtn.classList.add('active');
    };

    tick = () => {
        if(this.timeRemaining > 0){
            this.timeRemaining = this.timeRemaining - 1;
        } else {
            this.pause();
        }
        
    };

    get timeRemaining () {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining (time) {
        this.durationInput.value = time;
    }
}