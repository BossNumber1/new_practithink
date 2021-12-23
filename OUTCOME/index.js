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

// 12 QUESTION

function drag12(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function drop12(e) {
    // забираем данные из хранилища
    let figureId = localStorage.getItem("idFigure");
    let figureName = figureId.slice(0, -1);
    let lastChar = figureId.charAt(figureId.length - 1);

    // получаем класс предка предка
    let grandparentClass = e.target.parentElement.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // получаем элементы
    let originalElement = document.getElementById(figureId);
    let currentElement = document.getElementById(currentId);

    // начинаем ложить фигуру в корзину

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = figureId;
    objectBeingCreated.src = "./pictures/12que/" + figureName + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "5px";

    if (grandparentClass !== "topRow3" || grandparentClass !== "bottomRow3") {
        currentElement
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        originalElement.src = "./pictures/12que/square.svg";
        originalElement.id = "square" + lastChar;
        originalElement.style.transform = "none";
        originalElement.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "topRow3" || grandparentClass === "bottomRow3") {
        currentElement.src = "./pictures/12que/" + figureName + ".svg";
        currentElement.id = figureName + lastChar;
        currentElement.style.cursor = "grab";

        originalElement.remove();
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

// -------------------------------------------------------------common function---------------------------------------------------

function succerror(elem, checkElement) {
    if (checkElement) {
        elem.style.backgroundColor = "#ED7777";
        elem.style.color = "white";
        elem.style.border = "1px solid #ED7777";
    } else {
        elem.style.backgroundColor = "#48B736";
        elem.style.color = "white";
        elem.style.border = "1px solid #48B736";
    }
}

// добавляем иконку статуса после номера вопроса

function addImage(status, ancestor, appClass, position) {
    let object = document.createElement("img");
    object.style.marginLeft = "10px";

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName("lineUnderHeading")[
            position - 1
        ].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName("lineUnderHeading")[
            position - 1
        ].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");

    if (elem.parentElement.className === "row") {
        objDiv.classList.add("miniIcon");
    }

    // получаем ширину элемента, чтобы выровнять по горизонтали
    let widthAdjacentElement = elem.getBoundingClientRect().width;

    // получаем отступы элемента, для того же
    let leftIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-left");

    let rightIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-right");

    // устанавливаем её нашему блоку
    objDiv.style.width = widthAdjacentElement;
    objDiv.style.marginLeft = leftIndent;
    objDiv.style.marginRight = rightIndent;

    if (elem.parentElement.parentElement.className === "btns3") {
        objDiv.style.paddingBottom = "0px";
    } else {
        objDiv.style.paddingBottom = "10px";
    }

    objDiv.style.display = "flex";
    objDiv.style.justifyContent = "center";
    objDiv.style.alignItems = "center";

    let obj = document.createElement("img");

    if (status === "success") {
        obj.src = "./pictures/successMiniIcon.svg";
    } else {
        obj.src = "./pictures/failureMiniIcon.svg";
    }

    objDiv.appendChild(obj);

    if (
        elem.parentElement.className === "buttonContent" ||
        elem.parentElement.parentElement.className === "btns" ||
        elem.parentElement.parentElement.className === "btns3"
    ) {
        objDiv.style.backgroundColor = "white";
        objDiv.style.border = "none";
    } else {
        objDiv.style.marginTop = "-23px";
    }

    if (elem.parentElement.className === "buttonContent") {
        objDiv.style.marginTop = "-30px";
    } else if (elem.parentElement.parentElement.className === "btns") {
        objDiv.style.marginTop = "-45px";
    } else if (elem.parentElement.parentElement.className === "btns3") {
        objDiv.style.marginTop = "-45px";
        document.getElementsByClassName("question2")[0].style.zIndex = "2";
    }

    // устаанавливаем её в нужное место
    let elementParent = elem.parentElement;
    elementParent.insertBefore(objDiv, elem);
}

// делаем появление мини-иконок над областью проверки

function createMiniIcon(property, element) {
    if (property === "right") {
        addMiniIcon(element, "success");
    } else {
        addMiniIcon(element, "failure");
    }
}
// -----------------------------------------------------------------------------------------------------------------------------

// 1 QUESTION

function question1() {
    let correctOrder = [23, 24, 25, 26, 27, 28],
        wasThereAmismatch = "false",
        whetherSomethingWasChosen = "false";

    let topRow = document.getElementsByClassName("topRow");
    let children1and2 = topRow[0].children;

    for (let i = 0; i < children1and2.length; i++) {
        let childrenId = children1and2[i].children[0].id;

        if (childrenId > 20 && childrenId == correctOrder[i]) {
            children1and2[i].className = "numberSuccess";
            whetherSomethingWasChosen = "true";
        } else if (childrenId > 20 && childrenId != correctOrder[i]) {
            children1and2[i].className = "numberError";
            wasThereAmismatch = "true";
        }
    }

    if (whetherSomethingWasChosen === "true") {
        if (wasThereAmismatch === "true") {
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        }
    }
}

// 2 QUESTION

function question2() {
    let correctOrder = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        wasThereAmismatch = "false",
        whetherSomethingWasChosen = "false",
        arrayFilledFields = [];

    let firstRow = document.getElementsByClassName("inputsCollection");
    let children1and2 = firstRow[0].children;

    // проверка на заполненность вопроса
    for (let i = 0; i < children1and2.length; i++) {
        let childrenInnerText = children1and2[i].innerText;
        childrenInnerText && arrayFilledFields.push(childrenInnerText);
    }

    // изменение класса и управление показом статуса
    for (let i = 0; i < children1and2.length; i++) {
        if (arrayFilledFields.length > 2) {
            let childrenInnerText = children1and2[i].innerText;

            if (
                childrenInnerText != "" &&
                childrenInnerText == correctOrder[i]
            ) {
                children1and2[i].className = "inputContentSuccess";
                whetherSomethingWasChosen = "true";
            } else if (
                childrenInnerText != "" &&
                childrenInnerText != correctOrder[i]
            ) {
                children1and2[i].className = "inputContentError";
                wasThereAmismatch = "true";
            }
        }
    }

    if (whetherSomethingWasChosen === "true") {
        if (wasThereAmismatch === "true") {
            addImage(
                "failure",
                document.getElementsByClassName("questionclass2"),
                "app2",
                2
            );
        } else {
            addImage(
                "success",
                document.getElementsByClassName("questionclass2"),
                "app2",
                2
            );
        }
    }
}

// 3 QUESTION

function question3() {
    let idChild0 = document
        .getElementById("place0")
        .children[1].children[0].id.trim();
    let idChild1 = document
        .getElementById("place1")
        .children[1].children[0].id.trim();
    let idChild2 = document
        .getElementById("place2")
        .children[1].children[0].id.trim();

    if (idChild0.slice(0, -1) === "stars") {
        document.getElementById("place0").children[1].className =
            "figure3success";
    } else if (
        idChild0.slice(0, -1) === "rectangles" ||
        idChild0.slice(0, -1) === "pentagons"
    ) {
        document.getElementById("place0").children[1].className =
            "figure3error";
    }

    if (idChild1.slice(0, -1) === "rectangles") {
        document.getElementById("place1").children[1].className =
            "figure3success";
    } else if (
        idChild1.slice(0, -1) === "stars" ||
        idChild2.slice(0, -1) === "pentagons"
    ) {
        document.getElementById("place1").children[1].className =
            "figure3error";
    }

    if (idChild2.slice(0, -1) === "pentagons") {
        document.getElementById("place2").children[1].className =
            "figure3success";
    } else if (
        idChild2.slice(0, -1) === "rectangles" ||
        idChild2.slice(0, -1) === "stars"
    ) {
        document.getElementById("place2").children[1].className =
            "figure3error";
    }

    if (
        idChild0.slice(0, -1) !== "freePlace" &&
        idChild1.slice(0, -1) !== "freePlace" &&
        idChild2.slice(0, -1) !== "freePlace"
    ) {
        if (
            idChild0.slice(0, -1) !== "stars" &&
            idChild1.slice(0, -1) !== "rectangles" &&
            idChild2.slice(0, -1) !== "pentagons"
        ) {
            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        }
    }
}

// 4 QUESTION

let countCookies;

document.querySelector("input").onchange = function (e) {
    countCookies = e.target.value;
};

function question4() {
    if (countCookies) {
        succerror(document.querySelector("input"), countCookies != 10);

        if (countCookies != 10) {
            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
            addMiniIcon(document.querySelector("input"), "failure");
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
            addMiniIcon(document.querySelector("input"), "success");
        }
    }
}

// 5 QUESTION

let selected = { amountIceCream: "", amountFlowers: "" };

document.getElementById("amountIceCream").onchange = function (e) {
    if (e.target.value == 6) {
        selected.amountIceCream = "right";
    } else {
        selected.amountIceCream = "wrong";
    }
};

document.getElementById("amountFlowers").onchange = function (e) {
    if (e.target.value == 7) {
        selected.amountFlowers = "right";
    } else {
        selected.amountFlowers = "wrong";
    }
};

function question5() {
    if (selected.amountFlowers != "" && selected.amountIceCream != "") {
        let selectedSign =
            document.getElementsByClassName("inputCollection")[0].children[1]
                .textContent;

        succerror(
            document.getElementById("amountIceCream"),
            selected.amountIceCream === "wrong"
        );

        succerror(
            document.getElementsByClassName("inputCollection")[0].children[1]
                .children[0],
            selectedSign.replace(/\s/g, "") != "<"
        );

        succerror(
            document.getElementById("amountFlowers"),
            selected.amountFlowers === "wrong"
        );

        // расставляем мини-иконки

        if (selectedSign.replace(/\s/g, "") == "<") {
            addMiniIcon(
                document.getElementsByClassName("inputCollection")[0]
                    .children[1].children[0],
                "success"
            );
        } else {
            addMiniIcon(
                document.getElementsByClassName("inputCollection")[0]
                    .children[1].children[0],
                "failure"
            );
        }

        createMiniIcon(
            selected.amountFlowers,
            document.getElementById("amountFlowers")
        );
        createMiniIcon(
            selected.amountIceCream,
            document.getElementById("amountIceCream")
        );

        // выносим общий статус к номеру вопроса

        if (
            selected.amountFlowers === "right" &&
            selectedSign.replace(/\s/g, "") == "<" &&
            selected.amountIceCream === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        }
    }
}

// 6 QUESTION

function question6() {
    let basket = document.getElementsByClassName("appleInBasket2row")[0];

    if (basket.children.length > 5) {
        for (let i = 5; i < basket.children.length; i++) {
            basket.children[i].style.border = "1px solid #FFB47D";
            basket.children[i].style.borderRadius = "5px";
        }
    }

    if (basket.children.length > 1) {
        if (basket.children.length === 5) {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        }
    }
}

// 7 QUESTION

function question7() {
    let basketBob = document.getElementById("placeDropCandyBob");
    let basketDave = document.getElementById("placeDropCandyDave");

    if (basketBob.children.length > 4) {
        for (let i = 4; i < basketBob.children.length; i++) {
            basketBob.children[i].style.border = "1px solid #FFB47D";
            basketBob.children[i].style.borderRadius = "5px";
        }
    }

    if (basketDave.children.length > 3) {
        for (let i = 3; i < basketDave.children.length; i++) {
            basketDave.children[i].style.border = "1px solid #FFB47D";
            basketDave.children[i].style.borderRadius = "5px";
        }
    }

    if (basketBob.children.length > 0 && basketDave.children.length > 0) {
        if (
            basketBob.children.length === 4 &&
            basketDave.children.length === 3
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        }
    }
}

// 8 QUESTION

let howManyCounted = {
    jellyfish: "",
    seaHorse: "",
    result: "",
};

document.getElementById("numberJellyfish").onchange = function (e) {
    if (e.target.value == 5) {
        howManyCounted.jellyfish = "right";
    } else {
        howManyCounted.jellyfish = "wrong";
    }
};

document.getElementById("numberSeahorses").onchange = function (e) {
    if (e.target.value == 3) {
        howManyCounted.seaHorse = "right";
    } else {
        howManyCounted.seaHorse = "wrong";
    }
};

document.getElementById("result").onchange = function (e) {
    if (e.target.value == 8) {
        howManyCounted.result = "right";
    } else {
        howManyCounted.result = "wrong";
    }
};

function question8() {
    if (
        howManyCounted.jellyfish != "" &&
        howManyCounted.seaHorse != "" &&
        howManyCounted.result != ""
    ) {
        succerror(
            document.getElementById("numberJellyfish"),
            howManyCounted.jellyfish === "wrong"
        );

        succerror(
            document.getElementById("numberSeahorses"),
            howManyCounted.seaHorse === "wrong"
        );

        succerror(
            document.getElementById("result"),
            howManyCounted.result === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            howManyCounted.jellyfish,
            document.getElementById("numberJellyfish")
        );
        createMiniIcon(
            howManyCounted.seaHorse,
            document.getElementById("numberSeahorses")
        );
        createMiniIcon(
            howManyCounted.result,
            document.getElementById("result")
        );

        // выносим общий статус к номеру вопроса

        if (
            howManyCounted.jellyfish === "right" &&
            howManyCounted.seaHorse === "right" &&
            howManyCounted.result === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        }
    }
}

// 9 QUESTION

let selectedButton = "",
    selectedNameButton;

document.getElementById("thirteen").onclick = function () {
    let clickedElement = document.getElementById("thirteen");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "thirteen";

    document.getElementById("fourteen").style.backgroundColor = "white";
    document.getElementById("fourteen").style.color = "black";
    document.getElementById("fourteen").style.border = "1px solid black";

    document.getElementById("eighteen").style.backgroundColor = "white";
    document.getElementById("eighteen").style.color = "black";
    document.getElementById("eighteen").style.border = "1px solid black";
};

document.getElementById("fourteen").onclick = function () {
    let clickedElement = document.getElementById("fourteen");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "right";
    selectedNameButton = "fourteen";

    document.getElementById("thirteen").style.backgroundColor = "white";
    document.getElementById("thirteen").style.color = "black";
    document.getElementById("thirteen").style.border = "1px solid black";

    document.getElementById("eighteen").style.backgroundColor = "white";
    document.getElementById("eighteen").style.color = "black";
    document.getElementById("eighteen").style.border = "1px solid black";
};

document.getElementById("eighteen").onclick = function () {
    let clickedElement = document.getElementById("eighteen");

    clickedElement.style.backgroundColor = "#bbedf4";
    clickedElement.style.color = "#0e80a4";
    clickedElement.style.border = "1px solid #BBEDF4";

    selectedButton = "wrong";
    selectedNameButton = "eighteen";

    document.getElementById("thirteen").style.backgroundColor = "white";
    document.getElementById("thirteen").style.color = "black";
    document.getElementById("thirteen").style.border = "1px solid black";

    document.getElementById("fourteen").style.backgroundColor = "white";
    document.getElementById("fourteen").style.color = "black";
    document.getElementById("fourteen").style.border = "1px solid black";
};

function question9() {
    if (selectedButton != "") {
        succerror(
            document.getElementById(selectedNameButton),
            selectedButton === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(
            selectedButton,
            document.getElementById(selectedNameButton)
        );

        // выносим общий статус к номеру вопроса

        if (selectedButton === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        }
    }
}

// 10 QUESTION

let selectBtn = "right",
    btnSelectedName;

document.getElementById("balloon").onclick = function () {
    document.getElementById("balloon").classList.add("selectedPicture");

    selectBtn = "wrong";
    btnSelectedName = "balloon";

    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("book").onclick = function () {
    document.getElementById("book").classList.add("selectedPicture");

    selectBtn = "wrong";
    btnSelectedName = "book";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("truck").onclick = function () {
    document.getElementById("truck").classList.add("selectedPicture");

    selectBtn = "wrong";
    btnSelectedName = "truck";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("feather").onclick = function () {
    document.getElementById("feather").classList.add("selectedPicture");

    selectBtn = "wrong";
    btnSelectedName = "feather";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("car").onclick = function () {
    document.getElementById("car").classList.add("selectedPicture");

    selectBtn = "right";
    btnSelectedName = "car";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
};

function question10() {
    if (btnSelectedName) {
        if (selectBtn === "right") {
            document.getElementById(btnSelectedName).className = "que10success";
        } else {
            document.getElementById(btnSelectedName).className = "que10error";
        }

        createMiniIcon(selectBtn, document.getElementById(btnSelectedName));

        if (selectBtn !== "right") {
            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        }
    }
}

// 11 QUESTION

let selectBtn2 = "",
    selectedName;

document.getElementById("btnSelectTom").onclick = function () {
    document.getElementById("btnSelectTom").style.backgroundColor = "#bbedf4";
    document.getElementById("btnSelectTom").style.color = "#0e80a4";
    document.getElementById("btnSelectTom").style.border = "1px solid #BBEDF4";

    selectBtn2 = "wrong";
    selectedName = "btnSelectTom";

    document.getElementById("btnSelectMike").style.backgroundColor = "white";
    document.getElementById("btnSelectMike").style.color = "black";
    document.getElementById("btnSelectMike").style.border = "1px solid black";

    document.getElementById("btnSelectJack").style.backgroundColor = "white";
    document.getElementById("btnSelectJack").style.color = "black";
    document.getElementById("btnSelectJack").style.border = "1px solid black";
};

document.getElementById("btnSelectMike").onclick = function () {
    document.getElementById("btnSelectMike").style.backgroundColor = "#bbedf4";
    document.getElementById("btnSelectMike").style.color = "#0e80a4";
    document.getElementById("btnSelectMike").style.border = "1px solid #BBEDF4";

    selectBtn2 = "right";
    selectedName = "btnSelectMike";

    document.getElementById("btnSelectTom").style.backgroundColor = "white";
    document.getElementById("btnSelectTom").style.color = "black";
    document.getElementById("btnSelectTom").style.border = "1px solid black";

    document.getElementById("btnSelectJack").style.backgroundColor = "white";
    document.getElementById("btnSelectJack").style.color = "black";
    document.getElementById("btnSelectJack").style.border = "1px solid black";
};

document.getElementById("btnSelectJack").onclick = function () {
    document.getElementById("btnSelectJack").style.backgroundColor = "#bbedf4";
    document.getElementById("btnSelectJack").style.color = "#0e80a4";
    document.getElementById("btnSelectJack").style.border = "1px solid #BBEDF4";

    selectBtn2 = "wrong";
    selectedName = "btnSelectJack";

    document.getElementById("btnSelectTom").style.backgroundColor = "white";
    document.getElementById("btnSelectTom").style.color = "black";
    document.getElementById("btnSelectTom").style.border = "1px solid black";

    document.getElementById("btnSelectMike").style.backgroundColor = "white";
    document.getElementById("btnSelectMike").style.color = "black";
    document.getElementById("btnSelectMike").style.border = "1px solid black";
};

function question11() {
    if (selectBtn2 != "") {
        succerror(
            document.getElementById(selectedName),
            selectBtn2 === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(selectBtn2, document.getElementById(selectedName));

        // выносим общий статус к номеру вопроса

        if (selectBtn2 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        }
    }
}

// 12 QUESTION

let answers = { hearts: "", stars: "", rhombus: "" };

document.getElementById("numberHearts").onchange = function (e) {
    if (e.target.value == 6) {
        answers.hearts = "right";
    } else {
        answers.hearts = "wrong";
    }
};

document.getElementById("numberStars").onchange = function (e) {
    if (e.target.value == 4) {
        answers.stars = "right";
    } else {
        answers.stars = "wrong";
    }
};

document.getElementById("numberRhombus").onchange = function (e) {
    if (e.target.value == 4) {
        answers.rhombus = "right";
    } else {
        answers.rhombus = "wrong";
    }
};

function question12() {
    // таможня Сердечек
    let contentHeartsBasket =
        document.getElementsByClassName("heart")[0].children[1];

    let chilrensHeart = contentHeartsBasket.children;

    for (let i = 0; i < chilrensHeart.length; i++) {
        let selectedChildId = chilrensHeart[i].children[0].id;

        if (
            selectedChildId.slice(0, -1) !== "heart" &&
            document.getElementsByClassName("heart")[0].children[0]
                .className === "headerHeart"
        ) {
            document.getElementById(selectedChildId).style.border =
                "1px solid #FFB47D";
            document.getElementById(selectedChildId).style.borderRadius = "5px";
        }
    }

    // таможня Звёзд
    let contentStarsBasket =
        document.getElementsByClassName("star")[0].children[1];
    let chilrensStar = contentStarsBasket.children;

    for (let i = 0; i < chilrensStar.length; i++) {
        let selectedChildId = chilrensStar[i].children[0].id;

        if (
            selectedChildId.slice(0, -1) !== "star" &&
            document.getElementsByClassName("star")[0].children[0].className ===
                "headerStar"
        ) {
            document.getElementById(selectedChildId).style.border =
                "1px solid #FFB47D";
            document.getElementById(selectedChildId).style.borderRadius = "5px";
        }
    }

    // таможня Ромбов
    let contentRhombusBasket =
        document.getElementsByClassName("rhombus")[0].children[1];
    let chilrensRhombus = contentRhombusBasket.children;

    for (let i = 0; i < chilrensRhombus.length; i++) {
        let selectedChildId = chilrensRhombus[i].children[0].id;

        if (
            selectedChildId.slice(0, -1) !== "rhombus" &&
            document.getElementsByClassName("rhombus")[0].children[0]
                .className === "headerRhombus"
        ) {
            document.getElementById(selectedChildId).style.border =
                "1px solid #FFB47D";
            document.getElementById(selectedChildId).style.borderRadius = "5px";
        }
    }

    // прежнее
    if (answers.hearts != "" && answers.stars != "" && answers.rhombus != "") {
        succerror(
            document.getElementById("numberHearts"),
            answers.hearts === "wrong"
        );

        succerror(
            document.getElementById("numberStars"),
            answers.stars === "wrong"
        );

        succerror(
            document.getElementById("numberRhombus"),
            answers.rhombus === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(answers.hearts, document.getElementById("numberHearts"));
        createMiniIcon(answers.stars, document.getElementById("numberStars"));
        createMiniIcon(
            answers.rhombus,
            document.getElementById("numberRhombus")
        );

        // выносим общий статус к номеру вопроса

        if (
            answers.hearts === "right" &&
            answers.stars === "right" &&
            answers.rhombus === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        }
    }
}

// 13 QUESTION

let result = {
    basketCircle: 0,
    basketSquare: 0,
    basketTriangle: 0,
    basketRectangle: 0,
};

function common(basketCircle, rightCombination) {
    let resultat = [];
    let childs = basketCircle.children;

    for (let i = 0; i < childs.length; i++) {
        let idChild = childs[i].children[0].id;

        if (idChild.slice(0, -4) != rightCombination[i]) {
            resultat.push("нет");
        }
    }

    return resultat;
}

function question13() {
    let basketCircle = document.getElementById("basketCircle");
    let basketSquare = document.getElementById("basketSquare");
    let basketTriangle = document.getElementById("basketTriangle");
    let basketRectangle = document.getElementById("basketRectangle");

    if (basketCircle.children.length === 3) {
        let rightCombination = ["clock", "cookie", "pizza"];
        let resultatCircle = common(basketCircle, rightCombination);

        if (resultatCircle.length === 0) {
            result.basketCircle = "right";
        } else {
            result.basketCircle = "wrong";
        }
    } else {
        result.basketCircle = "wrong";
    }

    if (basketSquare.children.length === 2) {
        let rightCombination = ["window", "painting"];
        let resultatSquare = common(basketSquare, rightCombination);

        if (resultatSquare.length === 0) {
            result.basketSquare = "right";
        } else {
            result.basketSquare = "wrong";
        }
    } else {
        result.basketSquare = "wrong";
    }

    if (basketTriangle.children.length === 2) {
        let rightCombination = ["sign", "tool"];
        let resultatTriangle = common(basketTriangle, rightCombination);

        if (resultatTriangle.length === 0) {
            result.basketTriangle = "right";
        } else {
            result.basketTriangle = "wrong";
        }
    } else {
        result.basketTriangle = "wrong";
    }

    if (basketRectangle.children.length === 2) {
        let rightCombination = ["tv", "chocolate"];
        let resultatTriangle = common(basketRectangle, rightCombination);

        if (resultatTriangle.length === 0) {
            result.basketRectangle = "right";
        } else {
            result.basketRectangle = "wrong";
        }
    } else {
        result.basketRectangle = "wrong";
    }

    alert(
        "your answers: for circle - " +
            result.basketCircle +
            ", for square - " +
            result.basketSquare +
            ", for triangle - " +
            result.basketTriangle +
            ", for rectangle - " +
            result.basketRectangle
    );
}

// 14 QUESTION

let choice = {
    topSeat: "",
    centralSeat: "",
    bottomSeat: "",
};

function question14() {
    let topSeat = document.getElementById("topSeat");
    let centralSeat = document.getElementById("centralSeat");
    let bottomSeat = document.getElementById("bottomSeat");

    if (topSeat.children[0].id === "pyramid") {
        choice.topSeat = "right";
    } else if (topSeat.children[0].id !== "square0") {
        choice.topSeat = "wrong";
    }

    if (centralSeat.children[0].id === "toyCar") {
        choice.centralSeat = "right";
    } else if (topSeat.children[0].id !== "square1") {
        choice.centralSeat = "wrong";
    }

    if (bottomSeat.children[0].id === "robot") {
        choice.bottomSeat = "right";
    } else if (topSeat.children[0].id !== "square2") {
        choice.bottomSeat = "wrong";
    }

    let numberCorrectlyPlacedToys = 0;

    for (let index in choice) {
        if (choice[index] === "right") numberCorrectlyPlacedToys++;
    }

    if (
        choice.topSeat !== "" &&
        choice.centralSeat !== "" &&
        choice.bottomSeat !== ""
    ) {
        debugger;
        if (numberCorrectlyPlacedToys === 3) {
            document.getElementsByClassName("closet")[0].className =
                "closetSuccess";
            addMiniIcon(
                document.getElementsByClassName("closetSuccess")[0],
                "success"
            );
            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            document.getElementsByClassName("closet")[0].className =
                "closetError";
            addMiniIcon(
                document.getElementsByClassName("closetError")[0],
                "failure"
            );
            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        }
    }
}

// 15 QUESTION

let answer = "";

document.getElementById("answer").onchange = function (e) {
    if (e.target.value == 2) {
        answer = "right";
    } else {
        answer = "wrong";
    }
};

function question15() {
    if (answer != "") {
        succerror(document.getElementById("answer"), answer === "wrong");

        // расставляем мини-иконки

        createMiniIcon(answer, document.getElementById("answer"));

        // выносим общий статус к номеру вопроса

        if (answer === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        }
    }
}

// 16 QUESTION

let result2 = { basketFlat: "", basketSolid: "" };

function question16() {
    // получение текущего содержимого обеих корзин
    let basketFlat = document.getElementById("placeFlat");
    let basketSolid = document.getElementById("placeSolid");

    // получение массива необходимого содержимого
    let contentBasketFlat = ["star", "circle", "triangle", "square", "cube2d"];
    let contentBasketSolid = ["cube", "cone", "roof", "pyramid", "ball"];

    // задание места для хранения результата выборки
    let resultFlat = [],
        resultSolid = [];

    // for basketFlat

    for (let i = 0; i < basketFlat.children.length; i++) {
        let selectedChild = basketFlat.children[i];

        if (contentBasketFlat.indexOf(selectedChild.children[0].id) != "-1") {
            resultFlat.push(selectedChild);
        } else {
            selectedChild.style.border = "1px solid #ffb47d";
            selectedChild.style.borderRadius = "5px";
        }
    }

    if (resultFlat.length === 5) {
        result2.basketFlat = "right";
    }

    // for basketSolid

    for (let i = 0; i < basketSolid.children.length; i++) {
        let selectedChild = basketSolid.children[i];

        if (contentBasketSolid.indexOf(selectedChild.children[0].id) != "-1") {
            resultSolid.push(selectedChild);
        } else {
            selectedChild.style.border = "1px solid #ffb47d";
            selectedChild.style.borderRadius = "5px";
        }
    }

    if (resultSolid.length === 5) {
        result2.basketSolid = "right";
    }

    // подведение итогов

    if (result2.basketFlat != "" && result2.basketSolid != "") {
        if (result2.basketFlat === "right" && result2.basketSolid === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        }
    }
}

// 17 QUESTION

let selectBtn3 = "right",
    btnSelectedName2;

document.getElementById("hexagon").onclick = function () {
    document.getElementById("hexagon").classList.toggle("selectedPicture2");
    document.getElementById("trapezoid").classList.remove("selectedPicture2");

    selectBtn3 = "right";
    btnSelectedName2 = "hexagon";
};

document.getElementById("trapezoid").onclick = function () {
    document.getElementById("trapezoid").classList.toggle("selectedPicture2");
    document.getElementById("hexagon").classList.remove("selectedPicture2");

    selectBtn3 = "wrong";
    btnSelectedName2 = "trapezoid";
};

function question17() {
    if (btnSelectedName2) {
        if (selectBtn3 === "right") {
            document
                .getElementById(btnSelectedName2)
                .classList.toggle("que17success");
        } else {
            document
                .getElementById(btnSelectedName2)
                .classList.toggle("que17error");
        }

        createMiniIcon(selectBtn3, document.getElementById(btnSelectedName2));

        if (selectBtn3 !== "right") {
            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        }
    }
}

// 18 QUESTION

function checkFlowers() {
    const contentFlowersArea = ["blueFlower", "greenFlower", "violetFlower"];
    let resultFor0 = [];

    let length =
        document.getElementsByClassName("circle-container")[0].children.length;

    for (let i = 1; i < length; i++) {
        resultFor0.push(
            document.getElementsByClassName("circle-container")[0].children[i]
                .children[0].id
        );
    }

    if (length === 4) {
        let resultatByFirstObject = contentFlowersArea.includes(resultFor0[0]);
        let resultatBySecondObject = contentFlowersArea.includes(resultFor0[1]);
        let resultatByThirdObject = contentFlowersArea.includes(resultFor0[2]);

        if (
            resultatByFirstObject == true &&
            resultatBySecondObject == true &&
            resultatByThirdObject == true
        ) {
            return "right";
        } else {
            return "wrong";
        }
    } else {
        return "not enough objects";
    }
}

function checkRedColor() {
    const contentRedColorArea = ["socks", "ball", "car", "ruler"];
    let resultFor = [];

    let element = document.getElementsByClassName(
        "circle-container right-circle-container"
    )[0];

    if (element.className === "circle-container right-circle-container") {
        let length2 = element.children.length;

        for (let i = 1; i < length2; i++) {
            resultFor.push(
                document.getElementsByClassName("circle-container")[1].children[
                    i
                ].children[0].id
            );
        }

        if (length2 === 5) {
            let resultatByFirstObject2 = contentRedColorArea.includes(
                resultFor[0]
            );
            let resultatBySecondObject2 = contentRedColorArea.includes(
                resultFor[1]
            );
            let resultatByThirdObject2 = contentRedColorArea.includes(
                resultFor[2]
            );
            let resultatByFourthObject2 = contentRedColorArea.includes(
                resultFor[3]
            );

            if (
                resultatByFirstObject2 == true &&
                resultatBySecondObject2 == true &&
                resultatByThirdObject2 == true &&
                resultatByFourthObject2 == true
            ) {
                return "right";
            } else {
                return "wrong";
            }
        } else {
            return "not enough objects";
        }
    }
}

function checkIntersection() {
    let element = document.getElementsByClassName("background-circle")[1];

    if (element.children.length === 1) {
        if (element.children[0].children[0].id === "redFlower") {
            return "right";
        } else {
            return "wrong";
        }
    } else {
        return "not enough objects";
    }
}

function question18() {
    let res1 = checkFlowers();
    let res2 = checkRedColor();
    let res3 = checkIntersection();

    alert(
        "Your choice for flowers space - " +
            res1 +
            ", for red color space - " +
            res2 +
            ", for Intersection space - " +
            res3
    );
}

// 20 QUESTION

// first part - check to input

let valuesInputs = { tasselLength: "", pencilLength: "" };

document.getElementById("tasselLength").onchange = function (e) {
    if (e.target.value == 8) {
        valuesInputs.tasselLength = "right";
    } else {
        valuesInputs.tasselLength = "wrong";
    }
};

document.getElementById("pencilLength").onchange = function (e) {
    if (e.target.value == 7) {
        valuesInputs.pencilLength = "right";
    } else {
        valuesInputs.pencilLength = "wrong";
    }
};

// second part - check the rest

let selectBtn4, nameSelectedBtn;

document.getElementById("selectBrush").onclick = function () {
    document.getElementById("selectBrush").style.backgroundColor = "#bbedf4";
    document.getElementById("selectBrush").style.color = "#0e80a4";
    document.getElementById("selectBrush").style.border = "1px solid #BBEDF4";

    selectBtn4 = "right";
    nameSelectedBtn = "selectBrush";

    document.getElementById("selectPencil").style.backgroundColor = "white";
    document.getElementById("selectPencil").style.color = "black";
    document.getElementById("selectPencil").style.border = "1px solid black";
};

document.getElementById("selectPencil").onclick = function () {
    document.getElementById("selectPencil").style.backgroundColor = "#bbedf4";
    document.getElementById("selectPencil").style.color = "#0e80a4";
    document.getElementById("selectPencil").style.border = "1px solid #BBEDF4";

    selectBtn4 = "wrong";
    nameSelectedBtn = "selectPencil";

    document.getElementById("selectBrush").style.backgroundColor = "white";
    document.getElementById("selectBrush").style.color = "black";
    document.getElementById("selectBrush").style.border = "1px solid black";
};

function question20() {
    if (valuesInputs.tasselLength != "" && valuesInputs.pencilLength != "") {
        succerror(
            document.getElementById("tasselLength"),
            valuesInputs.tasselLength === "wrong"
        );

        succerror(
            document.getElementById("pencilLength"),
            valuesInputs.pencilLength === "wrong"
        );

        succerror(
            document.getElementById(nameSelectedBtn),
            selectBtn4 === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(selectBtn4, document.getElementById(nameSelectedBtn));

        // выносим общий статус к номеру вопроса

        if (
            valuesInputs.tasselLength === "right" &&
            valuesInputs.pencilLength === "right" &&
            selectBtn4 === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question20"),
                "app20",
                16
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question20"),
                "app20",
                16
            );
        }
    }
}

// ------------------------------------------------------------------ALL SCRIPTS THE 19th QUESTION---------------------------------------------

//  common and initialization

dragElement(document.getElementsByClassName("firstTriangle")[0]);
dragElement2(document.getElementsByClassName("secondTriangle")[0]);

const rotationFunctionForFirstTriangle = new Propeller(
    document.getElementsByClassName("firstTriangle")[0],
    {
        inertia: 0,
    }
);

const rotationFunctionForSecondTriangle = new Propeller(
    document.getElementsByClassName("secondTriangle")[0],
    {
        inertia: 0,
    }
);

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function dragElement2(element) {
    // alert("exc!!");
    let pos10 = 0,
        pos20 = 0,
        pos30 = 0,
        pos40 = 0;

    element.onmousedown = dragMouseDown2;

    function dragMouseDown2(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos30 = e.clientX;
        pos40 = e.clientY;
        document.onmouseup = closeDragElement2;
        document.onmousemove = elementDrag2;
    }

    function elementDrag2(e) {
        // console.log("hhh");
        e = e || window.event;
        // calculate the new cursor position:
        pos10 = pos30 - e.clientX;
        pos20 = pos40 - e.clientY;
        pos30 = e.clientX;
        pos40 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos20 + "px";
        element.style.left = element.offsetLeft - pos10 + "px";
    }

    function closeDragElement2() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// implementation of movement and rotation of the first triangle

document
    .getElementsByClassName("firstTriangle")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "topСorner" ||
                e.target.className !== "bottomСorners") &&
            e.target.className === "mainImg"
        ) {
            rotationFunctionForFirstTriangle.stop();
            dragElement(document.getElementsByClassName("firstTriangle")[0]);
        }

        if (
            (e.target.className === "topСorner" ||
                e.target.className === "bottomСorners") &&
            e.target.className !== "mainImg"
        ) {
            rotationFunctionForFirstTriangle.onRotated(e);
        }
    });

// implementation of movement and rotation of the second triangle

document
    .getElementsByClassName("secondTriangle")[0]
    .addEventListener("mousedown", (e) => {
        // alert("exc");
        if (
            (e.target.className !== "leftCorners" ||
                e.target.className !== "rightCorner") &&
            e.target.className === "mainImgSecondTriangle"
        ) {
            // alert("god");
            rotationFunctionForSecondTriangle.stop();
            dragElement2(document.getElementsByClassName("secondTriangle")[0]);
        }

        if (
            (e.target.className === "leftCorners" ||
                e.target.className === "rightCorner") &&
            e.target.className !== "mainImgSecondTriangle"
        ) {
            // alert("ogoo");
            rotationFunctionForSecondTriangle.onRotated(e);
        }
    });

function question19() {
    // Дано:

    // функция для получения координат фигуры

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
        };
    }

    // Надо: ...

    // Решение:

    // 1. получаю координаты треугольников

    // - беру первый треугольник
    let firstTriangle = document.getElementsByClassName("firstTriangle")[0];
    // - беру второй треугольник
    let secondTriangle = document.getElementsByClassName("secondTriangle")[0];

    // - получаю координаты первого
    let coordElemFirst = getCoords(firstTriangle);
    // - получаю координаты первого
    let coordElemSecond = getCoords(secondTriangle);

    // 2. сравниваю их с координатами прямоугольника
    if (coordElemFirst.left < 700 && coordElemSecond.left < 900) {
        if (
            coordElemFirst.left < 570 &&
            coordElemFirst.left > 550 &&
            coordElemFirst.top < 11200 &&
            coordElemFirst.top > 11100 &&
            coordElemSecond.left < 570 &&
            coordElemSecond.left > 550 &&
            coordElemSecond.top < 11200 &&
            coordElemSecond.top > 11100
        ) {
            document.getElementsByClassName(
                "parentResetField"
            )[0].style.backgroundColor = "#9dd765";
            addMiniIcon(
                document.getElementsByClassName("parentResetField")[0],
                "success"
            );
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        } else {
            document.getElementsByClassName(
                "parentResetField"
            ).style.backgroundColor = "#ffb47d";
            addMiniIcon(
                document.getElementsByClassName("parentResetField")[0],
                "failure"
            );
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        }
    }
}

// ---------------------------------------------------------------------- RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    question12();
    question13();
    question14();
    question15();
    question16();
    question17();
    question18();
    question19();
    question20();
};
