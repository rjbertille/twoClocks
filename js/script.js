const hoursHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const hourHandland = document.querySelector('.hour-hand-hand');
const minsHandland = document.querySelector('.min-hand-hand');
const secondsHandland = document.querySelector('.second-hand-hand');


function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
   
    const min = now.getMinutes();
    const minDegree = (( min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    
    const hour = now.getHours();
    const hoursDegree =(( hour / 18) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
   
  
}

setInterval(setDate, 1000);





function set() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHandland.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins /60) * 360) + 90;
    minsHandland.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees =((hour / 12) * 360) + 90;
    hourHandland.style.transform = `rotate(${hourDegrees}deg)`;
    

    

}

setInterval(set,1000);

