import React from 'react';
import './tools.css';
import average from '../average.js';
import mean from '../mean.js';
import parseTime from '../parseTime.js';

const Tools = (props) => {
    const cubeSelect = (e) => {
        props.cube(e.target.value);
    }

    const clearSession = () => {
        if(window.confirm('Are you sure?')){
            props.updateSolves([]);
        }
    }

    const sessAvg = () => {
        let times = props.solves.map((solve) => solve.result());
        return average(times);
    }

    const sessMean = () => {
        let times = props.solves.map((solve) => solve.result());
        return mean(times);
    }

    const avgOf = (nr) => {
        if(props.solves.length >= nr){
            let times = props.solves.map((solve) => solve.result());
            times.splice(0, times.length-nr);
            return average(times);
        } else {
            return 0;
        }
    }

    return (
        <div className="tools-container">
            <div className="tool">
                Cube: <select name="" id="" onChange={cubeSelect}>
                    <option value="3x3x3">3x3x3</option>
                    <option value="4x4x4">4x4x4</option>
                    <option value="5x5x5">5x5x5</option>
                </select>
            </div>
            <div className="tool">
                Session Avg: {parseTime(sessAvg())}
                <br/>
                Session Mean: {parseTime(sessMean())}
            </div>
            <div className="tool">
                Current Avg5: {parseTime(avgOf(5))}
                <br/>
                Current Avg12: {parseTime(avgOf(12))}
            </div>
            <div className="tool">
                <button className="opt-button" onClick={clearSession}>Clear Session</button>
            </div>
        </div>
    )
}

export default Tools;