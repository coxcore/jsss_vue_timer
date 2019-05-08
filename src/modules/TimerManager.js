import EventEmitter from 'events';

class TimerManager extends EventEmitter {

    static CHANGE = 'change';


    constructor(delay = 10) {
        super();

        this._delay = delay;
    }


    _delay = 0;
    _firstTime = 0;
    _cacheTime = 0;
    _currentTime = 0;
    _timer = null;


    get millisecond() {
        return this._firstTime ? Date.now() - this._firstTime : 0;
    }

    get time() {
        return this._currentTime;
    }


    start() {
        this.resume();
        this._triggerTime();
    }

    resume() {
        if (this._timer) {
            return;
        }

        if (!this._firstTime) {
            this._firstTime = Date.now();
        }

        this._timer = setInterval(this._triggerTime, this._delay);
    }

    pause() {
        if (!this._timer) {
            return;
        }

        clearInterval(this._timer);

        this._timer = null;
    }

    stop() {
        this.pause();

        this._firstTime = 0;
    }

    _updateTime() {
        this._cacheTime = this._currentTime;
        this._currentTime = Math.round(this.millisecond / 10) / 100;
    }

    _triggerTime = () => {
        this._updateTime();

        if (this._currentTime !== this._cacheTime) {
            this.emit(TimerManager.CHANGE, this);
        }
    }
}

export default TimerManager;
