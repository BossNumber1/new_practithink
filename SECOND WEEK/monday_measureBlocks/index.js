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
    debugger;
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

document.getElementById("selectBrush").onclick = function () {
    document.getElementById("selectBrush").style.backgroundColor = "#369CB7";
    document.getElementById("selectBrush").style.color = "white";

    document.getElementById("selectPencil").style.backgroundColor = "white";
    document.getElementById("selectPencil").style.color = "black";
};

document.getElementById("selectPencil").onclick = function () {
    document.getElementById("selectPencil").style.backgroundColor = "#369CB7";
    document.getElementById("selectPencil").style.color = "white";

    document.getElementById("selectBrush").style.backgroundColor = "white";
    document.getElementById("selectBrush").style.color = "black";
};
