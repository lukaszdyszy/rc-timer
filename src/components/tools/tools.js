import React, {useState, useEffect} from 'react';
import './tools.css';
import average from '../average.js';
import mean from '../mean.js';
import parseTime from '../parseTime.js';

const Tools = (props) => {
    // const [selectedCube, selectCube] = useState('3x3x3');

    const cubeSelect = (e) => {
        // selectCube(e.target.value);
        props.cube(e.target.value);
    }
    // useEffect(() => {
    //     if(props.cube.length === 0){
    //         props.cube(selectedCube);
    //     }
    // }, [props.cube]);

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

    const meanOf = (nr) => {
        if(props.solves.length >= nr){
            let times = props.solves.map((solve) => solve.result());
            times.splice(0, times.length-nr);
            return mean(times);
        } else {
            return 0;
        }
    }

    const csvExport = () => {
        let toExport = 'Lp.,Scramble,Solution,Time,Result\n';
        let marked = props.solves.map((solve, index) => {
            if(solve.marked){
                let plus = ' ';
                if(!solve.dnf && solve.penalty){plus='(+2)';}

                let row = (index+1)+','+solve.scramble+','+solve.solution+','+parseTime(solve.time)+plus+','+parseTime(solve.result())+'\n';
                toExport += row;

                return solve.result();
            }
        });
        toExport += ',,,Average: ,'+parseTime(average(marked))+'\n';
        let toDown = document.createElement('a');
        toDown.href = 'data:text/csv;charset=utf-8,' + encodeURI(toExport);
        toDown.download = 'session.csv';
        toDown.click();
    }

    return (
        <div className="tools-container">
            <div className="tool">
                Cube: <select name="" id="" onChange={cubeSelect} defaultValue="3x3x3">
                    <option value="2x2x2">2x2x2</option>
                    <option value="3x3x3">3x3x3</option>
                    <option value="4x4x4">4x4x4</option>
                    <option value="5x5x5">5x5x5</option>
                    <option value="pyraminx">pyraminx</option>
                </select>
            </div>
            <div className="tool">
                Session Avg: {parseTime(sessAvg())}; Mean: {parseTime(sessMean())}
            </div>
            <div className="tool">
                Current Mo3: {parseTime(meanOf(3))}
                <br/>
                Current Avg5: {parseTime(avgOf(5))}
                <br/>
                Current Avg12: {parseTime(avgOf(12))}
            </div>
            <div className="tool">
                <button className="opt-button" onClick={clearSession}>Clear Session</button>
                <button className="opt-button" onClick={csvExport}>Export selected to csv</button>
            </div>
        </div>
    )
}

export default Tools;