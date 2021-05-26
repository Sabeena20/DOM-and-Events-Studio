// Write your JavaScript code here.
window.addEventListener("load", function () {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            paragraph = document.getElementById("flightStatus");
            paragraph.innerHTML = "Shuttle in Flight";
            color = document.getElementById("shuttleBackground");
            color.style.backgroundColor = "blue";
            height = document.getElementById("spaceShuttleHeight");
            height.innerHTML = "10000";
        }
    });
    let land = document.getElementById("landing");
    land.addEventListener("click", function () {
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        paragraph = document.getElementById("flightStatus");
        paragraph.innerHTML = "The shuttle has landed";
        color = document.getElementById("shuttleBackground");
        color.style.backgroundColor = "green";
        height = document.getElementById("spaceShuttleHeight");
        height.innerHTML = "0";
    });
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            paragraph = document.getElementById("flightStatus");
            paragraph.innerHTML = "Mission aborted";
            color = document.getElementById("shuttleBackground");
            color.style.backgroundColor = "green";
            height = document.getElementById("spaceShuttleHeight");
            height.innerHTML = "0";
        }
    });
    let rightButton = document.querySelector(".main");
    rightButton.addEventListener("click", function () {
        console.log("load");
        image = document.getElementById("rocket");
        image.style.position = "absolute";
        image.style.right = "10px";
    })
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function () {
        image = document.getElementById("rocket");
        image.style.position = "absolute";
        image.style.left = "10px";
    });
    let upArrow = document.querySelector(".main_1");
    upArrow.addEventListener("click", function () {
        height = document.getElementById("spaceShuttleHeight");
        height.innerHTML = "10000";
    });
    let downArrow = document.getElementById("down");
    downArrow.addEventListener("click", function () {
        height = document.getElementById("spaceShuttleHeight");
        height.innerHTML = "0";

    });
});