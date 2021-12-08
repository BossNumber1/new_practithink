// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenNumber", event.target.id);
    localStorage.setItem(
        "classGrandparent",
        event.target.parentElement.parentElement.className
    );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id взятого элемента
    let idTakenNumber = localStorage.getItem("idTakenNumber");
    let classGrandparent = localStorage.getItem("classGrandparent");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idTakenNumber);
    let currentElem = document.getElementById(currentId);

    // меняем поля местами
    orig.id = currentId;
    orig.alt = currentId;

    if (classGrandparent === "bottomRow") {
        orig.style.opacity = "0.5";
    } else {
        orig.src = "./pictures/" + currentId + ".svg";
    }

    currentElem.id = idTakenNumber;
    currentElem.src = "./pictures/" + idTakenNumber + ".svg";
    currentElem.alt = idTakenNumber;

    if (currentId === "square") {
        e.target.parentElement.className = "number";
    } else {
        e.target.parentElement.className = "square";
    }

    // if (classGrandparent !== "collectionFilledFields") {
    //     e.target.style.opacity = "1";
    // }
}
