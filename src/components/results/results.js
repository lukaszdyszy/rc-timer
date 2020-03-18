import React, {useState, useEffect} from 'react';
import './results.css';
import parseTime from '../parseTime.js';

const Results = (props) => {
    const dropSolve = (id) => {
        let newSolves = [...props.solves];
        newSolves.splice(id, 1);
        props.updateSolves(newSolves);
    }

    const penalty = (id) => {
        let newSolves = [...props.solves];
        newSolves[id].penalty = !newSolves[id].penalty;
        props.updateSolves(newSolves);
    }

    const dnf = (id) => {
        let newSolves = [...props.solves];
        newSolves[id].dnf = !newSolves[id].dnf;
        props.updateSolves(newSolves);
    }

    const mark = (id) => {
        let newSolves = [...props.solves];
        newSolves[id].marked = !newSolves[id].marked;
        props.updateSolves(newSolves);
    }

    const solution = (id) => {
        let newSolves = [...props.solves];
        let sol = prompt('Enter solution: ', newSolves[id].solution);
        if(sol != null){
            newSolves[id].solution = sol;
            props.updateSolves(newSolves);
        }
    }

    const showSolution = (id) => {
        if(props.solves[id].solution.length > 0){
            return 'solution: '+props.solves[id].solution;
        }
    }

    const toRender = () => {
        let arrToRender = [...props.solves];
        arrToRender.reverse();
        return arrToRender;
    }

    let [markAll, setMarkAll] = useState(true);
    useEffect(() => {
        let newSolves = [...props.solves];
        newSolves.map((solve) => {
            solve.marked = markAll;
        });
        props.updateSolves(newSolves);
    }, [markAll])

    return (
        <div className="results-container">
            <table className="results-table">
                <thead>
                    <tr>
                        <th>
                            Lp <input type="checkbox" 
                            checked={markAll} 
                            onChange={()=>{setMarkAll(!markAll)}}/>
                        </th>
                        <th>scramble</th>
                        <th>time</th>
                        <th>+2</th>
                        <th>DNF</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toRender().map((solve, index) => {
                            return (
                                <tr key={props.solves.length - index}>
                                    <td>
                                        {props.solves.length - index}
                                        <input type="checkbox" 
                                        checked={solve.marked}
                                        onChange={() => {mark(props.solves.length - index - 1)}}/>
                                        <button onClick={() => {dropSolve(props.solves.length - index - 1)}}>Drop</button>
                                    </td>
                                    <td>
                                        {solve.scramble}<button onClick={() => {solution(props.solves.length - index - 1)}}>add/edit solution</button><br/>
                                        {showSolution(props.solves.length - index - 1)}
                                    </td>
                                    <td>{parseTime(solve.time)}</td>
                                    <td>
                                        <input type="checkbox" 
                                        checked={solve.penalty}
                                        onChange={() => {penalty(props.solves.length - index - 1)}}/>
                                    </td>
                                    <td>
                                        <input type="checkbox" 
                                        checked={solve.dnf}
                                        onChange={() => {dnf(props.solves.length - index - 1)}}/>
                                    </td>
                                    <td>{parseTime(solve.result())}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Results;