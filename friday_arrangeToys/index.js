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
    if (idFigure != "car" && idFigure != "robot" && idFigure != "pyramid") {
        currentElement.src = "./pictures/" + idFigure.slice(0, -1) + ".svg";
        orig.src = "./pictures/" + idFigure + ".svg";
    } else {
        currentElement.src = "./pictures/" + idFigure + ".svg";
        orig.src = "./pictures/" + currentId.slice(0, -1) + ".svg";
    }

    currentElement.id = idFigure;
    orig.id = currentId;
}
