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

    // получаем класс предка
    let grandparentClass = e.target.parentElement.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // начинаем ложить объект в корзину
    // получаем картинку для вставки
    let orig = document.getElementById(idFigure);

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = idFigure + "temp";
    objectBeingCreated.alt = idFigure;
    objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "3px";

    if (grandparentClass !== "objects") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        orig.src = "./pictures/square.svg";
        orig.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "objects") {
        e.target.src = "./pictures/" + orig.alt + ".svg";
        e.target.id = orig.alt;
        e.target.style.cursor = "grab";
        orig.remove();
    }
}

// check implementation

let result = {
    basketCircle: 0,
    basketSquare: 0,
    basketTriangle: 0,
    basketRectangle: 0,
};

document.getElementById("submit").onclick = function () {
    let basketCircle = document.getElementById("basketCircle");
    let basketSquare = document.getElementById("basketSquare");
    let basketTriangle = document.getElementById("basketTriangle");
    let basketRectangle = document.getElementById("basketRectangle");

    if (basketCircle.children.length === 3) {
        result.basketCircle = "right";
    } else {
        result.basketCircle = "wrong";
    }

    if (basketSquare.children.length === 2) {
        result.basketSquare = "right";
    } else {
        result.basketSquare = "wrong";
    }

    if (basketTriangle.children.length === 2) {
        result.basketTriangle = "right";
    } else {
        result.basketTriangle = "wrong";
    }

    if (basketRectangle.children.length === 2) {
        result.basketRectangle = "right";
    } else {
        result.basketRectangle = "wrong";
    }

    alert(
        "your answers: for circle - " +
            result.basketCircle +
            ", for square - " +
            result.basketSquare +
            ", for triangle - " +
            result.basketTriangle +
            ", for rectangle - " +
            result.basketRectangle
    );
};
