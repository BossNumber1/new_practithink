// check implementation
let selectedButton = "";

document.getElementById("thirteen").onclick = function () {
    let clickedElement = document.getElementById("thirteen");

    clickedElement.style.backgroundColor = "#369CB7";
    clickedElement.style.color = "white";

    selectedButton = "wrong";

    document.getElementById("fourteen").style.backgroundColor = "white";
    document.getElementById("fourteen").style.color = "black";

    document.getElementById("eighteen").style.backgroundColor = "white";
    document.getElementById("eighteen").style.color = "black";
};

document.getElementById("fourteen").onclick = function () {
    let clickedElement = document.getElementById("fourteen");

    clickedElement.style.backgroundColor = "#369CB7";
    clickedElement.style.color = "white";

    selectedButton = "right";

    document.getElementById("thirteen").style.backgroundColor = "white";
    document.getElementById("thirteen").style.color = "black";

    document.getElementById("eighteen").style.backgroundColor = "white";
    document.getElementById("eighteen").style.color = "black";
};

document.getElementById("eighteen").onclick = function () {
    let clickedElement = document.getElementById("eighteen");

    clickedElement.style.backgroundColor = "#369CB7";
    clickedElement.style.color = "white";

    selectedButton = "wrong";

    document.getElementById("thirteen").style.backgroundColor = "white";
    document.getElementById("thirteen").style.color = "black";

    document.getElementById("fourteen").style.backgroundColor = "white";
    document.getElementById("fourteen").style.color = "black";
};

document.getElementById("submit").onclick = function () {
    alert("you have the " + selectedButton + " answer");
};
