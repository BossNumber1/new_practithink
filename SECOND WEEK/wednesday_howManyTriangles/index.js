// check implementation

let selectBtn = "right";

let elements = document.getElementsByClassName("row");

document.getElementById("hexagon").onclick = function () {
    document.getElementById("hexagon").classList.toggle("selectedPicture");
    document.getElementById("trapezoid").classList.remove("selectedPicture");

    selectBtn = "right";
};

document.getElementById("trapezoid").onclick = function () {
    document.getElementById("trapezoid").classList.toggle("selectedPicture");
    document.getElementById("hexagon").classList.remove("selectedPicture");

    selectBtn = "wrong";
};

document.getElementById("submit").onclick = function () {
    alert("you have selected the " + selectBtn + " figure");
};
