// common commands

function allowDrop(event) {
    event.preventDefault();
}

// 1 QUESTION

// drag and drop implementation

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

// check implementation

let correctOrder1 = [23, 24, 25, 26, 27, 28];
let resultat1 = [];

document.getElementById("submit").onclick = function () {
    let topRow = document.getElementsByClassName("topRow");
    let childrenTopRow = topRow[0].children;

    for (let i = 0; i < childrenTopRow.length; i++) {
        if (childrenTopRow[i].children[0].id != correctOrder1[i]) {
            resultat1.push("нет");
        }
    }

    if (resultat1.length === 0) {
        alert("well done, the right choice");
    } else {
        alert("wrong, try again");
    }
};

// 2 QUESTION

// drag and drop implementation

function dragStart2(event) {
    localStorage.setItem("idTakenDiv", event.target.id);
    localStorage.setItem(
        "classElementGrandparent",
        event.target.parentElement.parentElement.className
    );
}

// function allowDrop(event) {
//     event.preventDefault();
// }

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
        orig.style.background = "#369cb7";
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

// checking for the correct result

let correctOrder2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let resultat2 = [];

document.getElementById("submit").onclick = function () {
    let firstRow = document.getElementsByClassName("inputsCollection");
    let chil = firstRow[0].children;

    for (let i = 0; i < chil.length; i++) {
        if (chil[i].innerText == correctOrder2[i]) {
            resultat2.push("верно");
        } else {
            resultat2.push("нет");
        }
    }

    alert(resultat2);
};
