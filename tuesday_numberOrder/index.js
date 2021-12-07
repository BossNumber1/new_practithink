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
