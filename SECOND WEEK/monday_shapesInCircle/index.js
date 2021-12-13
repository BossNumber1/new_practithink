// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idOriginal", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop2(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOriginal");

    // получаем имя и id, на который кладём элемент
    let currentId;

    if (e.target.id !== "flowersPlace" && e.target.id !== "redColorPlace") {
        currentId = e.target.id;
    } else {
        currentId = "emptyPlace";
    }

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/" + idOrig + ".svg";

    // if (
    //     orig.parentElement.parentElement.className === "topRow" ||
    //     orig.parentElement.parentElement.className === "bottomRow"
    // ) {
    //     orig.style.opacity = "0.5";
    // } else {
    orig.src = "./pictures/" + currentId + ".svg";
    // }

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;
}

function drop(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idOriginal");

    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (currentId === "flowersPlace" || currentId === "redColorPlace") {
        // добавляем объект в корзину

        let tray = document.createElement("div");
        tray.style.height = "50px";
        tray.style.width = "50px";
        tray.style.position = "absolute";
        tray.style.paddingTop = e.clientY - 270 + "px";
        tray.style.paddingLeft = e.clientX - 430 + "px";

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место объекта на квадрат
        orig.src = "./pictures/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        currentElement.src = "./pictures/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        currentElement.id = idFigure;

        orig.remove();
    }
}

// check implementation

// document.getElementById("flowersPlace").onclick = function () {
//     alert("clicked to flowers area");
// };

// document.getElementById("redColorPlace").onclick = function () {
//     alert("clicked to red color area");
// };
