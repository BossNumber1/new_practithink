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

    // получаем класс предка предка
    let parentClass = e.target.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // начинаем ложить фигуру в корзину

    let orig = document.getElementById(idFigure); // для начала получаем картинку для вставки

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = idFigure;
    objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "3px";

    if (parentClass !== "objects") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);
    }

    // создаём копию и ставим на место оригинала

    orig.style.opacity = "0.5";
    orig.style.cursor = "default";

    // делаем возврат на место

    if (parentClass === "objects") {
        e.target.style.opacity = "1";
        orig.remove();
    }
}

// check implementation

document.getElementById("submit").onclick = function () {};
