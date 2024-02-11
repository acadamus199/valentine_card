var btn = document.getElementById("decline_button");
var btn_accept = document.getElementById("accept_button");
const nuh_audio = new Audio("source/nuh-uh.mp3");
const yes_audio = new Audio("source/fnafYaY.mp3");
var click_times = 0;
var wS = true;
var nS = false;

//Creating video element
var vid = document.createElement('video');
vid.src = 'source/conf.mp4';
vid.preload = "auto";
vid.muted = true;
document.getElementById("middle").appendChild(vid);

vid.play();
waitingScreen = setInterval(() => {
    if (vid.currentTime >= 10)
        vid.currentTime = 8
}, 1000);

//Btn's animations
const jumpingAnimation = [
    { transform: "translateY(0px)" },
    { transform: "translateY(-20px)" },
    { transform: "translateY(0px)" },
    { transform: "translateY(-20px)" },
    { transform: "translateY(0px)" },
];
const rotationAnim = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(-5deg)" },
    { transform: "rotate(5deg)" },
    { transform: "rotate(0deg)" }
];

function acceptBtnFunction() {
    vid.currentTime = 16;
    btn_accept.animate(jumpingAnimation, 1000);
    yes_audio.play();
    //Clearing and setting new screen interval
    if (wS)
        clearInterval(waitingScreen);
    if (nS)
        clearInterval(nuUhScreen);

    nuUhScreen = setInterval(() => {
        if (vid.currentTime >= 17)
            vid.currentTime = 16;
    }, 1000);
    btn_accept.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    var lvU = setInterval(() => { alert("I love you <3"); clearInterval(lvU); }, 4000);
}

//Yes button click action
btn_accept?.addEventListener("click", () => {
    acceptBtnFunction();
})

//No button click action
btn?.addEventListener("click", () => {
    click_times++;
    if (click_times == 1) {
        //Clearing and setting new screen interval
        clearInterval(waitingScreen);
        wS = false;
        nS = true;
        vid.currentTime = 12;
        nuUhScreen = setInterval(() => {
            if (vid.currentTime >= 14)
                vid.currentTime = 12;
        }, 1000);
        //Playing sound and animation
        btn.src = "source/guzik nuh uh.png"
        nuh_audio.play();
        btn.animate(rotationAnim, 500);
    } else if (click_times == 2) {
        //Changing No btn to Yes
        //Clearing and setting new screen interval
        click_times++;
        clearInterval(nuUhScreen);
        wS = true;
        nS = false;
        vid.currentTime = 8;
        waitingScreen = setInterval(() => {
            if (vid.currentTime >= 10)
                vid.currentTime = 8
        }, 1000);
        //Playing sound and animation
        btn.animate(rotationAnim, 500);
        btn.src = "source/guzik tak.png";
        btn?.addEventListener("click", () => {
            clearInterval(waitingScreen);
            acceptBtnFunction();
        })
    }
})



/*
var points = [1, 5, 7, 9],
    index = 1,
    currentStopTime = points[index];
function checkTime() {
    if (video.currentTime >= currentStopTime) {
        video.pause();
        if (points.length > ++index) {       // increase index and get next time
            currentStopTime = points[index];
        }
        else {                               // or loop/next...
            // done
        }
    }
}
*/
