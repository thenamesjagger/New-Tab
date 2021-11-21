// sets username for greeting message
var username = "Jagger";

// constant to set the greeting message based on the time of the day, refrence https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}.`;

// web api to load time based on browser time, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    change_colors(mode);
    determineGreet(new Date().getHours());
    displayTime(time);
});

// sets time above the greeting message
setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

// web api to registar click for changing color schemes, refrence https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
document.getElementById("mode").addEventListener("click", function () {
    if (mode == "dark") {
        change_colors("light");
        localStorage.setItem('data', 'light');
        data = localStorage.getItem('data');
        mode = data;
    }
    else {
        change_colors("dark");
        localStorage.setItem('data', 'dark');
        data = localStorage.getItem('data');
        mode = data;
    }
});

// function to display time
function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}

// function for the dark color scheme, sets background, text and time colors
function dark_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#2e3440";
    document.getElementById("greeting").style.color = "#bf616a";
    mode_id.src = "ico/light.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    for (i = 0; i < link.length; i++) 
        link[i].style.color = "#bbb";

}

// function for the white color scheme, sets background, text and time colors
function light_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#d8dee9";
    document.getElementById("greeting").style.color = "#767283";
    mode_id.src = "ico/dark.png";
    mode_id.style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    for (i = 0; i < link.length; i++) 
        link[i].style.color = "#767283";
}

// function to run when color changer is clicked
function change_colors(mode) {
    if (mode == "dark") light_colors();
    else dark_colors();
}
