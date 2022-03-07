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

// 3 QUESTION

function drag3(e) {
    localStorage.setItem("idTakenDiv", e.target.id);
    localStorage.setItem(
        "classElementGrandparent",
        e.target.parentElement.parentElement.className
    );
}

function drop3(e) {
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

// 5 QUESTION

function drag5(e) {
    localStorage.setItem("idOriginala", e.target.id);
}

function drop5(e) {
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
    currentElement.src = "./pictures/5que/" + nameObjectOrig + ".svg";
    orig.src = "./pictures/5que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;
}

// 7 QUESTION

function drag7(e) {
    localStorage.setItem("idSign", e.target.id);
    localStorage.setItem(
        "classGrandparentElement",
        e.target.parentElement.className
    );
}

function drop7(e) {
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

// 8 QUESTION

function drag8(e) {
    localStorage.setItem("appleIdStarted", e.target.id);
    localStorage.setItem("positionAppleInRow", e.target.dataset.position);
    localStorage.setItem("parentElementIdStart", e.target.parentElement.id);
}

function drop8() {
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
        copyBeingCreated.src = "./pictures/8que/apple.svg";
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

// 9 QUESTION

function drag9(e) {
    localStorage.setItem("idTakenCandy", e.target.id);
    localStorage.setItem(
        "classElemGrandparent",
        e.target.parentElement.parentElement.className
    );
    localStorage.setItem("positionElem", e.target.dataset.position);
}

function drop9(e) {
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
    objectBeingCreated.src = "./pictures/9que/" + objectName + ".svg";
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

// 11 QUESTION

function drag11(e) {
    localStorage.setItem("idTakenCube", e.target.id);
    localStorage.setItem("nameCube", e.target.dataset.name);
}

function drop11(e) {
    // получаем id и имя несомого элемента
    let idTakenCube = localStorage.getItem("idTakenCube");
    let nameCube = localStorage.getItem("nameCube");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;
    let currentName = e.target.dataset.name;

    // меняем картинки местами
    let orig = document.getElementById(idTakenCube);
    orig.src = "./pictures/11que/" + currentName + ".svg";
    orig.id = currentId;
    orig.setAttribute("data-name", currentName);
    orig.parentElement.style.cursor = "default";

    e.target.src = "./pictures/11que/" + nameCube + ".svg";
    e.target.id = idTakenCube;
    e.target.setAttribute("data-name", nameCube);
    e.target.parentElement.style.cursor = "grab";
}

// 14 QUESTION

function drag14(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function drop14(e) {
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
    objectBeingCreated.src = "./pictures/14que/" + figureName + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "5px";

    if (grandparentClass !== "topRow3" || grandparentClass !== "bottomRow3") {
        currentElement
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        originalElement.src = "./pictures/14que/square.svg";
        originalElement.id = "square" + lastChar;
        originalElement.style.transform = "none";
        originalElement.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "topRow3" || grandparentClass === "bottomRow3") {
        currentElement.src = "./pictures/14que/" + figureName + ".svg";
        currentElement.id = figureName + lastChar;
        currentElement.style.cursor = "grab";

        originalElement.remove();
    }
}

// 15 QUESTION

function drag15(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function drop15(e) {
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
    objectBeingCreated.src = "./pictures/15que/" + idFigure + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "3px";

    if (grandparentClass !== "objects") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);

        orig.src = "./pictures/15que/square.svg";
        orig.style.cursor = "default";
    }

    // делаем возврат на место

    if (grandparentClass === "objects") {
        e.target.src = "./pictures/15que/" + orig.alt + ".svg";
        e.target.id = orig.alt;
        e.target.style.cursor = "grab";
        orig.remove();
    }
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
    if (idFigure != "toyCar" && idFigure != "robot" && idFigure != "pyramid") {
        currentElement.src =
            "./pictures/16que/" + idFigure.slice(0, -1) + ".svg";
        currentElement.style.cursor = "grab";
        orig.src = "./pictures/16que/" + idFigure + ".svg";
        orig.style.cursor = "default";
    } else {
        currentElement.src = "./pictures/16que/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        orig.src = "./pictures/16que/" + currentId.slice(0, -1) + ".svg";
        orig.style.cursor = "default";
    }

    // поменять id для дальнейших переносок
    currentElement.id = idFigure;
    orig.id = currentId;
}

// 18 QUESTION

function drag18(e) {
    localStorage.setItem("idFigure18", e.target.id);
}

function drop18(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idFigure18");

    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (currentId === "placeFlat" || currentId === "placeSolid") {
        // добавляем предмет в корзину
        let createdDiv = document.createElement("div");
        createdDiv.style.height = "60px";
        createdDiv.style.width = "60px";
        createdDiv.style.top = "10px";
        createdDiv.style.left = "10px";

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/18que/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        currentElement.appendChild(createdDiv).appendChild(objectBeingCreated);

        // заменяем место предмета на квадрат
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
    localStorage.setItem("idOriginal", e.target.id);
}

function drop20(e) {
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
        objectBeingCreated.src = "./pictures/20que/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        if (currentClass !== "circle-container") {
            objectBeingCreated.style.transform = "rotate(180deg)";
        }

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место объекта на квадрат
        orig.src = "./pictures/20que/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        currentElement.src = "./pictures/20que/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        currentElement.id = idFigure;

        orig.remove();
    }
}

// 22 QUESTION

function drag22(e) {
    localStorage.setItem("idOrig22", e.target.id);
}

function drop22(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrig22");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/22que/" + nameObjectOrig + ".svg";
    currentElement.style.opacity = "1";
    currentElement.style.cursor = "grab";

    if (
        orig.parentElement.parentElement.className === "topRow5" ||
        orig.parentElement.parentElement.className === "bottomRow5"
    ) {
        orig.style.opacity = "0.5";
    } else {
        orig.src = "./pictures/22que/" + nameObjectCurrent + ".svg";
    }

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;

    // меняем вид курсора
    orig.style.cursor = "default";
}

//                                      --- OTHER SCRIPTS ---

// ---------------------------------------------------------------------- SHOWING THE CORRECT ANSWER

// для одной картинки

function addCorrectAnswer(
    numberCorrectAnswer,
    numberQue,
    numberContent,
    numberContentCorrectAnswer
) {
    let newElement = document.createElement("div");
    newElement.className = numberCorrectAnswer;

    let childNewElement = document.createElement("div"); // сосед 1
    childNewElement.className = "headerCorrectAnswer";
    childNewElement.textContent = "Correct answer";

    let secondChildNewElement = document.createElement("div"); // сосед 2
    secondChildNewElement.className = numberContentCorrectAnswer;

    let contentContent = document.createElement("img");
    contentContent.src = "./pictures/" + numberQue + "/correctAnswer.svg";
    contentContent.alt = "correct answer";

    secondChildNewElement.appendChild(contentContent);

    document.getElementsByClassName(numberContent)[0].appendChild(newElement);

    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(childNewElement);
    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(secondChildNewElement);
}

// для нескольких

function addDoubleCorrectAnswer(
    numberCorrectAnswer,
    pathQueOne,
    pathQueTwo,
    numberContent,
    numberContentCorrectAnswer
) {
    let newElement = document.createElement("div");
    newElement.className = numberCorrectAnswer;

    let childNewElement = document.createElement("div"); // сосед 1
    childNewElement.className = "headerCorrectAnswer";
    childNewElement.textContent = "Correct answer";

    let secondChildNewElement = document.createElement("div"); // сосед 2
    secondChildNewElement.className = numberContentCorrectAnswer;

    let contentContent = document.createElement("img");
    contentContent.src = "./pictures/" + pathQueOne;
    contentContent.alt = "correct answer";
    contentContent.style.marginRight = "20px";

    let secondContentContent = document.createElement("img");
    secondContentContent.src = "./pictures/" + pathQueTwo;
    secondContentContent.alt = "correct answer";

    secondChildNewElement.appendChild(contentContent);
    secondChildNewElement.appendChild(secondContentContent);

    document.getElementsByClassName(numberContent)[0].appendChild(newElement);

    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(childNewElement);
    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(secondChildNewElement);
}

function question1addCorrectAnswer() {
    document.getElementsByClassName("app1")[0].style.height = "503px";
    addCorrectAnswer(
        "correctAnswer1",
        "1que",
        "content1",
        "contentCorrectAnswer"
    );
}

function question2addCorrectAnswer() {
    document.getElementsByClassName("app2")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer2",
        "2que",
        "content2",
        "contentCorrectAnswer"
    );
}

function question3addCorrectAnswer() {
    document.getElementsByClassName("app3")[0].style.height = "413px";
    addCorrectAnswer(
        "correctAnswer3",
        "3que",
        "content3",
        "contentCorrectAnswer"
    );
}

function question4addCorrectAnswer() {
    document.getElementsByClassName("app4")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer4",
        "4que",
        "content4",
        "contentCorrectAnswer"
    );
}

function question5addCorrectAnswer() {
    document.getElementsByClassName("app5")[0].style.height = "657px";
    addCorrectAnswer(
        "correctAnswer5",
        "5que",
        "content5",
        "contentCorrectAnswer5"
    );
}

function question6addCorrectAnswer() {
    document.getElementsByClassName("app6")[0].style.height = "657px";
    addCorrectAnswer(
        "correctAnswer6",
        "6que",
        "content6",
        "contentCorrectAnswer"
    );
}

function question7addCorrectAnswer() {
    document.getElementsByClassName("app7")[0].style.height = "657px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer");
}

function question8addCorrectAnswer() {
    document.getElementsByClassName("app8")[0].style.height = "757px";
    addCorrectAnswer(
        "correctAnswer8",
        "8que",
        "content8",
        "contentCorrectAnswer8"
    );
}

function question9addCorrectAnswer() {
    document.getElementsByClassName("app9")[0].style.height = "777px";
    addDoubleCorrectAnswer(
        "correctAnswer9",
        "9que/correctAnswerBob.svg",
        "9que/correctAnswerDave.svg",
        "content9",
        "contentCorrectAnswer9"
    );
}

function question10addCorrectAnswer() {
    document.getElementsByClassName("app10")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer10",
        "10que",
        "content10",
        "contentCorrectAnswer"
    );
}

function question11addCorrectAnswer() {
    document.getElementsByClassName("app11")[0].style.height = "657px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "content11",
        "contentCorrectAnswer"
    );
}

function question12addCorrectAnswer() {
    document.getElementsByClassName("app12")[0].style.height = "607px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "content12",
        "contentCorrectAnswer12"
    );
}

function question13addCorrectAnswer() {
    document.getElementsByClassName("app13")[0].style.height = "757px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "content13",
        "contentCorrectAnswer"
    );
}

function question14addCorrectAnswer() {
    document.getElementsByClassName("app14")[0].style.height = "957px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "content14",
        "contentCorrectAnswer14"
    );
}

function question15addCorrectAnswer() {
    document.getElementsByClassName("app15")[0].style.height = "807px";
    addCorrectAnswer(
        "correctAnswer15",
        "15que",
        "content15",
        "contentCorrectAnswer15"
    );
}

function question16addCorrectAnswer() {
    document.getElementsByClassName("app16")[0].style.height = "950px";
    addCorrectAnswer(
        "correctAnswer16",
        "16que",
        "content16",
        "contentCorrectAnswer16"
    );
}

function question17addCorrectAnswer() {
    document.getElementsByClassName("app17")[0].style.height = "507px";
    addCorrectAnswer(
        "correctAnswer17",
        "17que",
        "content17",
        "contentCorrectAnswer"
    );
}

function question18addCorrectAnswer() {
    document.getElementsByClassName("app18")[0].style.height = "877px";
    addDoubleCorrectAnswer(
        "correctAnswer18",
        "18que/correctAnswerFlat.svg",
        "18que/correctAnswerSolid.svg",
        "content18",
        "contentCorrectAnswer18"
    );
}

function question19addCorrectAnswer() {
    document.getElementsByClassName("app19")[0].style.height = "657px";
    addCorrectAnswer(
        "correctAnswer19",
        "19que",
        "app19",
        "contentCorrectAnswer19"
    );
}

function question20addCorrectAnswer() {
    document.getElementsByClassName("app20")[0].style.height = "1117px";
    addCorrectAnswer(
        "correctAnswer20",
        "20que",
        "content20",
        "contentCorrectAnswer20"
    );
}

function question21addCorrectAnswer() {
    document.getElementsByClassName("app21")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer21",
        "21que",
        "app21",
        "contentCorrectAnswer21"
    );
}

function question22addCorrectAnswer() {
    document.getElementsByClassName("app22")[0].style.height = "1317px";
    addCorrectAnswer(
        "correctAnswer22",
        "22que",
        "content22",
        "contentCorrectAnswer"
    );

    let input1 = document.createElement("img");
    input1.src = "./pictures/22que/correctAnswer2.svg";

    let inputsHome = document.createElement("div");
    inputsHome.className = "inputsHome2";

    inputsHome.appendChild(input1);

    document
        .getElementsByClassName("correctAnswer22")[0]
        .appendChild(inputsHome);
}

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
    object.classList.add("statusIcon");

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");
    objDiv.classList.add("miniIcon");

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

function gettingDataFromFields(
    countId,
    correctNumbers,
    numberQuestion,
    number
) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            debugger;
            document.getElementById("firstNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        alert("100");
                        number.firstNumber = "right";
                    } else {
                        alert("200");
                        number.firstNumber = "wrong";
                    }
                };
        }

        if (i === 1) {
            document.getElementById("secondNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.secondNumber = "right";
                    } else {
                        number.secondNumber = "wrong";
                    }
                };
        }

        if (i === 2) {
            document.getElementById("thirdNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.thirdNumber = "right";
                    } else {
                        number.thirdNumber = "wrong";
                    }
                };
        }

        if (i === 3) {
            document.getElementById("fourthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fourthNumber = "right";
                    } else {
                        number.fourthNumber = "wrong";
                    }
                };
        }

        if (i === 4) {
            document.getElementById("fifthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fifthNumber = "right";
                    } else {
                        number.fifthNumber = "wrong";
                    }
                };
        }

        if (i === 5) {
            document.getElementById("sixthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.sixthNumber = "right";
                    } else {
                        number.sixthNumber = "wrong";
                    }
                };
        }

        if (i === 6) {
            document.getElementById("seventhNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.seventhNumber = "right";
                    } else {
                        number.seventhNumber = "wrong";
                    }
                };
        }

        if (i === 7) {
            document.getElementById("eighthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.eighthNumber = "right";
                    } else {
                        number.eighthNumber = "wrong";
                    }
                };
        }
    }
}

function succerrorAndCreateMiniIcon(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            succerror(
                document.getElementById("firstNumber" + numberQuestion),
                number.firstNumber === "wrong"
            );

            createMiniIcon(
                number.firstNumber,
                document.getElementById("firstNumber" + numberQuestion)
            );
        }

        if (i === 1) {
            succerror(
                document.getElementById("secondNumber" + numberQuestion),
                number.secondNumber === "wrong"
            );

            createMiniIcon(
                number.secondNumber,
                document.getElementById("secondNumber" + numberQuestion)
            );
        }

        if (i === 2) {
            succerror(
                document.getElementById("thirdNumber" + numberQuestion),
                number.thirdNumber === "wrong"
            );

            createMiniIcon(
                number.thirdNumber,
                document.getElementById("thirdNumber" + numberQuestion)
            );
        }

        if (i === 3) {
            succerror(
                document.getElementById("fourthNumber" + numberQuestion),
                number.fourthNumber === "wrong"
            );

            createMiniIcon(
                number.fourthNumber,
                document.getElementById("fourthNumber" + numberQuestion)
            );
        }

        if (i === 4) {
            succerror(
                document.getElementById("fifthNumber" + numberQuestion),
                number.fifthNumber === "wrong"
            );

            createMiniIcon(
                number.fifthNumber,
                document.getElementById("fifthNumber" + numberQuestion)
            );
        }

        if (i === 5) {
            succerror(
                document.getElementById("sixthNumber" + numberQuestion),
                number.sixthNumber === "wrong"
            );

            createMiniIcon(
                number.sixthNumber,
                document.getElementById("sixthNumber" + numberQuestion)
            );
        }

        if (i === 6) {
            succerror(
                document.getElementById("seventhNumber" + numberQuestion),
                number.seventhNumber === "wrong"
            );

            createMiniIcon(
                number.seventhNumber,
                document.getElementById("seventhNumber" + numberQuestion)
            );
        }

        if (i === 7) {
            succerror(
                document.getElementById("eighthNumber" + numberQuestion),
                number.eighthNumber === "wrong"
            );

            createMiniIcon(
                number.eighthNumber,
                document.getElementById("eighthNumber" + numberQuestion)
            );
        }
    }
}

function highlightUnselectedBlocks(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (number.firstNumber === "") {
                document.getElementById(
                    "firstNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (number.secondNumber === "") {
                document.getElementById(
                    "secondNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (number.thirdNumber === "") {
                document.getElementById(
                    "thirdNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (number.fourthNumber === "") {
                document.getElementById(
                    "fourthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (number.fifthNumber === "") {
                document.getElementById(
                    "fifthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (number.sixthNumber === "") {
                document.getElementById(
                    "sixthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (number.seventhNumber === "") {
                document.getElementById(
                    "seventhNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (number.eighthNumber === "") {
                document.getElementById(
                    "eighthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }
    }
}

// ----------------------------------------------------------------

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

            question1addCorrectAnswer();
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        }
    } else {
        let requiredElement = document.getElementsByClassName("topRow")[0];
        let childs = requiredElement.children;

        for (let i = 0; i < childs.length; i++) {
            childs[i].children[0].src = "./pictures/1que/unselectedBlock.svg";
        }
    }
}

// 2 QUESTION

function question2() {
    let firstNumber = document.getElementById("firstNumber2");
    let firstValue = firstNumber.value;

    if (firstValue !== "") {
        if (firstValue !== "17") {
            addImage(
                "failure",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );

            question2addCorrectAnswer();

            firstNumber.style.border = "2px solid #ED7777";
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );

            firstNumber.style.border = "2px solid #48B736";
        }
    } else {
        firstNumber.style.border = "2px solid #FFB47D";
    }
}

// 3 QUESTION

function question3() {
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
                document.getElementsByClassName("question3"),
                "app3",
                3
            );

            question3addCorrectAnswer();
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        }
    } else {
        let requiredElement =
            document.getElementsByClassName("inputsCollection")[0];
        let childs = requiredElement.children;

        for (let i = 0; i < childs.length; i++) {
            childs[i].children[0].style.border = "2px solid #FFB47D";
        }
    }
}

// 4 QUESTION

function question4() {
    let firstNumber = document.getElementById("firstNumber4");
    let secondNumber = document.getElementById("secondNumber4");
    let firstValue = firstNumber.value;
    let secondValue = secondNumber.value;

    if (firstValue !== "" && secondValue !== "") {
        if (firstValue !== "6" && secondValue !== "12") {
            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );

            question4addCorrectAnswer();

            firstNumber.style.border = "2px solid #ED7777";
            secondNumber.style.border = "2px solid #ED7777";
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );

            firstNumber.style.border = "2px solid #48B736";
            secondNumber.style.border = "2px solid #48B736";
        }
    } else {
        if (firstValue === "") {
            firstNumber.style.border = "2px solid #FFB47D";
        }

        if (secondValue === "") {
            secondNumber.style.border = "2px solid #FFB47D";
        }
    }
}

// 5 QUESTION

function question5() {
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
            "figure5success";
    } else if (
        idChild0.slice(0, -1) === "rectangles" ||
        idChild0.slice(0, -1) === "pentagons"
    ) {
        document.getElementById("place0").children[1].className =
            "figure5error";
    }

    if (idChild1.slice(0, -1) === "rectangles") {
        document.getElementById("place1").children[1].className =
            "figure5success";
    } else if (
        idChild1.slice(0, -1) === "stars" ||
        idChild2.slice(0, -1) === "pentagons"
    ) {
        document.getElementById("place1").children[1].className =
            "figure5error";
    }

    if (idChild2.slice(0, -1) === "pentagons") {
        document.getElementById("place2").children[1].className =
            "figure5success";
    } else if (
        idChild2.slice(0, -1) === "rectangles" ||
        idChild2.slice(0, -1) === "stars"
    ) {
        document.getElementById("place2").children[1].className =
            "figure5error";
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
                document.getElementsByClassName("question5"),
                "app5",
                5
            );

            question5addCorrectAnswer();
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        }
    } else {
        let requiredElement = document.getElementsByClassName("places")[0];
        let childs = requiredElement.children;

        for (let i = 0; i < childs.length; i++) {
            childs[i].children[1].children[0].src =
                "./pictures/5que/unselectedBlock.svg";
        }
    }
}

// 6 QUESTION

let countCookies;

document.querySelector("input").onchange = function (e) {
    countCookies = e.target.value;
};

function question6() {
    if (countCookies) {
        succerror(document.querySelector("input"), countCookies != 10);

        if (countCookies != 10) {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
            addMiniIcon(document.querySelector("input"), "failure");

            question6addCorrectAnswer();
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
            addMiniIcon(document.querySelector("input"), "success");
        }
    } else {
        let requiredElement = document.getElementById("inputQuestion6");
        requiredElement.style.border = "2px solid #FFB47D";
    }
}

// 7 QUESTION

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

function question7() {
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

            question7addCorrectAnswer();
        }
    } else {
        document.getElementById("amountIceCream").style.border =
            "2px solid #FFB47D";
        document.getElementById("selectInput").style.border =
            "2px solid #FFB47D";
        document.getElementById("amountFlowers").style.border =
            "2px solid #FFB47D";
    }
}

// 8 QUESTION

function question8() {
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

            question8addCorrectAnswer();
        }
    } else {
        document.getElementsByClassName("basket")[0].style.border =
            "2px solid #FFB47D";
    }
}

// 9 QUESTION

function question9() {
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

            question9addCorrectAnswer();
        }
    } else {
        document.getElementsByClassName("bob")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("dave")[0].style.border =
            "2px solid #FFB47D";
    }
}

// 10 QUESTION

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

function question10() {
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
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );

            question10addCorrectAnswer();
        }
    } else {
        document.getElementById("numberJellyfish").style.border =
            "2px solid #FFB47D";
        document.getElementById("numberSeahorses").style.border =
            "2px solid #FFB47D";
        document.getElementById("result").style.border = "2px solid #FFB47D";
    }
}

// 11 QUESTION

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

function question11() {
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

            question11addCorrectAnswer();
        }
    } else {
        document.getElementById("thirteen").style.border = "2px solid #FFB47D";
        document.getElementById("fourteen").style.border = "2px solid #FFB47D";
        document.getElementById("eighteen").style.border = "2px solid #FFB47D";
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

function question12() {
    if (btnSelectedName) {
        if (selectBtn === "right") {
            document.getElementById(btnSelectedName).className = "que12success";
        } else {
            document.getElementById(btnSelectedName).className = "que12error";
        }

        createMiniIcon(selectBtn, document.getElementById(btnSelectedName));

        if (selectBtn !== "right") {
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            question12addCorrectAnswer();
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        }
    } else {
        let requiredElement = document.getElementsByClassName("row")[0];
        let childs = requiredElement.children;

        for (let i = 0; i < childs.length; i++) {
            childs[i].children[0].style.border = "2px solid #FFB47D";
            childs[i].children[0].style.borderRadius = "5px";
        }
    }
}

// 13 QUESTION

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

function question13() {
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
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );

            question13addCorrectAnswer();
        }

        document.getElementById("stool").remove();

        let stoolParent = document.createElement("div");
        stoolParent.style.zIndex = "1";
        stoolParent.id = "stool";

        let stool = document.createElement("img");
        stool.src = "./pictures/13que/stool.svg";
        stool.alt = "stool";

        document
            .getElementsByClassName("friends")[0]
            .appendChild(stoolParent)
            .appendChild(stool);
    } else {
        document.getElementById("btnSelectTom").style.border =
            "2px solid #FFB47D";
        document.getElementById("btnSelectMike").style.border =
            "2px solid #FFB47D";
        document.getElementById("btnSelectJack").style.border =
            "2px solid #FFB47D";
    }
}

// 12 QUESTION

let answers = { hearts: "", stars: "", rhombus: "" };
let desiredContent = {
    hearts: "",
    stars: "",
    rhombus: "",
};

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

function question14() {
    // таможня Сердечек
    let contentHeartsBasket =
        document.getElementsByClassName("heart")[0].children[1];

    let chilrensHeart = contentHeartsBasket.children;

    // таможня Звёзд
    let contentStarsBasket =
        document.getElementsByClassName("star")[0].children[1];
    let chilrensStar = contentStarsBasket.children;

    // таможня Ромбов
    let contentRhombusBasket =
        document.getElementsByClassName("rhombus")[0].children[1];
    let chilrensRhombus = contentRhombusBasket.children;

    // проверка полей
    if (
        chilrensHeart.length > 0 &&
        answers.hearts != "" &&
        chilrensStar.length > 0 &&
        answers.stars != "" &&
        chilrensRhombus.length > 0 &&
        answers.rhombus != ""
    ) {
        // проверка корзин

        // таможня Сердец
        for (let i = 0; i < chilrensHeart.length; i++) {
            let selectedChildId = chilrensHeart[i].children[0].id;

            if (
                selectedChildId.slice(0, -1) !== "heart" &&
                document.getElementsByClassName("heart")[0].children[0]
                    .className === "headerHeart"
            ) {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";

                desiredContent.hearts = "wrong";
            }
        }

        // таможня Звёзд
        for (let i = 0; i < chilrensStar.length; i++) {
            let selectedChildId = chilrensStar[i].children[0].id;

            if (
                selectedChildId.slice(0, -1) !== "star" &&
                document.getElementsByClassName("star")[0].children[0]
                    .className === "headerStar"
            ) {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";

                desiredContent.stars = "wrong";
            }
        }

        // таможня Ромбов
        for (let i = 0; i < chilrensRhombus.length; i++) {
            let selectedChildId = chilrensRhombus[i].children[0].id;

            if (
                selectedChildId.slice(0, -1) !== "rhombus" &&
                document.getElementsByClassName("rhombus")[0].children[0]
                    .className === "headerRhombus"
            ) {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";

                desiredContent.rhombus = "right";
            }
        }

        // проверка самих же полей
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
            answers.rhombus === "right" &&
            desiredContent.hearts !== "wrong" &&
            desiredContent.hearts !== "" &&
            desiredContent.stars !== "wrong" &&
            desiredContent.stars !== "" &&
            desiredContent.rhombus !== "wrong" &&
            desiredContent.rhombus !== ""
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );

            question14addCorrectAnswer();
        }
    } else {
        if (chilrensHeart.length === 0) {
            document.getElementsByClassName("headerHeart")[0].style.width =
                "165px";

            document.getElementsByClassName("heart")[0].style.border =
                "2px solid #FFB47D";
            document.getElementsByClassName("headerHeart")[0].style.border =
                "2px solid #FFB47D";
        }

        if (answers.hearts === "") {
            document.getElementById("numberHearts").style.border =
                "2px solid #FFB47D";
        }

        if (chilrensStar.length === 0) {
            document.getElementsByClassName("headerStar")[0].style.width =
                "165px";

            document.getElementsByClassName("star")[0].style.border =
                "2px solid #FFB47D";
            document.getElementsByClassName("headerStar")[0].style.border =
                "2px solid #FFB47D";
        }

        if (answers.stars === "") {
            document.getElementById("numberStars").style.border =
                "2px solid #FFB47D";
        }

        if (chilrensRhombus.length === 0) {
            document.getElementsByClassName("headerRhombus")[0].style.width =
                "165px";

            document.getElementsByClassName("rhombus")[0].style.border =
                "2px solid #FFB47D";
            document.getElementsByClassName("headerRhombus")[0].style.border =
                "2px solid #FFB47D";
        }

        if (answers.rhombus === "") {
            document.getElementById("numberRhombus").style.border =
                "2px solid #FFB47D";
        }
    }
}

// 15 QUESTION

let result = {
    basketCircle: "",
    basketSquare: "",
    basketTriangle: "",
    basketRectangle: "",
};

function question15() {
    let basketCircle = document.getElementById("basketCircle");
    let basketSquare = document.getElementById("basketSquare");
    let basketTriangle = document.getElementById("basketTriangle");
    let basketRectangle = document.getElementById("basketRectangle");

    let selectedChildId,
        selectedChildIdSB,
        selectedChildIdTB,
        selectedChildIdRB;

    // таможня Сердечек
    let contentCircleBasket = basketCircle.children;
    let amountContent = contentCircleBasket.length;

    if (amountContent > 0) {
        for (let i = 0; i < amountContent; i++) {
            selectedChildId = contentCircleBasket[i].children[0].id;

            if (
                selectedChildId === "clocktemp" ||
                selectedChildId === "cookietemp" ||
                selectedChildId === "pizzatemp"
            ) {
                result.basketCircle = "right";
            } else {
                result.basketCircle = "wrong";
            }
        }
    }

    // таможня Квадратов
    let contentSquaresBasket = basketSquare.children;
    let amountContentSB = contentSquaresBasket.length;

    if (amountContentSB > 0) {
        for (let i = 0; i < amountContentSB; i++) {
            selectedChildIdSB = contentSquaresBasket[i].children[0].id;

            if (
                selectedChildIdSB === "windowtemp" ||
                selectedChildIdSB === "paintingtemp"
            ) {
                result.basketSquare = "right";
            } else {
                result.basketSquare = "wrong";
            }
        }
    }

    // таможня Треугольников
    let contentTrianglesBasket = basketTriangle.children;
    let amountContentTB = contentTrianglesBasket.length;

    if (amountContentTB > 0) {
        for (let i = 0; i < amountContentTB; i++) {
            selectedChildIdTB = contentTrianglesBasket[i].children[0].id;

            if (
                selectedChildIdTB === "signtemp" ||
                selectedChildIdTB === "tooltemp"
            ) {
                result.basketTriangle = "right";
            } else {
                result.basketTriangle = "wrong";
            }
        }
    }

    // таможня Прямоугольников
    let contentRectanglesBasket = basketRectangle.children;
    let amountContentRB = contentRectanglesBasket.length;

    if (amountContentRB > 0) {
        for (let i = 0; i < amountContentRB; i++) {
            selectedChildIdRB = contentRectanglesBasket[i].children[0].id;

            if (
                selectedChildIdRB === "tvtemp" ||
                selectedChildIdRB === "chocolatetemp"
            ) {
                result.basketRectangle = "right";
            } else {
                result.basketRectangle = "wrong";
            }
        }
    }

    // показ статуса

    if (
        result.basketCircle !== "" &&
        result.basketRectangle !== "" &&
        result.basketSquare !== "" &&
        result.basketTriangle !== ""
    ) {
        if (
            result.basketCircle === "right" &&
            result.basketRectangle === "right" &&
            result.basketSquare === "right" &&
            result.basketTriangle === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            if (result.basketCircle === "wrong") {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";
            }

            if (result.basketSquare === "wrong") {
                document.getElementById(selectedChildIdSB).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildIdSB).style.borderRadius =
                    "5px";
            }

            if (result.basketTriangle === "wrong") {
                document.getElementById(selectedChildIdTB).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildIdTB).style.borderRadius =
                    "5px";
            }

            if (result.basketRectangle === "wrong") {
                document.getElementById(selectedChildIdRB).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildIdRB).style.borderRadius =
                    "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );

            question15addCorrectAnswer();
        }
    } else {
        if (result.basketCircle === "") {
            document.getElementsByClassName("circle")[0].style.border =
                "2px solid #FFB47D";
        }

        if (result.basketSquare === "") {
            document.getElementsByClassName("square2")[0].style.border =
                "2px solid #FFB47D";
        }

        if (result.basketTriangle === "") {
            document.getElementsByClassName("triangle")[0].style.border =
                "2px solid #FFB47D";
        }

        if (result.basketRectangle === "") {
            document.getElementsByClassName("rectangle")[0].style.border =
                "2px solid #FFB47D";
        }
    }
}

// 16 QUESTION

let choice = {
    topSeat: "",
    centralSeat: "",
    bottomSeat: "",
};

function question16() {
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
        if (numberCorrectlyPlacedToys === 3) {
            document.getElementsByClassName("closet")[0].className =
                "closetSuccess";
            addMiniIcon(
                document.getElementsByClassName("closetSuccess")[0],
                "success"
            );
            addImage(
                "success",
                document.getElementsByClassName("question16"),
                "app16",
                16
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
                document.getElementsByClassName("question16"),
                "app16",
                16
            );

            question16addCorrectAnswer();
        }
    } else {
        document.getElementsByClassName("closet")[0].style.border =
            "2px solid red";
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

function question17() {
    if (answer != "") {
        succerror(document.getElementById("answer"), answer === "wrong");

        // расставляем мини-иконки

        createMiniIcon(answer, document.getElementById("answer"));

        // выносим общий статус к номеру вопроса

        if (answer === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            question17addCorrectAnswer();
        }
    } else {
        document.getElementById("answer").style.border = "2px solid #FFB47D";
    }
}

// 16 QUESTION

let result2 = { basketFlat: "", basketSolid: "" };

function question18() {
    // получение текущего содержимого обеих корзин
    let basketFlat = document.getElementById("placeFlat");
    let basketSolid = document.getElementById("placeSolid");

    // получение массива необходимого содержимого
    let contentBasketFlat = ["star", "circle", "triangle", "square", "cube2d"];
    let contentBasketSolid = ["cube", "cone", "roof", "18pyramid", "ball"];

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
    } else if (resultFlat.length > 0) {
        result2.basketFlat = "wrong";
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
    } else if (resultSolid.length > 0) {
        result2.basketSolid = "wrong";
    }

    // подведение итогов

    if (result2.basketFlat != "" && result2.basketSolid != "") {
        if (result2.basketFlat === "right" && result2.basketSolid === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );

            question18addCorrectAnswer();
        }
    } else {
        if (resultFlat.length === 0) {
            document.getElementsByClassName("basketFlat")[0].style.border =
                "2px solid #FFB47D";
        }

        if (resultSolid.length === 0) {
            document.getElementsByClassName("basketSolid")[0].style.border =
                "2px solid #FFB47D";
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

function question19() {
    if (btnSelectedName2) {
        if (selectBtn3 === "right") {
            document
                .getElementById(btnSelectedName2)
                .classList.toggle("que19success");
        } else {
            document
                .getElementById(btnSelectedName2)
                .classList.toggle("que19error");
        }

        createMiniIcon(selectBtn3, document.getElementById(btnSelectedName2));

        if (selectBtn3 !== "right") {
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );

            question19addCorrectAnswer();
        } else {
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        }
    } else {
        document.getElementsByClassName("leftFigure")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName("rightFigure")[0].style.border =
            "2px solid #FFB47D";
    }
}

// 20 QUESTION

let result20 = {
    areaFlowers: "",
    areaRedColor: "",
    intersection: "",
};

function checkFlowers() {
    let areaFlowers = document.getElementsByClassName("circle-container")[0];

    // таможня Левого круга
    let contentFlowersArea = areaFlowers.children;
    let amountFlowersArea = contentFlowersArea.length;

    if (amountFlowersArea > 1) {
        for (let i = 1; i < amountFlowersArea; i++) {
            let selectedChildId = contentFlowersArea[i].children[0].id;

            if (
                selectedChildId === "blueFlower" ||
                selectedChildId === "greenFlower" ||
                selectedChildId === "violetFlower"
            ) {
                result20.areaFlowers = "right";
            } else {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";
                result18.areaFlowers = "wrong";
            }
        }
    }
}

function checkRedColor() {
    let areaRedColor = document.getElementsByClassName("circle-container")[1];

    // таможня Правого круга
    let contentRedColorArea = areaRedColor.children;
    let amountRedColorArea = contentRedColorArea.length;

    if (amountRedColorArea > 1) {
        for (let i = 1; i < amountRedColorArea; i++) {
            let selectedChildId = contentRedColorArea[i].children[0].id;

            if (
                selectedChildId === "socks" ||
                selectedChildId === "ball" ||
                selectedChildId === "redCar" ||
                selectedChildId === "ruler"
            ) {
                result20.areaRedColor = "right";
            } else {
                document.getElementById(selectedChildId).style.border =
                    "1px solid #FFB47D";
                document.getElementById(selectedChildId).style.borderRadius =
                    "5px";
                result20.areaRedColor = "wrong";
            }
        }
    }
}

function checkIntersection() {
    let element = document.getElementsByClassName("background-circle")[1];

    if (element.children.length === 1) {
        if (element.children[0].children[0].id === "redFlower") {
            result20.intersection = "right";
        } else {
            document.getElementById(
                element.children[0].children[0].id
            ).style.border = "1px solid #FFB47D";
            document.getElementById(
                element.children[0].children[0].id
            ).style.borderRadius = "5px";

            result20.intersection = "wrong";
        }
    }
}

function question20() {
    checkFlowers();
    checkRedColor();
    checkIntersection();

    if (
        result20.areaFlowers !== "" &&
        result20.areaRedColor !== "" &&
        result20.intersection !== ""
    ) {
        if (
            result20.areaFlowers === "right" &&
            result20.areaRedColor === "right" &&
            result20.intersection === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );

            question20addCorrectAnswer();
        }
    } else {
        document.getElementsByClassName("circle-container")[0].style.border =
            "2px solid #FFB47D";
        document.getElementsByClassName(
            "circle-container right-circle-container"
        )[0].style.border = "2px solid #FFB47D";
    }
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

let selectBtn4 = "",
    nameSelectedBtn = "";

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

function question22() {
    if (
        valuesInputs.tasselLength !== "" &&
        valuesInputs.pencilLength !== "" &&
        selectBtn4 !== ""
    ) {
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
                document.getElementsByClassName("question22"),
                "app22",
                22
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );

            question22addCorrectAnswer();
        }
    } else {
        if (valuesInputs.tasselLength === "") {
            document.getElementById("tasselLength").style.border =
                "2px solid #FFB47D";
        }

        if (valuesInputs.pencilLength === "") {
            document.getElementById("pencilLength").style.border =
                "2px solid #FFB47D";
        }

        if (selectBtn4 === "") {
            document.getElementById("selectPencil").style.border =
                "2px solid #FFB47D";
            document.getElementById("selectBrush").style.border =
                "2px solid #FFB47D";
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
        if (
            (e.target.className !== "leftCorners" ||
                e.target.className !== "rightCorner") &&
            e.target.className === "mainImgSecondTriangle"
        ) {
            rotationFunctionForSecondTriangle.stop();
            dragElement2(document.getElementsByClassName("secondTriangle")[0]);
        }

        if (
            (e.target.className === "leftCorners" ||
                e.target.className === "rightCorner") &&
            e.target.className !== "mainImgSecondTriangle"
        ) {
            rotationFunctionForSecondTriangle.onRotated(e);
        }
    });

function question21() {
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
                document.getElementsByClassName("question21"),
                "app21",
                21
            );
        } else {
            document.getElementsByClassName(
                "parentResetField"
            )[0].style.backgroundColor = "#ffb47d";

            addMiniIcon(
                document.getElementsByClassName("parentResetField")[0],
                "failure"
            );

            addImage(
                "failure",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );

            question21addCorrectAnswer();
        }
    } else {
        document.getElementsByClassName("resetField")[0].style.border =
            "2px solid #FFB47D";
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
    question21();
    question22();
};

document.getElementById("clear").onclick = function () {
    let allInputs = document.querySelectorAll("input");
    let allStatusIcons = document.getElementsByClassName("statusIcon");
    let allMiniIcons = document.getElementsByClassName("miniIcon");

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].style.border = "1px solid";
    }

    for (let i = 0; i < allStatusIcons.length; i++) {
        allStatusIcons[i].remove();
    }

    for (let i = 0; i < allMiniIcons.length; i) {
        if (allMiniIcons.length) {
            allMiniIcons[i].remove();
        }
    }

    // 1 QUESTION

    function check1question() {
        let emptyPlace10 = document.getElementById("emptyPlace10");
        let emptyPlace11 = document.getElementById("emptyPlace11");
        let emptyPlace12 = document.getElementById("emptyPlace12");
        let emptyPlace13 = document.getElementById("emptyPlace13");
        let emptyPlace14 = document.getElementById("emptyPlace14");
        let emptyPlace15 = document.getElementById("emptyPlace15");

        let emptyPlace0 = emptyPlace10.children[0];
        let emptyPlace1 = emptyPlace11.children[0];
        let emptyPlace2 = emptyPlace12.children[0];
        let emptyPlace3 = emptyPlace13.children[0];
        let emptyPlace4 = emptyPlace14.children[0];
        let emptyPlace5 = emptyPlace15.children[0];

        let number0 = document.getElementById("number10").children[0];
        let number1 = document.getElementById("number11").children[0];
        let number2 = document.getElementById("number12").children[0];
        let number3 = document.getElementById("number13").children[0];
        let number4 = document.getElementById("number14").children[0];
        let number5 = document.getElementById("number15").children[0];

        emptyPlace0.src = "./pictures/1que/0.svg";
        emptyPlace1.src = "./pictures/1que/1.svg";
        emptyPlace2.src = "./pictures/1que/2.svg";
        emptyPlace3.src = "./pictures/1que/3.svg";
        emptyPlace4.src = "./pictures/1que/4.svg";
        emptyPlace5.src = "./pictures/1que/5.svg";

        number0.src = "./pictures/1que/26.svg";
        number1.src = "./pictures/1que/23.svg";
        number2.src = "./pictures/1que/28.svg";
        number3.src = "./pictures/1que/25.svg";
        number4.src = "./pictures/1que/27.svg";
        number5.src = "./pictures/1que/24.svg";

        if (emptyPlace10.className === "numberError") {
            emptyPlace10.classList.remove("numberError");
            emptyPlace10.classList.add("number1");
        } else {
            emptyPlace10.classList.remove("numberSuccess");
            emptyPlace10.classList.add("number1");
        }

        if (emptyPlace11.className === "numberError") {
            emptyPlace11.classList.remove("numberError");
            emptyPlace11.classList.add("number1");
        } else {
            emptyPlace11.classList.remove("numberSuccess");
            emptyPlace11.classList.add("number1");
        }

        if (emptyPlace12.className === "numberError") {
            emptyPlace12.classList.remove("numberError");
            emptyPlace12.classList.add("number1");
        } else {
            emptyPlace12.classList.remove("numberSuccess");
            emptyPlace12.classList.add("number1");
        }

        if (emptyPlace13.className === "numberError") {
            emptyPlace13.classList.remove("numberError");
            emptyPlace13.classList.add("number1");
        } else {
            emptyPlace13.classList.remove("numberSuccess");
            emptyPlace13.classList.add("number1");
        }

        if (emptyPlace14.className === "numberError") {
            emptyPlace14.classList.remove("numberError");
            emptyPlace14.classList.add("number1");
        } else {
            emptyPlace14.classList.remove("numberSuccess");
            emptyPlace14.classList.add("number1");
        }

        if (emptyPlace15.className === "numberError") {
            emptyPlace15.classList.remove("numberError");
            emptyPlace15.classList.add("number1");
        } else {
            emptyPlace15.classList.remove("numberSuccess");
            emptyPlace15.classList.add("number1");
        }

        document.getElementsByClassName("correctAnswer1")[0].remove();
        document.getElementsByClassName("app1")[0].style.height = "403px";
        document.getElementsByClassName("app1")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading1"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer1")[0] && check1question();

    // 2 QUESTION

    function check2question() {
        let firstNumber2 = document.getElementById("firstNumber2");
        firstNumber2.value = "";

        document.getElementsByClassName("correctAnswer2")[0].remove();
        document.getElementsByClassName("app2")[0].style.height = "307px";
        document.getElementsByClassName("app2")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading2"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber2.style.backgroundColor = "white";
        firstNumber2.style.color = "black";
        firstNumber2.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer2")[0] && check2question();

    // 3 QUESTION

    function check3question() {
        let emptyPlace30 = document.getElementById("emptyPlace30");
        let emptyPlace31 = document.getElementById("emptyPlace31");
        let emptyPlace32 = document.getElementById("emptyPlace32");
        let emptyPlace33 = document.getElementById("emptyPlace33");
        let emptyPlace34 = document.getElementById("emptyPlace34");
        let emptyPlace35 = document.getElementById("emptyPlace35");
        let emptyPlace36 = document.getElementById("emptyPlace36");
        let emptyPlace37 = document.getElementById("emptyPlace37");

        let emptyPlace0 = emptyPlace30.children[0];
        let emptyPlace1 = emptyPlace31.children[0];
        let emptyPlace2 = emptyPlace32.children[0];
        let emptyPlace3 = emptyPlace33.children[0];
        let emptyPlace4 = emptyPlace34.children[0];
        let emptyPlace5 = emptyPlace35.children[0];
        let emptyPlace6 = emptyPlace36.children[0];
        let emptyPlace7 = emptyPlace37.children[0];

        let number0 = document.getElementById("number30").children[0];
        let number1 = document.getElementById("number31").children[0];
        let number2 = document.getElementById("number32").children[0];
        let number3 = document.getElementById("number33").children[0];
        let number4 = document.getElementById("number34").children[0];
        let number5 = document.getElementById("number35").children[0];
        let number6 = document.getElementById("number36").children[0];
        let number7 = document.getElementById("number37").children[0];

        let arrEmptyPlace = [
            emptyPlace0,
            emptyPlace1,
            emptyPlace2,
            emptyPlace3,
            emptyPlace4,
            emptyPlace5,
            emptyPlace6,
            emptyPlace7,
        ];

        arrEmptyPlace.forEach((el) => {
            el.classList.remove("filledField");
            el.id = "empty";
            el.setAttribute("draggable", "true");
            el.textContent = "";
            el.parentElement.className = "inputContent";
        });

        document.getElementById("twenty").parentElement.className =
            "inputContent";
        document.getElementById("ninety").parentElement.className =
            "inputContent";

        let arrNumbers = [
            number0,
            number1,
            number2,
            number3,
            number4,
            number5,
            number6,
            number7,
        ];

        arrNumbers.forEach((el) => {
            el.style.backgroundColor = "#369cb7";
            el.style.opacity = "1";
            el.classList.add("filledField");
            el.setAttribute("draggable", "true");
        });

        number0.id = "ten";
        number0.textContent = "10";

        number1.id = "eighty";
        number1.textContent = "80";

        number2.id = "thirty";
        number2.textContent = "30";

        number3.id = "forty";
        number3.textContent = "40";

        number4.id = "sixty";
        number4.textContent = "60";

        number5.id = "seventy";
        number5.textContent = "70";

        number6.id = "fifty";
        number6.textContent = "50";

        number7.id = "oneHundred";
        number7.textContent = "100";

        document.getElementsByClassName("correctAnswer3")[0].remove();
        document.getElementsByClassName("app3")[0].style.height = "342px";
        document.getElementsByClassName("app3")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading3"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer3")[0] && check3question();

    // 4 QUESTION

    function check4question() {
        let firstNumber4 = document.getElementById("firstNumber4");
        let secondNumber4 = document.getElementById("secondNumber4");

        firstNumber4.value = "";
        secondNumber4.value = "";

        document.getElementsByClassName("correctAnswer4")[0].remove();
        document.getElementsByClassName("app4")[0].style.height = "307px";
        document.getElementsByClassName("app4")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading4"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber4.style.backgroundColor = "white";
        firstNumber4.style.color = "black";
        firstNumber4.style.border = "1px solid";

        secondNumber4.style.backgroundColor = "white";
        secondNumber4.style.color = "black";
        secondNumber4.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer4")[0] && check4question();

    // 5 QUESTION

    function check5question() {
        // получаем объекты
        let emptyPlace50 = document.getElementById("emptyPlace50");
        let emptyPlace51 = document.getElementById("emptyPlace51");
        let emptyPlace52 = document.getElementById("emptyPlace52");

        let emptyPlace0 = emptyPlace50.children[0];
        let emptyPlace1 = emptyPlace51.children[0];
        let emptyPlace2 = emptyPlace52.children[0];

        let figure50 = document.getElementById("figure50").children[0];
        let figure51 = document.getElementById("figure51").children[0];
        let figure52 = document.getElementById("figure52").children[0];

        // меняем содержимое
        figure50.src = "./pictures/5que/pentagons.svg";
        figure51.src = "./pictures/5que/stars.svg";
        figure52.src = "./pictures/5que/rectangles.svg";

        emptyPlace0.src = "./pictures/5que/freePlace.svg";
        emptyPlace1.src = "./pictures/5que/freePlace.svg";
        emptyPlace2.src = "./pictures/5que/freePlace.svg";

        // убираем выделение блоков
        if (emptyPlace50.className === "figure5error") {
            emptyPlace50.classList.remove("figure5error");
        } else {
            emptyPlace50.classList.remove("figure5success");
        }

        if (emptyPlace51.className === "figure5error") {
            emptyPlace51.classList.remove("figure5error");
        } else {
            emptyPlace51.classList.remove("figure5success");
        }

        if (emptyPlace52.className === "figure5error") {
            emptyPlace52.classList.remove("figure5error");
        } else {
            emptyPlace52.classList.remove("figure5success");
        }

        // возвращаем в дефолт
        document.getElementsByClassName("correctAnswer5")[0].remove();
        document.getElementsByClassName("app5")[0].style.height = "517px";
        document.getElementsByClassName("app5")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading5"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer5")[0] && check5question();

    // 6 QUESTION

    function check6question() {
        let firstNumber6 = document.getElementById("inputQuestion6");
        firstNumber6.value = "";

        document.getElementsByClassName("correctAnswer6")[0].remove();
        document.getElementsByClassName("app6")[0].style.height = "477px";
        document.getElementsByClassName("app6")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading6"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber6.style.backgroundColor = "white";
        firstNumber6.style.color = "black";
        firstNumber6.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer6")[0] && check6question();

    // 7 QUESTION

    function check7question() {
        let firstNumber7 = document.getElementById("amountIceCream");
        let secondNumber7 = document.getElementById("amountFlowers");

        firstNumber7.value = "";
        secondNumber7.value = "";

        document.getElementsByClassName("correctAnswer7")[0].remove();
        document.getElementsByClassName("app7")[0].style.height = "527px";
        document.getElementsByClassName("app7")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading7"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber7.style.backgroundColor = "white";
        firstNumber7.style.color = "black";
        firstNumber7.style.border = "1px solid";

        secondNumber7.style.backgroundColor = "white";
        secondNumber7.style.color = "black";
        secondNumber7.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer7")[0] && check7question();

    // 8 QUESTION

    function check8question() {
        // let firstNumber2 = document.getElementById("firstNumber2");
        // firstNumber2.value = "";

        document.getElementsByClassName("correctAnswer8")[0].remove();
        document.getElementsByClassName("app8")[0].style.height = "544px";
        document.getElementsByClassName("app8")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading8"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        // firstNumber2.style.backgroundColor = "white";
        // firstNumber2.style.color = "black";
        // firstNumber2.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer8")[0] && check8question();

    // 9 QUESTION

    function check9question() {
        // получаем объекты
        let candy90 = document.getElementById("candy90").children[0];
        let candy91 = document.getElementById("candy91").children[0];
        let candy92 = document.getElementById("candy92").children[0];
        let candy93 = document.getElementById("candy93").children[0];
        let candy94 = document.getElementById("candy94").children[0];
        let candy95 = document.getElementById("candy95").children[0];
        let candy96 = document.getElementById("candy96").children[0];

        // меняем содержимое
        candy90.style.opacity = "1";
        candy91.style.opacity = "1";
        candy92.style.opacity = "1";
        candy93.style.opacity = "1";
        candy94.style.opacity = "1";
        candy95.style.opacity = "1";
        candy96.style.opacity = "1";

        document.getElementById("placeDropCandyBob").innerHTML = "";
        document.getElementById("placeDropCandyDave").innerHTML = "";

        // возвращаем в дефолт
        document.getElementsByClassName("correctAnswer9")[0].remove();
        document.getElementsByClassName("app9")[0].style.height = "555px";
        document.getElementsByClassName("app9")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading9"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer9")[0] && check9question();

    // 10 QUESTION

    function check10question() {
        let firstNumber10 = document.getElementById("numberJellyfish");
        let secondNumber10 = document.getElementById("numberSeahorses");
        let thirdNumber10 = document.getElementById("result");

        firstNumber10.value = "";
        secondNumber10.value = "";
        thirdNumber10.value = "";

        document.getElementsByClassName("correctAnswer10")[0].remove();
        document.getElementsByClassName("app10")[0].style.height = "550px";
        document.getElementsByClassName("app10")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading10"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber10.style.backgroundColor = "white";
        firstNumber10.style.color = "black";
        firstNumber10.style.border = "1px solid";

        secondNumber10.style.backgroundColor = "white";
        secondNumber10.style.color = "black";
        secondNumber10.style.border = "1px solid";

        thirdNumber10.style.backgroundColor = "white";
        thirdNumber10.style.color = "black";
        thirdNumber10.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer10")[0] && check10question();

    // 11 QUESTION

    function check11question() {
        document.getElementById("thirteen").style.backgroundColor = "white";
        document.getElementById("thirteen").style.color = "black";
        document.getElementById("thirteen").style.border = "1px solid";

        document.getElementById("fourteen").style.backgroundColor = "white";
        document.getElementById("fourteen").style.color = "black";
        document.getElementById("fourteen").style.border = "1px solid";

        document.getElementById("eighteen").style.backgroundColor = "white";
        document.getElementById("eighteen").style.color = "black";
        document.getElementById("eighteen").style.border = "1px solid";

        document.getElementsByClassName("correctAnswer11")[0].remove();
        document.getElementsByClassName("app11")[0].style.height = "525px";
        document.getElementsByClassName("app11")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading11"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer11")[0] && check11question();

    // 12 QUESTION

    function check12question() {
        // получаем объекты
        let firstFigure12 = document.getElementById("balloon");
        let secondFigure12 = document.getElementById("book");
        let thirdFigure12 = document.getElementById("truck");
        let fourthFigure12 = document.getElementById("feather");
        let fifthFigure12 = document.getElementById("car");

        // возвращаем в дефолт
        firstFigure12.style.boxShadow = "none";
        secondFigure12.style.boxShadow = "none";
        thirdFigure12.style.boxShadow = "none";
        fourthFigure12.style.boxShadow = "none";
        fifthFigure12.style.boxShadow = "none";

        firstFigure12.classList.remove("selectedPicture");
        firstFigure12.classList.remove("que12error");
        secondFigure12.classList.remove("selectedPicture");
        secondFigure12.classList.remove("que12error");
        thirdFigure12.classList.remove("selectedPicture");
        thirdFigure12.classList.remove("que12error");
        fourthFigure12.classList.remove("selectedPicture");
        fourthFigure12.classList.remove("que12error");
        fifthFigure12.classList.add("selectedPicture");
        fifthFigure12.classList.remove("que12error");

        document.getElementsByClassName("correctAnswer12")[0].remove();
        document.getElementsByClassName("app12")[0].style.height = "382px";
        document.getElementsByClassName("app12")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading12"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer12")[0] && check12question();

    // 13 QUESTION

    function check13question() {
        document.getElementById("btnSelectTom").style.backgroundColor = "white";
        document.getElementById("btnSelectTom").style.color = "black";
        document.getElementById("btnSelectTom").style.border = "1px solid";

        document.getElementById("btnSelectMike").style.backgroundColor =
            "white";
        document.getElementById("btnSelectMike").style.color = "black";
        document.getElementById("btnSelectMike").style.border = "1px solid";

        document.getElementById("btnSelectJack").style.backgroundColor =
            "white";
        document.getElementById("btnSelectJack").style.color = "black";
        document.getElementById("btnSelectJack").style.border = "1px solid";

        document.getElementsByClassName("correctAnswer13")[0].remove();
        document.getElementsByClassName("app13")[0].style.height = "627px";
        document.getElementsByClassName("app13")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading13"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer13")[0] && check13question();

    // 14 QUESTION

    function check14question() {
        let firstNumber14 = document.getElementById("numberHearts");
        let secondNumber14 = document.getElementById("numberStars");
        let thirdNumber14 = document.getElementById("numberRhombus");

        firstNumber14.value = "";
        secondNumber14.value = "";
        thirdNumber14.value = "";

        document.getElementsByClassName("correctAnswer14")[0].remove();
        document.getElementsByClassName("app14")[0].style.height = "641px";
        document.getElementsByClassName("app14")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading14"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber14.style.backgroundColor = "white";
        firstNumber14.style.color = "black";
        firstNumber14.style.border = "1px solid";

        secondNumber14.style.backgroundColor = "white";
        secondNumber14.style.color = "black";
        secondNumber14.style.border = "1px solid";

        thirdNumber14.style.backgroundColor = "white";
        thirdNumber14.style.color = "black";
        thirdNumber14.style.border = "1px solid";

        // получаем объекты
        let figure140 = document.getElementById("figure140").children[0];
        let figure141 = document.getElementById("figure141").children[0];
        let figure142 = document.getElementById("figure142").children[0];
        let figure143 = document.getElementById("figure143").children[0];
        let figure144 = document.getElementById("figure144").children[0];
        let figure145 = document.getElementById("figure145").children[0];
        let figure146 = document.getElementById("figure146").children[0];
        let figure147 = document.getElementById("figure147").children[0];
        let figure148 = document.getElementById("figure148").children[0];
        let figure149 = document.getElementById("figure149").children[0];
        let figure1410 = document.getElementById("figure1410").children[0];
        let figure1411 = document.getElementById("figure1411").children[0];
        let figure1412 = document.getElementById("figure1412").children[0];
        let figure1413 = document.getElementById("figure1413").children[0];

        // меняем содержимое
        figure140.src = "./pictures/14que/heart.svg";
        figure141.src = "./pictures/14que/rhombus.svg";
        figure142.src = "./pictures/14que/heart.svg";
        figure143.src = "./pictures/14que/star.svg";
        figure144.src = "./pictures/14que/star.svg";
        figure145.src = "./pictures/14que/heart.svg";
        figure146.src = "./pictures/14que/rhombus.svg";
        figure147.src = "./pictures/14que/rhombus.svg";
        figure148.src = "./pictures/14que/heart.svg";
        figure149.src = "./pictures/14que/heart.svg";
        figure1410.src = "./pictures/14que/heart.svg";
        figure1411.src = "./pictures/14que/rhombus.svg";
        figure1412.src = "./pictures/14que/star.svg";
        figure1413.src = "./pictures/14que/star.svg";

        document.getElementById("basketHearts").innerHTML = "";
        document.getElementById("basketStars").innerHTML = "";
        document.getElementById("basketRhombus").innerHTML = "";
    }

    document.getElementsByClassName("correctAnswer14")[0] && check14question();

    // 15 QUESTION

    function check15question() {
        // получаем объекты
        let figure150 = document.getElementById("figure150").children[0];
        let figure151 = document.getElementById("figure151").children[0];
        let figure152 = document.getElementById("figure152").children[0];
        let figure153 = document.getElementById("figure153").children[0];
        let figure154 = document.getElementById("figure154").children[0];
        let figure155 = document.getElementById("figure155").children[0];
        let figure156 = document.getElementById("figure156").children[0];
        let figure157 = document.getElementById("figure157").children[0];
        let figure158 = document.getElementById("figure158").children[0];

        // меняем содержимое
        figure150.src = "./pictures/15que/clock.svg";
        figure151.src = "./pictures/15que/window.svg";
        figure152.src = "./pictures/15que/cookie.svg";
        figure153.src = "./pictures/15que/painting.svg";
        figure154.src = "./pictures/15que/pizza.svg";
        figure155.src = "./pictures/15que/sign.svg";
        figure156.src = "./pictures/15que/tv.svg";
        figure157.src = "./pictures/15que/tool.svg";
        figure158.src = "./pictures/15que/chocolate.svg";

        document.getElementById("basketCircle").innerHTML = "";
        document.getElementById("basketSquare").innerHTML = "";
        document.getElementById("basketTriangle").innerHTML = "";
        document.getElementById("basketRectangle").innerHTML = "";

        // возвращаем в дефолт
        document.getElementsByClassName("correctAnswer15")[0].remove();
        document.getElementsByClassName("app15")[0].style.height = "554px";
        document.getElementsByClassName("app15")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading15"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer15")[0] && check15question();

    // 16 QUESTION

    function check16question() {
        // let firstNumber2 = document.getElementById("firstNumber2");
        // firstNumber2.value = "";

        document.getElementsByClassName("correctAnswer16")[0].remove();
        document.getElementsByClassName("app16")[0].style.height = "625px";
        document.getElementsByClassName("app16")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading16"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        // firstNumber2.style.backgroundColor = "white";
        // firstNumber2.style.color = "black";
        // firstNumber2.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer16")[0] && check16question();

    // 17 QUESTION

    function check17question() {
        let firstNumber17 = document.getElementById("answer");
        firstNumber17.value = "";

        document.getElementsByClassName("correctAnswer17")[0].remove();
        document.getElementsByClassName("app17")[0].style.height = "412px";
        document.getElementsByClassName("app17")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading17"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber17.style.backgroundColor = "white";
        firstNumber17.style.color = "black";
        firstNumber17.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer17")[0] && check17question();

    // 18 QUESTION

    function check18question() {
        // получаем объекты
        let figure180 = document.getElementById("figure180").children[0];
        let figure181 = document.getElementById("figure181").children[0];
        let figure182 = document.getElementById("figure182").children[0];
        let figure183 = document.getElementById("figure183").children[0];
        let figure184 = document.getElementById("figure184").children[0];
        let figure185 = document.getElementById("figure185").children[0];
        let figure186 = document.getElementById("figure186").children[0];
        let figure187 = document.getElementById("figure187").children[0];
        let figure188 = document.getElementById("figure188").children[0];
        let figure189 = document.getElementById("figure189").children[0];

        // меняем содержимое
        figure180.src = "./pictures/18que/cube.svg";
        figure181.src = "./pictures/18que/star.svg";
        figure182.src = "./pictures/18que/cone.svg";
        figure183.src = "./pictures/18que/circle.svg";
        figure184.src = "./pictures/18que/roof.svg";
        figure185.src = "./pictures/18que/triangle.svg";
        figure186.src = "./pictures/18que/18pyramid.svg";
        figure187.src = "./pictures/18que/square.svg";
        figure188.src = "./pictures/18que/ball.svg";
        figure189.src = "./pictures/18que/cube2d.svg";

        document.getElementById("placeFlat").innerHTML = "";
        document.getElementById("placeSolid").innerHTML = "";

        // возвращаем в дефолт
        document.getElementsByClassName("correctAnswer18")[0].remove();
        document.getElementsByClassName("app18")[0].style.height = "611px";
        document.getElementsByClassName("app18")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading18"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer18")[0] && check18question();

    // 19 QUESTION

    function check19question() {
        // получаем объекты
        let firstFigure19 = document.getElementById("hexagon");
        let secondFigure19 = document.getElementById("trapezoid");

        // возвращаем в дефолт
        firstFigure19.style.boxShadow = "none";
        secondFigure19.style.boxShadow = "none";

        firstFigure19.classList.add("selectedPicture2");
        secondFigure19.classList.remove("selectedPicture2");

        document.getElementsByClassName("correctAnswer19")[0].remove();
        document.getElementsByClassName("app19")[0].style.height = "422px";
        document.getElementsByClassName("app19")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading19"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";
    }

    document.getElementsByClassName("correctAnswer19")[0] && check19question();

    // 20 QUESTION

    function check20question() {
        // let firstNumber2 = document.getElementById("firstNumber2");
        // firstNumber2.value = "";

        document.getElementsByClassName("correctAnswer20")[0].remove();
        document.getElementsByClassName("app20")[0].style.height = "680px";
        document.getElementsByClassName("app20")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading20"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        // firstNumber2.style.backgroundColor = "white";
        // firstNumber2.style.color = "black";
        // firstNumber2.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer20")[0] && check20question();

    // 21 QUESTION

    function check21question() {
        // let firstNumber2 = document.getElementById("firstNumber2");
        // firstNumber2.value = "";

        document.getElementsByClassName("correctAnswer21")[0].remove();
        document.getElementsByClassName("app21")[0].style.height = "424px";
        document.getElementsByClassName("app21")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading21"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        // firstNumber2.style.backgroundColor = "white";
        // firstNumber2.style.color = "black";
        // firstNumber2.style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer21")[0] && check21question();

    // 22 QUESTION

    function check22question() {
        let firstNumber22 = document.getElementById("tasselLength");
        let secondNumber22 = document.getElementById("pencilLength");

        firstNumber22.value = "";
        secondNumber22.value = "";

        document.getElementsByClassName("correctAnswer22")[0].remove();
        document.getElementsByClassName("app22")[0].style.height = "857px";
        document.getElementsByClassName("app22")[0].style.border =
            "0.5px solid #a8a8a8";
        document.getElementsByClassName(
            "lineUnderHeading22"
        )[0].style.borderBottom = "0.5px solid #a8a8a8";

        firstNumber22.style.backgroundColor = "white";
        firstNumber22.style.color = "black";
        firstNumber22.style.border = "1px solid";

        secondNumber22.style.backgroundColor = "white";
        secondNumber22.style.color = "black";
        secondNumber22.style.border = "1px solid";

        // возвращаем в дефолт кнопки
        document.getElementById("selectBrush").style.backgroundColor = "white";
        document.getElementById("selectBrush").style.color = "black";
        document.getElementById("selectBrush").style.border = "1px solid";

        document.getElementById("selectPencil").style.backgroundColor = "white";
        document.getElementById("selectPencil").style.color = "black";
        document.getElementById("selectPencil").style.border = "1px solid";
    }

    document.getElementsByClassName("correctAnswer22")[0] && check22question();
};
