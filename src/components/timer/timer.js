import React from 'react';
import {connect} from 'react-redux';
import {startTimer, updateTimer, stopTimer, resetTimer, waitTimer} from '../../actions';

const Timer = ({time, inter, startTimer, updateTimer, stopTimer, resetTimer}) => {
    // console.log('rendered');

    function getZero(num) {
        if (num >= 0 && num < 10) { //Если арг больше или равно 0 И арг меньше 10, то ф-ция возвращает модифицированную строку
            return `0${num}`;
        } else { //В инном случае возвращаем неизмененный аргумент
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
            <div className="timer-block">{`${t.hours}:${t.minutes}:${t.seconds}`}</div>
            <div className="btns-block">
                <button
                    onClick={inter ? () => {stopTimer(Date.now())} : () => startTimer(Date.now(), interval(1000))}
                    className="btn btn_start-stop">{inter ? 'Stop' : 'Start'}</button>
                <button
                    onClick={inter ? () => {stopTimer(Date.now())} : () => startTimer(Date.now(), interval(300))}
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
        isOn: state.isOn,
        inter: state.interval
    }
};

const mapDispatchToProps = {
    startTimer,
    updateTimer,
    stopTimer,
    resetTimer,
    waitTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

// const date = Date.now();
// console.log(date);
// const dateDate = new Date();
// console.log(dateDate.getHours())
// console.log(dateDate.getMinutes())
// console.log(dateDate.getSeconds())
// console.log((date + '').length);
// const some = Date.now().g;
// console.log(some.);