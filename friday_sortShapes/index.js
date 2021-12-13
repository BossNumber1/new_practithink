// drag and drop implementation

function dragStart(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idFigure");

    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (currentId === "placeFlat" || currentId === "placeSolid") {
        // добавляем предмет в корзину

        let tray = document.createElement("div");
        tray.style.height = "60px";
        tray.style.width = "60px";

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место предмета на квадрат
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

let result = { basketFlat: "", basketSolid: "" };

document.getElementById("submit").onclick = function () {
    let basketFlat = document.getElementById("placeFlat");
    let basketSolid = document.getElementById("placeSolid");

    if (basketFlat.children.length === 5) {
        result.basketFlat = "right";
    } else {
        result.basketFlat = "wrong";
    }

    if (basketSolid.children.length === 5) {
        result.basketSolid = "right";
    } else {
        result.basketSolid = "wrong";
    }

    alert(
        "you put in the basket for flat figures - " +
            result.basketFlat +
            " and in the basket for solid figures - " +
            result.basketSolid
    );
};
