// drag and drop implementation

// common commands

function allowDrop(event) {
    event.preventDefault();
}

// 1 QUESTION

function dragStart1(e) {
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

function dragStart2(event) {
    localStorage.setItem("idTakenDiv", event.target.id);
    localStorage.setItem(
        "classElementGrandparent",
        event.target.parentElement.parentElement.className
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

function dragStart3(event) {
    localStorage.setItem("idOriginala", event.target.id);
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

// 4 QUESTION

// without dnd

// 5 QUESTION

function dragStart5(e) {
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

function dragStart6(event) {
    localStorage.setItem("appleIdStarted", event.target.id);
    localStorage.setItem("positionAppleInRow", event.target.dataset.position);
    localStorage.setItem("parentElementIdStart", event.target.parentElement.id);
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

function dragStart7(event) {
    localStorage.setItem("idTakenCandy", event.target.id);
    localStorage.setItem(
        "classElemGrandparent",
        event.target.parentElement.parentElement.className
    );
    localStorage.setItem("positionElem", event.target.dataset.position);
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

// 8 QUESTION

// without dnd

// 9 QUESTION

function dragStart9(event) {
    localStorage.setItem("idTakenCube", event.target.id);
    localStorage.setItem("nameCube", event.target.dataset.name);
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
