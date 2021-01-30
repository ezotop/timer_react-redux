import React from 'react';
import {connect} from 'react-redux';
import {startTimer, stopTimer, updateTimer, resetTimer, firstClick, secondClick, stoppedAfterWaitOnclick} from '../../actions';

const Timer = ({time, inter, startTimer, stopTimer, updateTimer, resetTimer, firstClick, secondClick, stoppedAfterWaitOnclick, waitFirstClicked}) => {
    // console.log(inter);

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function formatedTime(t) {
        const hours = Math.floor((t / (60 * 60)) % 24),
              minutes = Math.floor((t / 60) % 60),
              seconds = Math.floor(t % 60);

        return {
            'hours': getZero(hours),
            'minutes': getZero(minutes),
            'seconds': getZero(seconds)
        };
    }
    const t = formatedTime(time);

    const interval = (timeout) => setInterval(() => {
        updateTimer(Date.now());
    }, timeout);
    
    return (
        <div>
            <div className="timer-block">{ `${t.hours}:${t.minutes}:${t.seconds}` }</div>
            <div className="btns-block">
                <button
                    onClick={ inter ? () => stopTimer(Date.now()) : () => startTimer(Date.now(), interval(1000)) }
                    className="btn btn_start-stop">{inter ? 'Stop' : 'Start'}</button>
                <button
                    onClick={ (inter && !waitFirstClicked) ? () => firstClick(Date.now()) : () => {
                        secondClick(Date.now());
                        stoppedAfterWaitOnclick();
                    }}
                    className="btn btn_dec">Wait</button>
                <button
                    onClick={resetTimer}
                    className="btn btn_rnd">Reset</button>
            </div>
        </div>
    )
    
};

const mapStateToProps = (state) => {
    return {
        time: state.time,
        inter: state.interval,
        waitFirstClicked: state.waitFirstClicked
    }
};

const mapDispatchToProps = {
    startTimer,
    updateTimer,
    stopTimer,
    resetTimer,
    firstClick,
    secondClick,
    stoppedAfterWaitOnclick
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);