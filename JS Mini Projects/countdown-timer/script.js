
const endDate = "29 March 2024 6:06:10 PM";


const inputs = document.querySelectorAll('input');
// document.getElementById('days').innerText = ;

function clock(){

    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);

    const diff = (end - now) / 1000;

    if(diff < 0) return;
    // console.log(diff)
    // get days
    const days = Math.floor(diff / 60 / 60 / 24);
    inputs[0].value = days;

    // get hours
    const hours = Math.floor((diff / 60 / 60) % 24);
    inputs[1].value = hours;

    // get minuts
    const minuts = Math.floor((diff / 60) % 60);
    inputs[2].value = minuts;

    // get seconds
    const seconds = Math.floor((diff) % 60);
    inputs[3].value = seconds;

}

// clock();

setInterval(() => {
    clock()
}, 1000);