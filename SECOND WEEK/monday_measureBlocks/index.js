// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idOrig", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrig");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/" + nameObjectOrig + ".svg";
    currentElement.style.opacity = "1";
    currentElement.style.cursor = "grab";

    if (
        orig.parentElement.parentElement.className === "topRow" ||
        orig.parentElement.parentElement.className === "bottomRow"
    ) {
        orig.style.opacity = "0.5";
    } else {
        orig.src = "./pictures/" + nameObjectCurrent + ".svg";
    }

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;

    // меняем вид курсора
    orig.style.cursor = "default";
}

// check implementation

// first part - check to input

let valuesInputs = { tasselLength: "", pencilLength: "" };

document.getElementById("tasselLength").onchange = function (e) {
    if (e.target.value == 8) {
        valuesInputs.tasselLength = "right";
    } else {
        valuesInputs.tasselLength = "wrong";
    }
};

document.getElementById("pencilLength").onchange = function (e) {
    if (e.target.value == 7) {
        valuesInputs.pencilLength = "right";
    } else {
        valuesInputs.pencilLength = "wrong";
    }
};

// second part - check the rest

let selectBtn;

document.getElementById("selectBrush").onclick = function () {
    document.getElementById("selectBrush").style.backgroundColor = "#369CB7";
    document.getElementById("selectBrush").style.color = "white";

    selectBtn = "right";

    document.getElementById("selectPencil").style.backgroundColor = "white";
    document.getElementById("selectPencil").style.color = "black";
};

document.getElementById("selectPencil").onclick = function () {
    document.getElementById("selectPencil").style.backgroundColor = "#369CB7";
    document.getElementById("selectPencil").style.color = "white";

    selectBtn = "wrong";

    document.getElementById("selectBrush").style.backgroundColor = "white";
    document.getElementById("selectBrush").style.color = "black";
};

document.getElementById("submit").onclick = function () {
    alert(
        " 1. The value entered in the left field - " +
            valuesInputs.tasselLength +
            " and in the right field - " +
            valuesInputs.pencilLength
    );
    alert("2. You made the " + selectBtn + " choice");
};
