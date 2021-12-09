// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenCandy", event.target.id);
    // localStorage.setItem(
    //     "classElementGrandparent",
    //     event.target.parentElement.parentElement.className
    // );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id несомого элемента и класс прародителя
    let idTakenElement = localStorage.getItem("idTakenCandy");
    let copyId = idTakenElement;
    copyId.slice(0, -1);
    let objectName = copyId.slice(0, -1);

    // if (objectName === "candy") {
    //     idTakenElement = objectName;
    // }

    // let classElementGrandparent = localStorage.getItem(
    //     "classElementGrandparent"
    // );

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idTakenElement);
    let currentElem = document.getElementById(currentId);
    // let placeDropCandy = document.getElementById("placeDropCandy");

    // создаём новый объект
    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.src = "./pictures/" + objectName + ".svg";
    objectBeingCreated.style.marginLeft = "10px";
    objectBeingCreated.style.marginTop = "10px";
    objectBeingCreated.id = idTakenElement;
    objectBeingCreated.alt = objectName;

    // меняем поля местами

    // orig.id = currentId;
    // if (classElementGrandparent === "collectionFilledFields") {
    //     orig.style.background = "#369cb7";
    orig.style.opacity = "0.5";
    // } else {
    //     orig.classList.remove("filledField");
    // }
    currentElem.appendChild(objectBeingCreated);
    // e.target.id = idTakenElement;
    // e.target.classList.add("filledField");
    // e.target.textContent = orig.textContent;
    // if (classElementGrandparent !== "collectionFilledFields") {
    //     e.target.style.opacity = "1";
    // }
    // // именно - после всех операций - удаляем содержимое изначального места
    // orig.textContent = "";
}
