// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenDiv", event.target.id);
    localStorage.setItem(
        "classElementGrandparent",
        event.target.parentElement.parentElement.className
    );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
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

let correctOrder = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let resultat = [];

document.getElementById("submit").onclick = function () {
    let firstRow = document.getElementsByClassName("inputsCollection");
    let chil = firstRow[0].children;

    for (let i = 0; i < chil.length; i++) {
        if (chil[i].innerText == correctOrder[i]) {
            resultat.push("верно");
        } else {
            resultat.push("нет");
        }
    }

    alert(resultat);
};
