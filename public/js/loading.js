const myText = '...';
const myArray = myText.split("");
let loopTimer;

function letterTicker() {
    if (myArray.length > 0) {
        document.getElementById("dots").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('letterTicker()', 1100);
}

function startTimer() {
    letterTicker();
    setTimeout(() => {
        document.location.replace('/home');
    }, 2700)
}

startTimer();