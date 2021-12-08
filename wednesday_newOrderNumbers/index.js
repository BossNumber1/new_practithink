// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenNumber", event.target.id);
    // localStorage.setItem(
    //     "classGrandparent",
    //     event.target.parentElement.parentElement.className
    // );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id взятого элемента и класс прародителя
    let idTakenNumber = localStorage.getItem("idTakenNumber");
    // let classGrandparent = localStorage.getItem("classGrandparent");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // меняем поля местами
    let orig = document.getElementById(idTakenNumber);
    orig.id = currentId;

    // if (classGrandparent === "bottomRow") {
    //     // orig.style.background = "#369cb7";
    //     // orig.style.opacity = "0.5";
    // } else {
    //     orig.classList.remove("filledField");
    // }

    let currentElem = document.getElementById(currentId);
    currentElem.id = idTakenNumber;
    currentElem.src = "./pictures/" + idTakenNumber + ".svg";

    if (currentId === "square") {
        e.target.parentElement.className = "number";
    }

    // if (classGrandparent !== "collectionFilledFields") {
    //     e.target.style.opacity = "1";
    // }
}
