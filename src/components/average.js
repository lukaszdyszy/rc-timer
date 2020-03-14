const average = (solves) => {
    if(solves.length >= 3){
        let dnfs = 0;
        do{
            if(solves.indexOf('DNF')!=-1){
                dnfs++;
                solves.splice(solves.indexOf('DNF'), 1);
            }
        }while(solves.indexOf('DNF')!=-1);
        if(dnfs >= 2){
            return 'DNF';
        } else {
            solves.sort((a, b) => a-b);
            if(dnfs==1){
                solves.push('dnf');
            }
            let sum = 0;
            for(let i=1; i<solves.length-1; i++){
                sum += Math.floor(solves[i]/10)*10;
            }
            return sum/(solves.length-2);
        }
    } else {
        return 0;
    }
}

export default average;