console.log("write some Javascript")

let MiliSeconds = 0;
let Seconds = 0;
let Minuets = 0;
let lapnum = 0;

function updatetime() {
    MiliSeconds++;
    if (MiliSeconds == 100) {
        MiliSeconds = 0;
        Seconds++;
        if (Seconds == 60) {
            Seconds = 0;
            Minuets++;
        }
    }

    document.querySelector(".miliseconds").innerHTML = `${MiliSeconds < 10 ? "0" : ""}${MiliSeconds}`
    document.querySelector(".currenttime").innerHTML = `${Minuets < 10 ? "0" : ""}${Minuets}:${Seconds < 10 ? "0" : ""}${Seconds}`
}


// Adding Eventlistner to start and puase.
let setinterval = false;
document.getElementById("start").addEventListener("click", () => {
    if (setinterval == false) {
        setinterval = setInterval(updatetime, 10);
        document.querySelector("#start img").src = "img/puase.svg";
    }

    else {
        clearInterval(setinterval)
        setinterval = false;
        document.querySelector("#start img").src = "img/start.svg"
    }
});


// Adding EventListner for Lap.
document.getElementById("lap").addEventListener("click", () => {
    lapnum++;
    let tim = document.querySelector(".currenttime").innerHTML;
    let mili = document.querySelector(".miliseconds").innerHTML;
    document.querySelector(".laptime ol").innerHTML = document.querySelector(".laptime ol").innerHTML + `<li>${lapnum}. ${tim}:${mili}</li>`
})


// Add Eventlistner for Restart.
document.querySelector("#restart").addEventListener("click", () => {
    if (setinterval) {
        clearInterval(setinterval);
        document.querySelector("#start img").src = "img/start.svg"
    }

    MiliSeconds = 0;
    Seconds = 0;
    Minuets = 0;
    hours = 0;
    lapnum = 0;
    document.querySelector(".miliseconds").innerHTML = `${MiliSeconds < 10 ? "0" : ""}${MiliSeconds}`
    document.querySelector(".currenttime").innerHTML = `${Minuets < 10 ? "0" : ""}${Minuets}:${Seconds < 10 ? "0" : ""}${Seconds}`
    document.querySelector(".laptime").innerHTML = ``
})