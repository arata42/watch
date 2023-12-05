const body = document.querySelector('body');
const watch = document.querySelector('.watch');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const dateRing = document.querySelector('.dateRing');
const sec2 = document.querySelector('.sec2');
const min2 = document.querySelector('.min2');
const hour2 = document.querySelector('.hour2');
const dateRing2 = document.querySelector('.dateRing2');

//const dot = document.querySelector('.dot');
/*
let sec_deg = 0;
let min_deg = 0;
let hour_deg = 0;
*/
//let count = 0;

document.addEventListener("DOMContentLoaded", function() {
    body.style.zoom = '100%';
    window.scrollTo(0, 0);

    const isMobile = window.matchMedia("only screen and (max-width: 1000px)").matches;

    if (isMobile) {
        body.style.touchAction = 'none';
        body.style.zoom = '120%';
        //watch.style.transform = 'translate(-50%, -50%)';//-69%)';
    } else {
        body.style.touchAction = 'pinch-zoom';
        body.style.zoom = '100%';
        watch.style.transform = 'translate(-50%, -61.5%)';
    }
});

function moveWatch() {
    let now = new Date();
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    let sec_deg = (seconds * 6) + (milliseconds * 0.006);
    let min_deg = (minutes * 6) + (seconds * 0.1) + (milliseconds * 0.0001);
    let hour_deg = (hours * 30) + (minutes * 0.5) + (seconds * 0.0083) + (milliseconds * 0.0000083);
    let date_deg = (date - 1) * 11.6129; //(seconds - 1) * 11.6129;

    sec.style.transform = `rotate(${sec_deg}deg)`;
    min.style.transform = `rotate(${min_deg}deg)`;
    hour.style.transform = `rotate(${hour_deg}deg)`;
    dateRing.style.transform = `rotate(${date_deg}deg)`;

    sec2.style.transform = `rotate(${sec_deg}deg)`;
    min2.style.transform = `rotate(${min_deg}deg)`;
    hour2.style.transform = `rotate(${hour_deg}deg)`;
    dateRing2.style.transform = `rotate(${date_deg}deg)`;
    
    //*
    if (seconds == 0 || seconds == 60) {
        sec_deg = 0;
    }
    if (minutes == 0 || minutes == 60) {
        min_deg = 0;
    }
    if (hours == 0 || hours == 12) {
        hour_deg = 0;
    }
    if (date == 1) {
        date_deg = 0;
    }
    //*/
    
    /*
    if (seconds == 0 && milliseconds >= 0 && milliseconds <= 100) {
        dot.style.visibility = 'visible';
    } else {
        dot.style.visibility = 'hidden';
    }
    */

    // デバッグ用
    /*
    document.getElementById('test').style.display = 'block';
    document.getElementById('test1').innerHTML = 'now: ' + now + '<br>date: ' + date + '<br>hours: ' + hours + '<br>minutes: ' + minutes + '<br>seconds: ' + seconds + '<br>milliseconds: ' + milliseconds;
    document.getElementById('test2').innerHTML = 'date_deg: ' + date_deg + '<br>hour_deg: ' + hour_deg + '<br>min_deg: ' + min_deg + '<br>sec_deg: ' + sec_deg;
    count++;
    document.getElementById('test3').textContent = count;
    if (sec_deg == 0) {
        count = 0;
    }
    */
}

setInterval(moveWatch, 100);


/*
function moveWatch() {
    sec.style.transform = `rotate(${sec_deg}deg)`;
    sec_deg += 1.2;

    if (sec_deg >= 360) {
        sec_deg = 0;
    }

    min.style.transform = `rotate(${min_deg}deg)`;
    min_deg += 0.02;

    if (min_deg >= 360) {
        min_deg = 0;
    }

    hour.style.transform = `rotate(${hour_deg}deg)`;
    hour_deg += 0.00167;

    if (hour_deg >= 360) {
        hour_deg = 0;
    }
}

setInterval(moveWatch, 200);
*/