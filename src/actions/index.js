const startTimer = (startTime, interval) => {
    // console.log('start action', interval);
    return {
        type: 'START_TIMER',
        startTime: startTime,
        interval: interval,
    }
};
const stopTimer = (stopTime) => {
    // console.log('stop action')
    return {
        type: 'STOP_TIMER',
        stopTime: stopTime,
        interval: false,
    }
};

const firstClick = (startWaitTime) => {
    return {
        type: 'FIRST_CLICK',
        startWaitTime: startWaitTime,
    }
};

const secondClick = (endWaitTime) => {
    return {
        type: 'SECOND_CLICK',
        endWaitTime: endWaitTime
    }
};

const stoppedAfterWaitOnclick = () => {
    return {
        type: 'STOPPED_AFTER_WAIT_ONCLICK'
    }
};

const updateTimer = () => {
    return {
        type: 'UPDATE_TIMER',
    }
};

const resetTimer = () => {
    return {
        type: 'RESET_TIMER'
    }
};

export {
    startTimer,
    stopTimer,
    updateTimer,
    resetTimer,
    firstClick,
    secondClick,
    stoppedAfterWaitOnclick
}