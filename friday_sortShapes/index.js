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
    // debugger;
    // получаем текущий id
    let currentId;

    if (e.target.id) {
        currentId = e.target.id;
    } else {
        currentId = e.target.className;
    }

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    // if (idFigure != "car" && idFigure != "robot" && idFigure != "pyramid") {
    if (currentId === "basketFlat") {
        // добавляем предмет в корзину
        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        document
            .getElementById("placeFlat")
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        // заменяем место предмета на квадрат
        orig.src = "./pictures/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        // alert("idFigure =" + idFigure);
        // alert("currentId =" + currentId);
        currentElement.src = "./pictures/" + idFigure + ".svg";
        //     currentElement.style.cursor = "grab";
        //     orig.src = "./pictures/" + currentId.slice(0, -1) + ".svg";
        //     orig.style.cursor = "default";
    }
}
