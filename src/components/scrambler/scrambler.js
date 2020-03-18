const randomize = (moves, moveSet, opposites, modes) => {
    let retString = '';
    let locked = {}
    moveSet.map((move) => {
        locked[move] = false;
    });

    for(let i=0; i<moves; i++)
    {
        let rnd;
        do {
            rnd = moveSet[Math.floor(Math.random()*moveSet.length)];
        } while(locked[rnd] == true);

        if(opposites !== 'oneTime'){
            let lays = Object.keys(locked);
            lays.map((lay) => {
                if(opposites == false){
                    locked[lay] = false;
                } else {
                    if(!opposites[lay].includes(rnd)){
                        locked[lay] = false;
                    }
                }
            });
        }
        
        locked[rnd] = true;

        let mode = Math.floor(Math.random()*modes.length);
        rnd += modes[mode];

        retString += rnd+' ';
    }

    return retString;
}

const cubic = (cube) => {
    let scramble = '';

    let layers;
    let moves;
    let opposites;

    switch(cube)
    {
        case '2x2x2':
        case '3x3x3': {
            moves = 25;
            if(cube=='2x2x2'){moves=9;}
            layers = ['R', 'L', 'U', 'D', 'F', 'B'];
            opposites = {
                'R': ['L'],
                'L': ['R'],
                'U': ['D'],
                'D': ['U'],
                'F': ['B'],
                'B': ['F']
            }
        }
        break;
        case '4x4x4':
        case '5x5x5': {
            moves = 40;
            if(cube == '5x5x5'){moves = 60;}
            layers = ['R', 'L', 'U', 'D', 'F', 'B', 'Rw', 'Lw', 'Uw', 'Dw', 'Fw', 'Bw'];
            opposites = {
                'R': ['L', 'Lw', 'Rw'],
                'Rw': ['L', 'Lw', 'R'],
                'L': ['R', 'Rw', 'Lw'],
                'Lw': ['R', 'Rw', 'L'],
                'U': ['D', 'Dw', 'Uw'],
                'Uw': ['D', 'Dw', 'U'],
                'D': ['U', 'Uw', 'Dw'],
                'Dw': ['U', 'Uw', 'D'],
                'F': ['B', 'Bw', 'Fw'],
                'Fw': ['B', 'Bw', 'F'],
                'B': ['F', 'Fw', 'Bw'],
                'Bw': ['F', 'Fw', 'B']
            }
        }
    }

    return randomize(moves, layers, opposites, ['', '\'', '2']);
}

const pyraminx = () => {
    let scramble = '';

    let layers = ['R', 'L', 'U', 'B'];
    let tips = ['r', 'l', 'u', 'b'];
    let moves = 8;
    let tipMoves;

    tipMoves = Math.floor(Math.random()*5);
    
    scramble += randomize(moves, layers, false, ['', '\'']);
    scramble += randomize(tipMoves, tips, 'oneTime', ['', '\'']);

    return scramble;
}

const Scrambler = (cube) => {
    switch(cube){
        case '2x2x2':
        case '3x3x3':
        case '4x4x4':
        case '5x5x5': {
            return cubic(cube);
        }
        break;
        case 'pyraminx': {
            return pyraminx();
        }
        break;
    }
}

export default Scrambler;