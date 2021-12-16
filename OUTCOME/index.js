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
