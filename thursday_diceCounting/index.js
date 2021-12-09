// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenCube", event.target.id);
    localStorage.setItem("nameCube", event.target.dataset.name);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id и имя несомого элемента
    let idTakenCube = localStorage.getItem("idTakenCube");
    let nameCube = localStorage.getItem("nameCube");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;
    let currentName = e.target.dataset.name;

    // меняем картинки местами
    let orig = document.getElementById(idTakenCube);
    orig.src = "./pictures/" + currentName + ".svg";
    orig.id = currentId;
    orig.setAttribute("data-name", currentName);
    orig.parentElement.style.cursor = "default";

    e.target.src = "./pictures/" + nameCube + ".svg";
    e.target.id = idTakenCube;
    e.target.setAttribute("data-name", nameCube);
    e.target.parentElement.style.cursor = "grab";
}

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
