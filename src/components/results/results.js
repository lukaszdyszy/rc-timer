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
                        props.solves.map((solve, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {index+1}
                                        <input type="checkbox" 
                                        checked={solve.marked}
                                        onChange={() => {mark(index)}}/>
                                        <button onClick={() => {dropSolve(index)}}>Drop</button>
                                    </td>
                                    <td>{solve.scramble}</td>
                                    <td>{parseTime(solve.time)}</td>
                                    <td>
                                        <input type="checkbox" 
                                        checked={solve.penalty}
                                        onChange={() => {penalty(index)}}/>
                                    </td>
                                    <td>
                                        <input type="checkbox" 
                                        checked={solve.dnf}
                                        onChange={() => {dnf(index)}}/>
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