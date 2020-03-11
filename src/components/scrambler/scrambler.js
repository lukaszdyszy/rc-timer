const Scrambler = (cube) => {
    let scramble = '';

    let layers;
    let moves;
    let opposites;
    let locked;

    switch(cube)
    {
        case '3x3x3': {
            moves = 25;
            layers = ['R', 'L', 'U', 'D', 'F', 'B'];
            opposites = {
                'R': ['L'],
                'L': ['R'],
                'U': ['D'],
                'D': ['U'],
                'F': ['B'],
                'B': ['F']
            }
            locked = {
                'R': false,
                'L': false,
                'U': false,
                'D': false,
                'F': false,
                'B': false
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
            locked = {
                'R': false,
                'L': false,
                'U': false,
                'D': false,
                'F': false,
                'B': false,
                'Rw': false,
                'Lw': false,
                'Uw': false,
                'Dw': false,
                'Fw': false,
                'Bw': false
            }
        }
    }

    for(let i=0; i<moves; i++)
    {
        let rnd;
        do {
            rnd = layers[Math.floor(Math.random()*layers.length)];
        } while (locked[rnd] == true);

        for (let layer in locked) {
            if(!opposites[layer].includes(rnd)){locked[layer] = false;}
        }
        locked[rnd] = true;

        let mode = Math.floor(Math.random()*3);
        switch(mode){
            case 1: rnd+='\''; break;
            case 2: rnd+='2'; break;
        }

        scramble += rnd+' ';
    }

    return scramble;
}

export default Scrambler;