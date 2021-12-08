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
    e.target.classList.remove("square");
    e.target.classList.add("number");
    // console.log("e.target =", e.target);
    let elem = e.target;

    let objectBeingCreated = document.createElement("img");
    //   objectBeingCreated.style.position = "absolute";
    //   objectBeingCreated.style.paddingTop = e.clientY - 240 + "px";
    //   objectBeingCreated.style.paddingLeft = e.clientX - 660 + "px";
    //   objectBeingCreated.id = "appleInBasket" + positionApple;

    objectBeingCreated.id = idTakenNumber;
    objectBeingCreated.src = "./pictures/" + idTakenNumber + ".svg";

    //   document
    //       .getElementsByClassName("fruitBase")[0]
    //       .appendChild(objectBeingCreated)
    //       .appendChild(selectedFigure);

    elem.appendChild(objectBeingCreated);
    // e.target.id = idTakenNumber;
    // e.target.src = "./pictures/" + idTakenNumber + ".svg";

    // e.target.textContent = orig.textContent;
    // if (classElementGrandparent !== "collectionFilledFields") {
    //     e.target.style.opacity = "1";
    // }
    // // именно - после всех операций - удаляем содержимое изначального места
    // orig.textContent = "";
}
