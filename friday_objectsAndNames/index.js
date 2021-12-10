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
    objectBeingCreated.id = idFigure + "circle";
    objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "3px";

    if (grandparentClass !== "objects") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);
        orig.style.opacity = "0.5";
        orig.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "objects") {
        e.target.style.opacity = "1";
        orig.remove();
    }
}

// check implementation

document.getElementById("submit").onclick = function () {};
