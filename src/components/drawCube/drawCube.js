import React, {useState, useEffect} from 'react';
import './drawCube.css';

const DrawCube = (props) => {
    const createLayer = (color) => {
        let rows = new Array();
        for(let i=0; i<size; i++){
            let columns = new Array();
            for(let i=0; i<size; i++){
                columns.push(color);
            }
            rows.push(columns);
        }
        return rows;
    }

    const generateCube = () => {
        return {
            'U': createLayer('white'),
            'F': createLayer('green'),
            'D': createLayer('yellow'),
            'B': createLayer('blue'),
            'R': createLayer('red'),
            'L': createLayer('orange')
        }
    }

    const copy2d = (from) =>{
        let newArr = new Array(from.length);
    
        for(let i=0; i<from.length; i++){
            newArr[i] = from[i].map(el => el);
        }
    
        return newArr;
    }

    const [size, setSize] = useState(props.size);
    const [cube, updateCube] = useState(generateCube);

    const rotate = (layer, times) => {
        let fromLayer = copy2d(layer);
        for(let i=0; i<times; i++){
            let newLayer = createLayer('x');
            fromLayer.forEach((row, rIndex) => {
                row.forEach((column, cIndex) => {
                    newLayer[cIndex][size-1-rIndex] = column;
                });
            });
            fromLayer = copy2d(newLayer);
        }
        return fromLayer;
    }

    const axis = (onCube, layer, deep, times) => {
        let tempCube = {
            'U': copy2d(onCube['U']),
            'F': copy2d(onCube['F']),
            'D': copy2d(onCube['D']),
            'B': copy2d(onCube['B']),
            'R': copy2d(onCube['R']),
            'L': copy2d(onCube['L'])
        }
        for(let i=0; i<times; i++){
            switch(layer){
                case 'U':{
                    let newF = copy2d(tempCube['R']);
                    let newR = copy2d(tempCube['B']);
                    let newB = copy2d(tempCube['L']);
                    let newL = copy2d(tempCube['F']);
    
                    for(let i=0; i<deep; i++){
                        tempCube['F'][i] = newF[i];
                        tempCube['R'][i] = newR[i];
                        tempCube['B'][i] = newB[i];
                        tempCube['L'][i] = newL[i];
                    }
                }
                break;
                case 'D':{
                    let newF = copy2d(tempCube['L']);
                    let newR = copy2d(tempCube['F']);
                    let newB = copy2d(tempCube['R']);
                    let newL = copy2d(tempCube['B']);
                    
                    for(let i=0; i<deep; i++){
                        tempCube['F'][size-1-i] = newF[size-1-i];
                        tempCube['R'][size-1-i] = newR[size-1-i];
                        tempCube['B'][size-1-i] = newB[size-1-i];
                        tempCube['L'][size-1-i] = newL[size-1-i];
                    }
                }
                break;
                case 'R':{
                    let newF = copy2d(tempCube['D']);
                    let newU = copy2d(tempCube['F']);
                    let newB = copy2d(tempCube['U']);
                    let newD = copy2d(tempCube['B']);
                    
                    for(let j=0; j<size; j++){
                        for(let i=0; i<deep; i++){
                            tempCube['F'][j][size-1-i] = newF[j][size-1-i];
                            tempCube['U'][j][size-1-i] = newU[j][size-1-i];
                            tempCube['B'][j][i] = newB[size-1-j][size-1-i];
                            tempCube['D'][j][size-1-i] = newD[size-1-j][i];
                        }
                    }
                }
                break;
                case 'L':{
                    let newF = copy2d(tempCube['U']);
                    let newU = copy2d(tempCube['B']);
                    let newB = copy2d(tempCube['D']);
                    let newD = copy2d(tempCube['F']);
                    
                    for(let j=0; j<size; j++){
                        for(let i=0; i<deep; i++){
                            tempCube['F'][j][i] = newF[j][i];
                            tempCube['U'][j][i] = newU[size-1-j][size-1-i];
                            tempCube['B'][size-1-j][size-1-i] = newB[j][i];
                            tempCube['D'][j][i] = newD[j][i];
                        }
                    }
                }
                break;
                case 'F':{
                    let newU = copy2d(rotate(tempCube['L'], 1));
                    let newR = copy2d(rotate(tempCube['U'], 1));
                    let newD = copy2d(rotate(tempCube['R'], 1));
                    let newL = copy2d(rotate(tempCube['D'], 1));
                    
                    for(let i=0; i<deep; i++){
                        for(let j=0; j<size; j++){
                            tempCube['U'][size-1-i][j] = newU[size-1-i][j];
                            tempCube['R'][j][i] = newR[j][i];
                            tempCube['D'][i][j] = newD[i][j];
                            tempCube['L'][size-1-j][size-1-i] = newL[size-1-j][size-1-i];
                        }
                    }
                }
                break;
                case 'B':{
                    let newU = copy2d(rotate(tempCube['R'], 3));
                    let newR = copy2d(rotate(tempCube['D'], 3));
                    let newD = copy2d(rotate(tempCube['L'], 3));
                    let newL = copy2d(rotate(tempCube['U'], 3));
                    
                    for(let i=0; i<deep; i++){
                        for(let j=0; j<size; j++){
                            tempCube['U'][i][j] = newU[i][j];
                            tempCube['R'][size-1-j][size-1-i] = newR[size-1-j][size-1-i];
                            tempCube['D'][size-1-i][j] = newD[size-1-i][j];
                            tempCube['L'][j][i] = newL[j][i];
                        }
                    }
                }
                break;
            }
        }
        return tempCube;
    }

    const move = (onCube, layer, deep, times) => {
        let tempCube = axis(onCube, layer, deep, times);
        tempCube[layer] = rotate(tempCube[layer], times);
        return tempCube;
    }

    const parseMove = (mv) => {
        let layer;
        let deep;
        let times;
        if(mv.indexOf('w') !== -1){
            layer = mv[mv.indexOf('w')-1];
            if(!isNaN(mv[0])){
                deep = mv[0];
            } else {
                deep = 2;
            }
        } else {
            layer = mv[0];
            deep = 1;
        }
        if(mv[mv.length-1]===`'`){
            times = 3;
        } else if(mv[mv.length-1]===`2`){
            times = 2;
        } else {
            times = 1;
        }
        return [layer, deep, times];
    }

    const doScramble = (scrmbl) => {
        let tempCube = generateCube();
        let mvs = scrmbl.split(' ');
        mvs.pop();
        mvs.forEach(mv => {
            let parsed = parseMove(mv);
            tempCube = move(tempCube, parsed[0], parsed[1], parsed[2]);
        });
        updateCube(tempCube);
    }

    useEffect(() => {
        updateCube(generateCube());
    }, [size]);

    useEffect(() => {
        doScramble(props.scramble);
    }, [props.scramble]);

    useEffect(() => {
        setSize(props.size);
    }, [props.size]);
    
    return (
        <div className="drawcube-container">

            {
                Object.keys(cube).map(layer => {
                    return(
                        <div 
                        className={`layer layer-${layer}`} 
                        style={{gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)`}} >
                            {
                                cube[layer].map(row => {
                                    return row.map(color => {
                                        return(
                                            <div className="tile" style={{backgroundColor: color}}></div>
                                        )
                                    })
                                })
                            }
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default DrawCube;