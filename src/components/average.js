const average = (solves) => {
    if(solves.length >= 3){
        solves.sort((a, b) => a-b);
        let sum = 0;
        for(let i=1; i<solves.length-1; i++){
            sum += Math.floor(solves[i]/10)*10;
        }
        return sum/(solves.length-2);
    } else {
        return 0;
    }
}

export default average;