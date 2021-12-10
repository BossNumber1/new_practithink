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
    let grandparentClass = e.target.parentElement.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // начинаем ложить фигуру в корзину

    let orig = document.getElementById(idFigure); // получаем картинку для вставки

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = idFigure.slice(0, -1);
    objectBeingCreated.src = "./pictures/" + idFigure.slice(0, -1) + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "5px";

    if (grandparentClass !== "topRow" || grandparentClass !== "bottomRow") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);
    }

    // создаём копию и ставим на место оригинала

    orig.style.opacity = "0.5";
    orig.style.cursor = "default";

    // делаем возврат на место

    if (grandparentClass === "topRow" || grandparentClass === "bottomRow") {
        e.target.style.opacity = "1";
        orig.remove();
    }
}
