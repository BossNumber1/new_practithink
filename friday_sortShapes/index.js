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
debugger
    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (currentId === "placeFlat") {
        // добавляем предмет в корзину

        let tray = document.createElement("div");
        tray.style.height = "60px";
        tray.style.width = "60px";
        
        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        currentElement
            .appendChild(tray)
            .appendChild(objectBeingCreated);

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
