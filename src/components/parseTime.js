const parseTime = (time) => {
    if(typeof(time) != 'number'){
        return time;
    } else {
        let min = Math.floor(time / 60000);
        let sec = Math.floor((time - min*60000) / 1000);
        let ms  = Math.floor((time - min*60000 - sec*1000) / 10);


        if(min < 1){min = '';}else{min = min+':';}
        if(sec < 10){sec='0'+sec;}sec=sec+':';
        if(ms < 10){ms='0'+ms;}

        return min + sec + ms;
    }
}

export default parseTime;