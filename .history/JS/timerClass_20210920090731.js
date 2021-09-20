class Timer {
    constructor(durationInput, playBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onPause = callbacks.onPause;
        this.onComplete = callbacks.onComplete;


        this.playBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }

    start = () => {
        this.onStart();
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    
        // for(let i = durationInput; durationInput > 0; i--){
        //     setTimeout(this.tick, 1000);
        // }
    };

    pause = () => {
        this.onPause();
        clearInterval(this.interval);

        pauseBtn.classList.remove('active');
        playBtn.classList.add('active');
    };

    tick = () => {
        if(this.timeRemaining > 0){
            this.timeRemaining = this.timeRemaining - 0.02;
            this.onTick(this.timeRemaining);
        } else {
            this.onComplete();
            this.pause();
        }
        
    };

    get timeRemaining () {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining (time) {
        this.durationInput.value = time.toFixed();
    }
}