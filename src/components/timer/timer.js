import React, { useState, useEffect } from 'react';
import './timer.css';

let timerStart = false;
const Timer = (props) => {
    let [timerStatus, timerControl] = useState('neutral');
    let [time, setTime] = useState(0);
    let [beginTime, setBeginTime] = useState(0);

    const runTime = () => {
        if(timerStart){
            setTime(Date.now()-beginTime);
            setTimeout(runTime, 10);
        }
    }

    const spaceDown = (e) => {
        if(e.keyCode == 32){
            if(timerStatus == 'neutral'){
                timerControl('ready');
            } else if(timerStatus == 'running'){
                timerControl('stopped');
            }
        }
    }

    const spaceUp = (e) => {
        if(e.keyCode == 32){
            if(timerStatus == 'ready'){
                setBeginTime(Date.now());
                timerControl('running');
            } else if(timerStatus == 'stopped'){
                timerControl('neutral');
            }
        }
    }

    useEffect(() => {
        if(timerStatus=='running'){
            timerStart = true;
            runTime();
        } else {
            timerStart = false;
            if(timerStatus=='ready'){
                setTime(0);
            } else if(timerStatus=='stopped'){
                props.addTime(time);
            }
        }
    }, [timerStatus]);


    const parseTime = () => {
        let min = Math.floor(time / 60000);
        let sec = Math.floor((time - min*60000) / 1000);
        let ms  = Math.floor((time - min*60000 - sec*1000) / 10);


        if(min < 1){min = '';}else{min = min+':';}
        if(sec < 10){sec='0'+sec;}sec=sec+':';
        if(ms < 10){ms='0'+ms;}

        return min + sec + ms;
    }

    return (
        <div className="timer-container">
            <input type="text" id="time" onKeyDown={spaceDown} onKeyUp={spaceUp}/>
            <label htmlFor="time" id="time-label">{ parseTime() }</label>
        </div>
    )
}

export default Timer;