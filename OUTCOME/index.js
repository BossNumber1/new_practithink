//                                   --- DRAG AND DROP IMPLEMENTATION ---

// common commands

function allowDrop(e) {
    e.preventDefault();
}

// 1 QUESTION

function drag1(e) {
    localStorage.setItem("idTakenNumber", e.target.id);
    localStorage.setItem(
        "classGrandparent",
        e.target.parentElement.parentElement.className
    );
}

function drop1(e) {
    // получаем id взятого элемента и класс прародителя
    let idTakenNumber = localStorage.getItem("idTakenNumber");
    let classGrandparent = localStorage.getItem("classGrandparent");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idTakenNumber);
    let currentElem = document.getElementById(currentId);

    // меняем местами
    currentElem.src = "./pictures/1que/" + idTakenNumber + ".svg";
    currentElem.style.cursor = "grab";

    if (classGrandparent === "bottomRow") {
        orig.src = "./pictures/1que/emptyCircle.svg";
    } else {
        orig.src = "./pictures/1que/square.svg";
    }

    orig.style.cursor = "default";

    // меняем id местами
    currentElem.id = idTakenNumber;
    orig.id = currentId;
}

// 2 QUESTION

function drag2(e) {
    localStorage.setItem("idTakenDiv", e.target.id);
    localStorage.setItem(
        "classElementGrandparent",
        e.target.parentElement.parentElement.className
    );
}

function drop2(e) {
    // получаем id несомого элемента и класс прародителя
    let idTakenDiv = localStorage.getItem("idTakenDiv");
    let classElementGrandparent = localStorage.getItem(
        "classElementGrandparent"
    );

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // меняем поля местами
    let orig = document.getElementById(idTakenDiv);
    orig.id = currentId;

    if (classElementGrandparent === "collectionFilledFields") {
        orig.style.background = "#3679b5";
        orig.style.opacity = "0.5";
    } else {
        orig.classList.remove("filledField");
    }

    e.target.id = idTakenDiv;
    e.target.classList.add("filledField");
    e.target.textContent = orig.textContent;

    if (classElementGrandparent !== "collectionFilledFields") {
        e.target.style.opacity = "1";
    }

    // именно - после всех операций - удаляем содержимое изначального места
    orig.textContent = "";
}

// 3 QUESTION

function drag3(e) {
    localStorage.setItem("idOriginala", e.target.id);
}

function drop3(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOriginala");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/3que/" + nameObjectOrig + ".svg";
    orig.src = "./pictures/3que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;
}

// 4 QUESTION - without dnd

// 5 QUESTION

function drag5(e) {
    localStorage.setItem("idSign", e.target.id);
    localStorage.setItem(
        "classGrandparentElement",
        e.target.parentElement.className
    );
}

function drop5(e) {
    // получаем id взятого элемента и класс прародителя
    let idSign = localStorage.getItem("idSign");
    let classGrandparentElement = localStorage.getItem(
        "classGrandparentElement"
    );

    let currentClassGrandparent = e.target.parentElement.className;

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idSign);
    let currentElem = document.getElementById(currentId);

    // меняем поля местами
    currentElem.parentElement.className = classGrandparentElement;
    currentElem.id = idSign;
    currentElem.textContent = orig.textContent;
    currentElem.setAttribute("draggable", true);

    orig.textContent = "";
    orig.id = currentId;
    orig.parentElement.className = currentClassGrandparent;

    if (orig.parentElement.parentElement.className !== "inputCollection") {
        orig.style.background = "#c2e1e9";
    }
}

// 6 QUESTION

function drag6(e) {
    localStorage.setItem("appleIdStarted", e.target.id);
    localStorage.setItem("positionAppleInRow", e.target.dataset.position);
    localStorage.setItem("parentElementIdStart", e.target.parentElement.id);
}

function drop6() {
    // забираем данные из хранилища

    let parentElementIdStart = localStorage.getItem("parentElementIdStart");
    let figureId = localStorage.getItem("appleIdStarted");
    let positionAppleInRow = localStorage.getItem("positionAppleInRow");

    // начинаем ложить яблоко в корзину
    if (parentElementIdStart !== "appleInBasket" + positionAppleInRow) {
        let selectedFigure = document.getElementById(figureId); // получаем картинку для вставки

        let objectBeingCreated = document.createElement("div");
        objectBeingCreated.style.cursor = "grab";
        objectBeingCreated.id = "appleInBasket" + positionAppleInRow;

        document
            .getElementsByClassName("appleInBasket2row")[0]
            .appendChild(objectBeingCreated)
            .appendChild(selectedFigure);

        // создаём копию и ставим на место оригинала

        let copyBeingCreated = document.createElement("img");
        copyBeingCreated.src = "./pictures/6que/apple.svg";
        copyBeingCreated.id = figureId;
        copyBeingCreated.setAttribute("data-position", positionAppleInRow);
        copyBeingCreated.style.opacity = "0.5";
        copyBeingCreated.style.cursor = "default";

        let newPlaceSelectedApple =
            document.getElementsByClassName("appleInRow")[positionAppleInRow];
        newPlaceSelectedApple.appendChild(copyBeingCreated);
    }

    // делаем возврат на место

    if (parentElementIdStart === "appleInBasket" + positionAppleInRow) {
        // убираем яблоко из корзины
        document.getElementById(parentElementIdStart).remove();

        // возвращаем прозрачность положенному яблоку
        let returnedApple =
            document.getElementsByClassName("appleInRow")[positionAppleInRow];
        returnedApple.children[0].style.opacity = "1";
    }
}

// 7 QUESTION

function drag7(e) {
    localStorage.setItem("idTakenCandy", e.target.id);
    localStorage.setItem(
        "classElemGrandparent",
        e.target.parentElement.parentElement.className
    );
    localStorage.setItem("positionElem", e.target.dataset.position);
}

function drop7(e) {
    // получаем id несомого элемента и класс прародителя
    let idTakenElement = localStorage.getItem("idTakenCandy");
    let objectName = idTakenElement.slice(0, -1);
    let positionCandy = localStorage.getItem("positionElem");

    if (objectName === "cand") {
        objectName = "candy";
    }

    let classElemGrandparent = localStorage.getItem("classElemGrandparent");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idTakenElement);
    let currentElem = document.getElementById(currentId);

    // создаём новый объект
    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.src = "./pictures/7que/" + objectName + ".svg";
    objectBeingCreated.style.marginLeft = "10px";
    objectBeingCreated.style.marginTop = "10px";
    objectBeingCreated.id = objectName;
    objectBeingCreated.setAttribute("data-position", positionCandy);
    objectBeingCreated.alt = objectName;
    objectBeingCreated.style.cursor = "grab";

    // меняем поля местами

    orig.style.opacity = "0.5";
    orig.style.cursor = "default";

    currentElem.appendChild(objectBeingCreated);

    if (classElemGrandparent != "bob" || classElemGrandparent != "dave") {
        e.target.style.opacity = "1";
    }

    if (classElemGrandparent == "bob" || classElemGrandparent == "dave") {
        let toRemove = document.getElementById("candy");
        toRemove.remove();

        document.getElementById("candy").remove();
    }
}

// 8 QUESTION - without dnd

// 9 QUESTION

function drag9(e) {
    localStorage.setItem("idTakenCube", e.target.id);
    localStorage.setItem("nameCube", e.target.dataset.name);
}

function drop9(e) {
    // получаем id и имя несомого элемента
    let idTakenCube = localStorage.getItem("idTakenCube");
    let nameCube = localStorage.getItem("nameCube");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;
    let currentName = e.target.dataset.name;

    // меняем картинки местами
    let orig = document.getElementById(idTakenCube);
    orig.src = "./pictures/9que/" + currentName + ".svg";
    orig.id = currentId;
    orig.setAttribute("data-name", currentName);
    orig.parentElement.style.cursor = "default";

    e.target.src = "./pictures/9que/" + nameCube + ".svg";
    e.target.id = idTakenCube;
    e.target.setAttribute("data-name", nameCube);
    e.target.parentElement.style.cursor = "grab";
}

// 10, 11 QUESTION - without dnd

// 12 QUESTION

function drag12(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function drop12(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idFigure");

    // получаем класс предка предка
    let grandparentClass = e.target.parentElement.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // начинаем ложить фигуру в корзину

    let orig = document.getElementById(idFigure); // для начала получаем картинку для вставки

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = idFigure.slice(0, -1);
    objectBeingCreated.src =
        "./pictures/12que/" + idFigure.slice(0, -1) + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "5px";

    if (grandparentClass !== "topRow3" || grandparentClass !== "bottomRow3") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        orig.src = "./pictures/12que/square.svg";
        orig.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "topRow3" || grandparentClass === "bottomRow3") {
        e.target.src = "./pictures/12que/" + idFigure + ".svg";
        e.target.style.cursor = "grab";
        orig.remove();
    }
}

// 13 QUESTION

function drag13(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function drop13(e) {
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
    objectBeingCreated.src = "./pictures/13que/" + idFigure + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "3px";

    if (grandparentClass !== "objects") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        orig.src = "./pictures/13que/square.svg";
        orig.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "objects") {
        e.target.src = "./pictures/13que/" + orig.alt + ".svg";
        e.target.id = orig.alt;
        e.target.style.cursor = "grab";
        orig.remove();
    }
}

// 14 QUESTION

function drag14(e) {
    localStorage.setItem("idFigure14", e.target.id);
}

function drop14(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idFigure14");

    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (idFigure != "toyCar" && idFigure != "robot" && idFigure != "pyramid") {
        currentElement.src =
            "./pictures/14que/" + idFigure.slice(0, -1) + ".svg";
        currentElement.style.cursor = "grab";
        orig.src = "./pictures/14que/" + idFigure + ".svg";
        orig.style.cursor = "default";
    } else {
        currentElement.src = "./pictures/14que/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        orig.src = "./pictures/14que/" + currentId.slice(0, -1) + ".svg";
        orig.style.cursor = "default";
    }

    // поменять id для дальнейших переносок
    currentElement.id = idFigure;
    orig.id = currentId;
}

// 15 QUESTION - without dnd

// 16 QUESTION

function drag16(e) {
    localStorage.setItem("idFigure16", e.target.id);
}

function drop16(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idFigure16");

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
        objectBeingCreated.src = "./pictures/16que/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место предмета на квадрат
        orig.src = "./pictures/16que/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        currentElement.src = "./pictures/16que/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        currentElement.id = idFigure;

        orig.remove();
    }
}

// 17 QUESTION - without dnd

// 18 QUESTION

function drag18(e) {
    localStorage.setItem("idOriginal", e.target.id);
}

function drop18(e) {
    e = e || window.event;

    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idOriginal");

    // получаем позицию области для вставки
    let positionCircleArea = e.target.dataset.position;

    // получаем текущий id
    let currentId = e.target.id;
    let currentClass = e.target.className;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = currentId
        ? document.getElementById(currentId)
        : currentClass === "background-circle" && positionCircleArea === "2"
        ? document.getElementsByClassName("background-circle")[1]
        : document.getElementsByClassName("circle-container")[
              positionCircleArea
          ];

    // начинаем уборку
    if (
        currentClass === "circle-container" ||
        currentClass === "circle-container right-circle-container" ||
        currentClass === "background-circle"
    ) {
        // добавляем объект в корзину
        let tray = document.createElement("div");
        tray.style.height = "50px";
        tray.style.width = "50px";
        tray.style.position = "absolute";
        tray.style.marginTop = e.offsetY + "px";
        tray.style.marginLeft = e.offsetX + "px";

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/18que/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        if (currentClass !== "circle-container") {
            objectBeingCreated.style.transform = "rotate(180deg)";
        }

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место объекта на квадрат
        orig.src = "./pictures/18que/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        currentElement.src = "./pictures/18que/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        currentElement.id = idFigure;

        orig.remove();
    }
}

// 19 QUESTION

// ТУТ БУДЕТ КОД

// 20 QUESTION

function drag20(e) {
    localStorage.setItem("idOrig20", e.target.id);
}

function drop20(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrig20");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/20que/" + nameObjectOrig + ".svg";
    currentElement.style.opacity = "1";
    currentElement.style.cursor = "grab";

    if (
        orig.parentElement.parentElement.className === "topRow5" ||
        orig.parentElement.parentElement.className === "bottomRow5"
    ) {
        orig.style.opacity = "0.5";
    } else {
        orig.src = "./pictures/20que/" + nameObjectCurrent + ".svg";
    }

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;

    // меняем вид курсора
    orig.style.cursor = "default";
}

//                                      --- OTHER SCRIPTS ---

//                                   --- CHECK IMPLEMENTATION ---

// 1 QUESTION

let correctOrder = [23, 24, 25, 26, 27, 28];
let resultat = [];

document.getElementById("submit").onclick = function () {
    let topRow = document.getElementsByClassName("topRow");
    let childrenTopRow = topRow[0].children;

    for (let i = 0; i < childrenTopRow.length; i++) {
        if (childrenTopRow[i].children[0].id != correctOrder[i]) {
            resultat.push("нет");
        }
    }

    if (resultat.length === 0) {
        alert("well done, the right choice");
    } else {
        alert("wrong, try again");
    }
};
