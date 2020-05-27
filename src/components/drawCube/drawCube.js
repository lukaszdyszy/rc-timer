import React, {useState, useEffect} from 'react';
import './drawCube.css';

const DrawCube = (props) => {
    const [cubeToRender, updateCube] = useState({
        'U': ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        'F': ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
        'D': ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
        'B': ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
        'R': ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
        'L': ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange']
    });

    const move = (layer, mod, cube) => {
        switch(layer){
            case 'U': {
                let newU = [];
                let newR = [];
                let newB = [];
                let newL = [];
                let newF = [];
                if(mod === '\''){
                    newU = [cube[layer][2], cube[layer][5], cube[layer][8], cube[layer][1], cube[layer][4], cube[layer][7], cube[layer][0], cube[layer][3], cube[layer][6]];
                    newR = [cube['F'][0], cube['F'][1], cube['F'][2], cube['R'][3], cube['R'][4], cube['R'][5], cube['R'][6], cube['R'][7], cube['R'][8]];
                    newB = [cube['R'][0], cube['R'][1], cube['R'][2], cube['B'][3], cube['B'][4], cube['B'][5], cube['B'][6], cube['B'][7], cube['B'][8]];
                    newL = [cube['B'][0], cube['B'][1], cube['B'][2], cube['L'][3], cube['L'][4], cube['L'][5], cube['L'][6], cube['L'][7], cube['L'][8]];
                    newF = [cube['L'][0], cube['L'][1], cube['L'][2], cube['F'][3], cube['F'][4], cube['F'][5], cube['F'][6], cube['F'][7], cube['F'][8]];
                } else if(mod === '2'){
                    newU = [cube[layer][8], cube[layer][7], cube[layer][6], cube[layer][5], cube[layer][4], cube[layer][3], cube[layer][2], cube[layer][1], cube[layer][0]];
                    newR = [cube['L'][0], cube['L'][1], cube['L'][2], cube['R'][3], cube['R'][4], cube['R'][5], cube['R'][6], cube['R'][7], cube['R'][8]];
                    newB = [cube['F'][0], cube['F'][1], cube['F'][2], cube['B'][3], cube['B'][4], cube['B'][5], cube['B'][6], cube['B'][7], cube['B'][8]];
                    newL = [cube['R'][0], cube['R'][1], cube['R'][2], cube['L'][3], cube['L'][4], cube['L'][5], cube['L'][6], cube['L'][7], cube['L'][8]];
                    newF = [cube['B'][0], cube['B'][1], cube['B'][2], cube['F'][3], cube['F'][4], cube['F'][5], cube['F'][6], cube['F'][7], cube['F'][8]];
                } else {
                    newU = [cube[layer][6], cube[layer][3], cube[layer][0], cube[layer][7], cube[layer][4], cube[layer][1], cube[layer][8], cube[layer][5], cube[layer][2]];
                    newR = [cube['B'][0], cube['B'][1], cube['B'][2], cube['R'][3], cube['R'][4], cube['R'][5], cube['R'][6], cube['R'][7], cube['R'][8]];
                    newB = [cube['L'][0], cube['L'][1], cube['L'][2], cube['B'][3], cube['B'][4], cube['B'][5], cube['B'][6], cube['B'][7], cube['B'][8]];
                    newL = [cube['F'][0], cube['F'][1], cube['F'][2], cube['L'][3], cube['L'][4], cube['L'][5], cube['L'][6], cube['L'][7], cube['L'][8]];
                    newF = [cube['R'][0], cube['R'][1], cube['R'][2], cube['F'][3], cube['F'][4], cube['F'][5], cube['F'][6], cube['F'][7], cube['F'][8]];
                }
                cube = {'U': newU, 'F': newF, 'D': cube['D'], 'B': newB, 'R': newR, 'L': newL};
            }
            break;
            case 'D': {
                let newD = [];
                let newR = [];
                let newB = [];
                let newL = [];
                let newF = [];
                if(mod === '\''){
                    newD = [cube[layer][2], cube[layer][5], cube[layer][8], cube[layer][1], cube[layer][4], cube[layer][7], cube[layer][0], cube[layer][3], cube[layer][6]];
                    newR = [cube['R'][0], cube['R'][1], cube['R'][2], cube['R'][3], cube['R'][4], cube['R'][5], cube['B'][6], cube['B'][7], cube['B'][8]];
                    newB = [cube['B'][0], cube['B'][1], cube['B'][2], cube['B'][3], cube['B'][4], cube['B'][5], cube['L'][6], cube['L'][7], cube['L'][8]];
                    newL = [cube['L'][0], cube['L'][1], cube['L'][2], cube['L'][3], cube['L'][4], cube['L'][5], cube['F'][6], cube['F'][7], cube['F'][8]];
                    newF = [cube['F'][0], cube['F'][1], cube['F'][2], cube['F'][3], cube['F'][4], cube['F'][5], cube['R'][6], cube['R'][7], cube['R'][8]];
                } else if(mod === '2'){
                    newD = [cube[layer][8], cube[layer][7], cube[layer][6], cube[layer][5], cube[layer][4], cube[layer][3], cube[layer][2], cube[layer][1], cube[layer][0]];
                    newR = [cube['R'][0], cube['R'][1], cube['R'][2], cube['R'][3], cube['R'][4], cube['R'][5], cube['L'][6], cube['L'][7], cube['L'][8]];
                    newB = [cube['B'][0], cube['B'][1], cube['B'][2], cube['B'][3], cube['B'][4], cube['B'][5], cube['F'][6], cube['F'][7], cube['F'][8]];
                    newL = [cube['L'][0], cube['L'][1], cube['L'][2], cube['L'][3], cube['L'][4], cube['L'][5], cube['R'][6], cube['R'][7], cube['R'][8]];
                    newF = [cube['F'][0], cube['F'][1], cube['F'][2], cube['F'][3], cube['F'][4], cube['F'][5], cube['B'][6], cube['B'][7], cube['B'][8]];
                } else {
                    newD = [cube[layer][6], cube[layer][3], cube[layer][0], cube[layer][7], cube[layer][4], cube[layer][1], cube[layer][8], cube[layer][5], cube[layer][2]];
                    newR = [cube['R'][0], cube['R'][1], cube['R'][2], cube['R'][3], cube['R'][4], cube['R'][5], cube['F'][6], cube['F'][7], cube['F'][8]];
                    newB = [cube['B'][0], cube['B'][1], cube['B'][2], cube['B'][3], cube['B'][4], cube['B'][5], cube['R'][6], cube['R'][7], cube['R'][8]];
                    newL = [cube['L'][0], cube['L'][1], cube['L'][2], cube['L'][3], cube['L'][4], cube['L'][5], cube['B'][6], cube['B'][7], cube['B'][8]];
                    newF = [cube['F'][0], cube['F'][1], cube['F'][2], cube['F'][3], cube['F'][4], cube['F'][5], cube['L'][6], cube['L'][7], cube['L'][8]];
                }
                cube = {'U': cube['U'], 'F': newF, 'D': newD, 'B': newB, 'R': newR, 'L': newL};
            }
            break;
            case 'F': {
                let newF = [];
                let newU = [];
                let newR = [];
                let newD = [];
                let newL = [];
                if(mod === '\''){
                    newF = [cube[layer][2], cube[layer][5], cube[layer][8], cube[layer][1], cube[layer][4], cube[layer][7], cube[layer][0], cube[layer][3], cube[layer][6]];
                    newU = [cube['U'][0], cube['U'][1], cube['U'][2], cube['U'][3], cube['U'][4], cube['U'][5], cube['R'][0], cube['R'][3], cube['R'][6]];
                    newR = [cube['D'][2], cube['R'][1], cube['R'][2], cube['D'][1], cube['R'][4], cube['R'][5], cube['D'][0], cube['R'][7], cube['R'][8]];
                    newD = [cube['L'][2], cube['L'][5], cube['L'][8], cube['D'][3], cube['D'][4], cube['D'][5], cube['D'][6], cube['D'][7], cube['D'][8]];
                    newL = [cube['L'][0], cube['L'][1], cube['U'][8], cube['L'][3], cube['L'][4], cube['U'][7], cube['L'][6], cube['L'][7], cube['U'][6]];
                } else if(mod === '2'){
                    newF = [cube[layer][8], cube[layer][7], cube[layer][6], cube[layer][5], cube[layer][4], cube[layer][3], cube[layer][2], cube[layer][1], cube[layer][0]];
                    newU = [cube['U'][0], cube['U'][1], cube['U'][2], cube['U'][3], cube['U'][4], cube['U'][5], cube['D'][2], cube['D'][1], cube['D'][0]];
                    newR = [cube['L'][8], cube['R'][1], cube['R'][2], cube['L'][5], cube['R'][4], cube['R'][5], cube['L'][2], cube['R'][7], cube['R'][8]];
                    newD = [cube['U'][8], cube['U'][7], cube['U'][6], cube['D'][3], cube['D'][4], cube['D'][5], cube['D'][6], cube['D'][7], cube['D'][8]];
                    newL = [cube['L'][0], cube['L'][1], cube['R'][6], cube['L'][3], cube['L'][4], cube['R'][3], cube['L'][6], cube['L'][7], cube['R'][0]];
                } else {
                    newF = [cube[layer][6], cube[layer][3], cube[layer][0], cube[layer][7], cube[layer][4], cube[layer][1], cube[layer][8], cube[layer][5], cube[layer][2]];
                    newU = [cube['U'][0], cube['U'][1], cube['U'][2], cube['U'][3], cube['U'][4], cube['U'][5], cube['L'][8], cube['L'][5], cube['L'][2]];
                    newR = [cube['U'][6], cube['R'][1], cube['R'][2], cube['U'][7], cube['R'][4], cube['R'][5], cube['U'][8], cube['R'][7], cube['R'][8]];
                    newD = [cube['R'][6], cube['R'][3], cube['R'][0], cube['D'][3], cube['D'][4], cube['D'][5], cube['D'][6], cube['D'][7], cube['D'][8]];
                    newL = [cube['L'][0], cube['L'][1], cube['D'][0], cube['L'][3], cube['L'][4], cube['D'][1], cube['L'][6], cube['L'][7], cube['D'][2]];
                }
                cube = {'U': newU, 'F': newF, 'D': newD, 'B': cube['B'], 'R': newR, 'L': newL};
            }
            break;
            case 'B': {
                let newB = [];
                let newU = [];
                let newR = [];
                let newD = [];
                let newL = [];
                if(mod === '\''){
                    newB = [cube[layer][2], cube[layer][5], cube[layer][8], cube[layer][1], cube[layer][4], cube[layer][7], cube[layer][0], cube[layer][3], cube[layer][6]];
                    newU = [cube['L'][6], cube['L'][3], cube['L'][0], cube['U'][3], cube['U'][4], cube['U'][5], cube['U'][6], cube['U'][7], cube['U'][8]];
                    newR = [cube['R'][0], cube['R'][1], cube['U'][0], cube['R'][3], cube['R'][4], cube['U'][1], cube['R'][6], cube['R'][7], cube['U'][2]];
                    newD = [cube['D'][0], cube['D'][1], cube['D'][2], cube['D'][3], cube['D'][4], cube['D'][5], cube['R'][8], cube['R'][5], cube['R'][2]];
                    newL = [cube['D'][6], cube['L'][1], cube['L'][2], cube['D'][7], cube['L'][4], cube['L'][5], cube['D'][8], cube['L'][7], cube['L'][8]];
                } else if(mod === '2'){
                    newB = [cube[layer][8], cube[layer][7], cube[layer][6], cube[layer][5], cube[layer][4], cube[layer][3], cube[layer][2], cube[layer][1], cube[layer][0]];
                    newU = [cube['D'][8], cube['D'][7], cube['D'][6], cube['U'][3], cube['U'][4], cube['U'][5], cube['U'][6], cube['U'][7], cube['U'][8]];
                    newR = [cube['R'][0], cube['R'][1], cube['L'][6], cube['R'][3], cube['R'][4], cube['L'][3], cube['R'][6], cube['R'][7], cube['L'][0]];
                    newD = [cube['D'][0], cube['D'][1], cube['D'][2], cube['D'][3], cube['D'][4], cube['D'][5], cube['U'][2], cube['U'][1], cube['U'][0]];
                    newL = [cube['R'][8], cube['L'][1], cube['L'][2], cube['R'][5], cube['L'][4], cube['L'][5], cube['R'][2], cube['L'][7], cube['L'][8]];
                } else {
                    newB = [cube[layer][6], cube[layer][3], cube[layer][0], cube[layer][7], cube[layer][4], cube[layer][1], cube[layer][8], cube[layer][5], cube[layer][2]];
                    newU = [cube['R'][2], cube['R'][5], cube['R'][8], cube['U'][3], cube['U'][4], cube['U'][5], cube['U'][6], cube['U'][7], cube['U'][8]];
                    newR = [cube['R'][0], cube['R'][1], cube['D'][8], cube['R'][3], cube['R'][4], cube['D'][7], cube['R'][6], cube['R'][7], cube['D'][6]];
                    newD = [cube['D'][0], cube['D'][1], cube['D'][2], cube['D'][3], cube['D'][4], cube['D'][5], cube['L'][0], cube['L'][3], cube['L'][6]];
                    newL = [cube['U'][2], cube['L'][1], cube['L'][2], cube['U'][1], cube['L'][4], cube['L'][5], cube['U'][0], cube['L'][7], cube['L'][8]];
                }
                cube = {'U': newU, 'F': cube['F'], 'D': newD, 'B': newB, 'R': newR, 'L': newL};
            }
            break;
            case 'R': {
                let newR = [];
                let newU = [];
                let newB = [];
                let newD = [];
                let newF = [];
                if(mod === '\''){
                    newR = [cube[layer][2], cube[layer][5], cube[layer][8], cube[layer][1], cube[layer][4], cube[layer][7], cube[layer][0], cube[layer][3], cube[layer][6]];
                    newU = [cube['U'][0], cube['U'][1], cube['B'][6], cube['U'][3], cube['U'][4], cube['B'][3], cube['U'][6], cube['U'][7], cube['B'][0]];
                    newB = [cube['D'][8], cube['B'][1], cube['B'][2], cube['D'][5], cube['B'][4], cube['B'][5], cube['D'][2], cube['B'][7], cube['B'][8]];
                    newD = [cube['D'][0], cube['D'][1], cube['F'][2], cube['D'][3], cube['D'][4], cube['F'][5], cube['D'][6], cube['D'][7], cube['F'][8]];
                    newF = [cube['F'][0], cube['F'][1], cube['U'][2], cube['F'][3], cube['F'][4], cube['U'][5], cube['F'][6], cube['F'][7], cube['U'][8]];
                } else if(mod === '2'){
                    newR = [cube[layer][8], cube[layer][7], cube[layer][6], cube[layer][5], cube[layer][4], cube[layer][3], cube[layer][2], cube[layer][1], cube[layer][0]];
                    newU = [cube['U'][0], cube['U'][1], cube['D'][2], cube['U'][3], cube['U'][4], cube['D'][5], cube['U'][6], cube['U'][7], cube['D'][8]];
                    newB = [cube['F'][8], cube['B'][1], cube['B'][2], cube['F'][5], cube['B'][4], cube['B'][5], cube['F'][2], cube['B'][7], cube['B'][8]];
                    newD = [cube['D'][0], cube['D'][1], cube['U'][2], cube['D'][3], cube['D'][4], cube['U'][5], cube['D'][6], cube['D'][7], cube['U'][8]];
                    newF = [cube['F'][0], cube['F'][1], cube['B'][6], cube['F'][3], cube['F'][4], cube['B'][3], cube['F'][6], cube['F'][7], cube['B'][0]];
                } else {
                    newR = [cube[layer][6], cube[layer][3], cube[layer][0], cube[layer][7], cube[layer][4], cube[layer][1], cube[layer][8], cube[layer][5], cube[layer][2]];
                    newU = [cube['U'][0], cube['U'][1], cube['F'][2], cube['U'][3], cube['U'][4], cube['F'][5], cube['U'][6], cube['U'][7], cube['F'][8]];
                    newB = [cube['U'][8], cube['B'][1], cube['B'][2], cube['U'][5], cube['B'][4], cube['B'][5], cube['U'][2], cube['B'][7], cube['B'][8]];
                    newD = [cube['D'][0], cube['D'][1], cube['B'][6], cube['D'][3], cube['D'][4], cube['B'][3], cube['D'][6], cube['D'][7], cube['B'][0]];
                    newF = [cube['F'][0], cube['F'][1], cube['D'][2], cube['F'][3], cube['F'][4], cube['D'][5], cube['F'][6], cube['F'][7], cube['D'][8]];
                }
                cube = {'U': newU, 'F': newF, 'D': newD, 'B': newB, 'R': newR, 'L': cube['L']};
            }
            break;
            case 'L': {
                let newL = [];
                let newU = [];
                let newB = [];
                let newD = [];
                let newF = [];
                if(mod === '\''){
                    newL = [cube[layer][2], cube[layer][5], cube[layer][8], cube[layer][1], cube[layer][4], cube[layer][7], cube[layer][0], cube[layer][3], cube[layer][6]];
                    newU = [cube['F'][0], cube['U'][1], cube['U'][2], cube['F'][3], cube['U'][4], cube['U'][5], cube['F'][6], cube['U'][7], cube['U'][8]];
                    newB = [cube['B'][0], cube['B'][1], cube['U'][6], cube['B'][3], cube['B'][4], cube['U'][3], cube['B'][6], cube['B'][7], cube['U'][0]];
                    newD = [cube['B'][8], cube['D'][1], cube['D'][2], cube['B'][5], cube['D'][4], cube['D'][5], cube['B'][2], cube['D'][7], cube['D'][8]];
                    newF = [cube['D'][0], cube['F'][1], cube['F'][2], cube['D'][3], cube['F'][4], cube['F'][5], cube['D'][6], cube['F'][7], cube['F'][8]];
                } else if(mod === '2'){
                    newL = [cube[layer][8], cube[layer][7], cube[layer][6], cube[layer][5], cube[layer][4], cube[layer][3], cube[layer][2], cube[layer][1], cube[layer][0]];
                    newU = [cube['D'][0], cube['U'][1], cube['U'][2], cube['D'][3], cube['U'][4], cube['U'][5], cube['D'][6], cube['U'][7], cube['U'][8]];
                    newB = [cube['B'][0], cube['B'][1], cube['F'][6], cube['B'][3], cube['B'][4], cube['F'][3], cube['B'][6], cube['B'][7], cube['F'][0]];
                    newD = [cube['U'][0], cube['D'][1], cube['D'][2], cube['U'][3], cube['D'][4], cube['D'][5], cube['U'][6], cube['D'][7], cube['D'][8]];
                    newF = [cube['B'][8], cube['F'][1], cube['F'][2], cube['B'][5], cube['F'][4], cube['F'][5], cube['B'][2], cube['F'][7], cube['F'][8]];
                } else {
                    newL = [cube[layer][6], cube[layer][3], cube[layer][0], cube[layer][7], cube[layer][4], cube[layer][1], cube[layer][8], cube[layer][5], cube[layer][2]];
                    newU = [cube['B'][8], cube['U'][1], cube['U'][2], cube['B'][5], cube['U'][4], cube['U'][5], cube['B'][2], cube['U'][7], cube['U'][8]];
                    newB = [cube['B'][0], cube['B'][1], cube['D'][6], cube['B'][3], cube['B'][4], cube['D'][3], cube['B'][6], cube['B'][7], cube['D'][0]];
                    newD = [cube['F'][0], cube['D'][1], cube['D'][2], cube['F'][3], cube['D'][4], cube['D'][5], cube['F'][6], cube['D'][7], cube['D'][8]];
                    newF = [cube['U'][0], cube['F'][1], cube['F'][2], cube['U'][3], cube['F'][4], cube['F'][5], cube['U'][6], cube['F'][7], cube['F'][8]];
                }
                cube = {'U': newU, 'F': newF, 'D': newD, 'B': newB, 'R': cube['R'], 'L': newL};
            }
            break;
        }
        return cube;
    }

    useEffect(() => {
        let newCube = {
            'U': ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
            'F': ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
            'D': ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
            'B': ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
            'R': ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
            'L': ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange']
        }
        let scramble = props.scramble.split(' ');
        scramble.pop();
        scramble.map(mv => {
            mv = mv.split('');
            newCube = move(mv[0], mv[1], newCube);
        });
        updateCube(newCube);
    }, [props.scramble]);
    
    return (
        <div className="drawcube-container">
            <div className="layer layer-u">
                {cubeToRender['U'].map(color => {return(<div className="tile" style={{ backgroundColor: color }}></div>)})}
            </div>
            <div className="layer layer-l">
                {cubeToRender['L'].map(color => {return(<div className="tile" style={{ backgroundColor: color }}></div>)})}
            </div>
            <div className="layer layer-f">
                {cubeToRender['F'].map(color => {return(<div className="tile" style={{ backgroundColor: color }}></div>)})}
            </div>
            <div className="layer layer-r">
                {cubeToRender['R'].map(color => {return(<div className="tile" style={{ backgroundColor: color }}></div>)})}
            </div>
            <div className="layer layer-b">
                {cubeToRender['B'].map(color => {return(<div className="tile" style={{ backgroundColor: color }}></div>)})}
            </div>
            <div className="layer layer-d">
                {cubeToRender['D'].map(color => {return(<div className="tile" style={{ backgroundColor: color }}></div>)})}
            </div>
        </div>
    )
}

export default DrawCube;