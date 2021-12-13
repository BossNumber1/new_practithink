// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idOriginal", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
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
        tray.style.marginTop = e.clientY - 270 + "px";

        if (currentId === "flowersPlace") {
            tray.style.marginLeft = e.clientX - 430 + "px";
        } else {
            tray.style.marginLeft = e.clientX - 600 + "px";
        }

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
