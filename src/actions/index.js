const startTimer = (startTime, interval) => {
    // console.log('start action', interval);
    return {
        type: 'START_TIMER',
        startTime: startTime,
        interval: interval
    }
};
const stopTimer = (stopTime) => {
    // console.log('stop action')
    return {
        type: 'STOP_TIMER',
        payload: stopTime,
        interval: false
    }
};

const updateTimer = (timeNow) => {
    return {
        type: 'UPDATE_TIMER',
        timeNow: timeNow / 1000
    }
};

const resetTimer = () => {
    return {
        type: 'RESET_TIMER'
    }
};

const waitTimer = () => {
    return {
        type: 'WAIT_TIMER'
    }
};

export {
    startTimer,
    stopTimer,
    updateTimer,
    resetTimer,
    waitTimer
}