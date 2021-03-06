const mean = (solves) => {
    if(solves.length >= 1){
        if(solves.indexOf('DNF') != -1){
            return 'DNF';
        } else {
            solves.sort((a, b) => a-b);
            let sum = 0;
            for(let i=0; i<solves.length; i++){
                sum += Math.floor(solves[i]/10)*10;
            }
            return sum/(solves.length);
        }
    } else {
        return 0;
    }
}

export default mean;