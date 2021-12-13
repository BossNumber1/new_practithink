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
    // if (idFigure != "car" && idFigure != "robot" && idFigure != "pyramid") {
    currentElement.src = "./pictures/" + idFigure.slice(0, -1) + ".svg";
    currentElement.style.cursor = "grab";
    orig.src = "./pictures/" + idFigure + ".svg";
    orig.style.cursor = "default";
    // } else {
    //     currentElement.src = "./pictures/" + idFigure + ".svg";
    //     currentElement.style.cursor = "grab";
    //     orig.src = "./pictures/" + currentId.slice(0, -1) + ".svg";
    //     orig.style.cursor = "default";
    // }

    // поменять id для дальнейших переносок
    currentElement.id = idFigure;
    orig.id = currentId;
}
