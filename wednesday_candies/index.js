// drag and drop implementation

function dragStart(event) {
    // localStorage.setItem("idTakenDiv", event.target.id);
    // localStorage.setItem(
    //     "classElementGrandparent",
    //     event.target.parentElement.parentElement.className
    // );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    alert("yess 2!");
    // // получаем id несомого элемента и класс прародителя
    // let idTakenDiv = localStorage.getItem("idTakenDiv");
    // let classElementGrandparent = localStorage.getItem(
    //     "classElementGrandparent"
    // );
    // // берем id того элемента, на который положим несомый
    // let currentId = e.target.id;
    // // меняем поля местами
    // let orig = document.getElementById(idTakenDiv);
    // orig.id = currentId;
    // if (classElementGrandparent === "collectionFilledFields") {
    //     orig.style.background = "#369cb7";
    //     orig.style.opacity = "0.5";
    // } else {
    //     orig.classList.remove("filledField");
    // }
    // e.target.id = idTakenDiv;
    // e.target.classList.add("filledField");
    // e.target.textContent = orig.textContent;
    // if (classElementGrandparent !== "collectionFilledFields") {
    //     e.target.style.opacity = "1";
    // }
    // // именно - после всех операций - удаляем содержимое изначального места
    // orig.textContent = "";
}
