
const starttingMinutes = 0;
let time = starttingMinutes * 60;

const countdownEl = document.getElementById('countdown');


const updateCountDown = () => {
 
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds :seconds;
    
    countdownEl.innerHTML = `${minutes}:${seconds}`
    
    if(time>0){
        time--;
    }
}

setInterval(updateCountDown,1000);