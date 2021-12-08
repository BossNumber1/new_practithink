// drag and drop implementation

function dragStart(e) {
    localStorage.setItem("idTakenNumber", e.target.id);
    localStorage.setItem(
        "classGrandparent",
        e.target.parentElement.parentElement.className
    );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id взятого элемента и класс прародителя
    let idTakenNumber = localStorage.getItem("idTakenNumber");
    let classGrandparent = localStorage.getItem("classGrandparent");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idTakenNumber);
    let currentElem = document.getElementById(currentId);

    // меняем поля местами
    orig.id = currentId;

    if (classGrandparent === "bottomRow") {
        // orig.style.opacity = "0.5";
        let pele = orig.parentElement; // получаю родителя
        let pos = pele.dataset.position; // теперь его позицию

        orig.remove();

        //----

        let objectBeingCreated222 = document.createElement("img");
        //  objectBeingCreated.src = "./pictures/" + figureId + ".svg";
        //  objectBeingCreated.id = figureId;
        //  objectBeingCreated.alt = figureId;
        //  objectBeingCreated.style.opacity = "1";
        objectBeingCreated222.style.width = "50px";
        objectBeingCreated222.style.height = "50px";
        objectBeingCreated222.style.borderRadius = "50px";
        objectBeingCreated222.style.background = "lightgray";

        //  objectBeingCreated.setAttribute("data-state", numberSidesFigure);
        //  objectBeingCreated.setAttribute("data-position", positionFigure);

        let placeSelectedFigure2 =
            document.getElementsByClassName(classGrandparent)[0].children[pos];

        console.log(
            "ll 2 =",
            document.getElementsByClassName(classGrandparent)[0].children[pos]
        );

        placeSelectedFigure2.appendChild(objectBeingCreated222);
        //----
        // orig.style.backgroundColor = "orange";
    } else {
        orig.src = "./pictures/" + currentId + ".svg";
    }

    currentElem.id = idTakenNumber;
    currentElem.src = "./pictures/" + idTakenNumber + ".svg";

    if (currentId === "square") {
        e.target.parentElement.className = "number";
    } else {
        e.target.parentElement.className = "square";
    }

    if (classGrandparent !== "bottomRow") {
        e.target.style.opacity = "1";
    }
}

// check implementation

let correctOrder = [23, 24, 25, 26, 27, 28];
let resultat = [];

document.getElementById("submit").onclick = function () {
    let topRow = document.getElementsByClassName("topRow");
    let childrenTopRow = topRow[0].children;

    for (let i = 0; i < childrenTopRow.length; i++) {
        if (childrenTopRow[i].children[0].id == correctOrder[i]) {
            resultat.push("верно");
        } else {
            resultat.push("нет");
        }
    }

    alert(resultat);
};
