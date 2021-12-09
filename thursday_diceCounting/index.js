// check implementation

document.getElementById("thirteen").onclick = function (e) {
    let clickedElement = document.getElementById("thirteen");

    clickedElement.style.backgroundColor = "#369CB7";
    clickedElement.style.color = "white";

    document.getElementById("fourteen").style.backgroundColor = "white";
    document.getElementById("fourteen").style.color = "black";

    document.getElementById("eighteen").style.backgroundColor = "white";
    document.getElementById("eighteen").style.color = "black";
};

document.getElementById("fourteen").onclick = function (e) {
    let clickedElement = document.getElementById("fourteen");

    clickedElement.style.backgroundColor = "#369CB7";
    clickedElement.style.color = "white";

    document.getElementById("thirteen").style.backgroundColor = "white";
    document.getElementById("thirteen").style.color = "black";

    document.getElementById("eighteen").style.backgroundColor = "white";
    document.getElementById("eighteen").style.color = "black";
};

document.getElementById("eighteen").onclick = function (e) {
    let clickedElement = document.getElementById("eighteen");

    clickedElement.style.backgroundColor = "#369CB7";
    clickedElement.style.color = "white";

    document.getElementById("thirteen").style.backgroundColor = "white";
    document.getElementById("thirteen").style.color = "black";

    document.getElementById("fourteen").style.backgroundColor = "white";
    document.getElementById("fourteen").style.color = "black";
};
