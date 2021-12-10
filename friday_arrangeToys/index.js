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

    // // получаем класс предка
    // let grandparentClass = e.target.parentElement.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // начинаем ложить объект в корзину
    // // получаем картинку для вставки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    if (idFigure != "car" && idFigure != "robot" && idFigure != "pyramid") {
        currentElement.src = "./pictures/" + idFigure.slice(0, -1) + ".svg";
        orig.src = "./pictures/" + idFigure + ".svg";
    } else {
        currentElement.src = "./pictures/" + idFigure + ".svg";
        orig.src = "./pictures/" + currentId.slice(0, -1) + ".svg";
    }

    currentElement.id = idFigure;
    orig.id = currentId;

    // let objectBeingCreated = document.createElement("img");
    // objectBeingCreated.id = idFigure + "temp";
    // objectBeingCreated.alt = idFigure;
    // objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
    // objectBeingCreated.style.cursor = "grab";
    // objectBeingCreated.style.marginTop = "5px";
    // objectBeingCreated.style.marginLeft = "3px";

    // if (grandparentClass !== "objects") {
    //     document
    //         .getElementById(currentId)
    //         .appendChild(document.createElement("div"))
    //         .appendChild(objectBeingCreated);

    //     orig.src = "./pictures/square.svg";
    //     orig.style.cursor = "default";
    // }

    // // делаем возврат на место

    // if (grandparentClass === "objects") {
    //     e.target.src = "./pictures/" + orig.alt + ".svg";
    //     e.target.id = orig.alt;
    //     e.target.style.cursor = "grab";
    //     orig.remove();
    // }
}
