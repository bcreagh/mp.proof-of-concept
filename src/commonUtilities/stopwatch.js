class Stopwatch {
    constructor() {
        this.stopwatchHasBeenStarted = false;
        this.startTime = 0;
    }

    start() {
        if (this.stopwatchHasBeenStarted) {
            throw new Error('The stopwatch has already been started');
        }
        this.stopwatchHasBeenStarted = true;
        this.startTime = this.getCurrentTime();
    }

    stop() {
        if (!this.stopwatchHasBeenStarted) {
            throw new Error('You cannot stop the stopwatch if it has not yet been started!');
        }
        const currentTime = this.getCurrentTime();
        const timeElapsed = currentTime - this.startTime;
        this.stopwatchHasBeenStarted = false;
        return timeElapsed;
    }

    getCurrentTime() {
        return (new Date()).getTime();
    }
}
module.exports = Stopwatch;