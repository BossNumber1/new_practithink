// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenNumber", event.target.id);
    // localStorage.setItem(
    //     "classElementGrandparent",
    //     event.target.parentElement.parentElement.className
    // );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id взятого элемента и класс прародителя
    let idTakenNumber = localStorage.getItem("idTakenNumber");
    // let classElementGrandparent = localStorage.getItem(
    //     "classElementGrandparent"
    // );
    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;
    // меняем поля местами
    let orig = document.getElementById(idTakenNumber);
    // orig.id = currentId;
    // if (classElementGrandparent === "collectionFilledFields") {
    //     orig.style.background = "#369cb7";
    // orig.style.opacity = "0.5";
    // } else {
    //     orig.classList.remove("filledField");
    // }

    let elem = e.target;
    elem.className = "number";

    let objectBeingCreated = document.createElement("img");
    //   objectBeingCreated.id = "appleInBasket" + positionApple;

    objectBeingCreated.id = idTakenNumber;
    objectBeingCreated.src = "./pictures/" + idTakenNumber + ".svg";

    elem.appendChild(objectBeingCreated);
    // e.target.id = idTakenNumber;
    // e.target.src = "./pictures/" + idTakenNumber + ".svg";

    // e.target.textContent = orig.textContent;
    // if (classElementGrandparent !== "collectionFilledFields") {
    //     e.target.style.opacity = "1";
    // }
}
