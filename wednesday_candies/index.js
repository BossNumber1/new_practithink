// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenCandy", event.target.id);
    localStorage.setItem(
        "classElemGrandparent",
        event.target.parentElement.parentElement.className
    );
    localStorage.setItem("positionElem", event.target.dataset.position);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
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
    objectBeingCreated.src = "./pictures/" + objectName + ".svg";
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

// check implementation

document.getElementById("submit").onclick = function () {
    let basketBob = document.getElementById("placeDropCandyBob");
    let basketDave = document.getElementById("placeDropCandyDave");

    if (basketBob.children.length === 4 && basketDave.children.length === 3) {
        alert(" well done, that's right ");
    } else {
        alert(" wrong try again ");
    }
};
