import React, { useState, useEffect } from 'react';
import './timer.css';
import parseTime from '../parseTime.js';

let timerStatus = 'neutral';
let beginTime = 0;
const Timer = (props) => {
    let [time, setTime] = useState(0);

    const runTime = () => {
        if(timerStatus == 'running'){
            setTime(Date.now()-beginTime);
            setTimeout(runTime, 10);
        }
    }

    const spaceDown = (e) => {
        if(e.keyCode == 32){
            if(timerStatus == 'neutral'){
                timerStatus = 'ready';
                setTime(0);
            } else if(timerStatus == 'running'){
                timerStatus = 'stopped';
                props.addTime(time);
            }
        }
    }

    const spaceUp = (e) => {
        if(e.keyCode == 32){
            if(timerStatus == 'ready'){
                beginTime = Date.now();
                timerStatus = 'running';
                runTime();
            } else if(timerStatus == 'stopped'){
                timerStatus = 'neutral';
            }
        }
    }

    return (
        <div className="timer-container">
            <input type="text" id="time" onKeyDown={spaceDown} onKeyUp={spaceUp}/>
            <label htmlFor="time" id="time-label">{ parseTime(time) }</label>
        </div>
    )
}

export default Timer;