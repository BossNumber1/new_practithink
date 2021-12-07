// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenDiv", event.target.id);
    // localStorage.setItem("categoryDiv", event.target.dataset.name);

    localStorage.setItem(
        "classElementGrandparent",
        event.target.parentElement.parentElement.className
    );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    console.log("yoh!");
    // получаем id несомого элемента и класс прародителя
    let idTakenDiv = localStorage.getItem("idTakenDiv");
    let classElementGrandparent = localStorage.getItem(
        "classElementGrandparent"
    );

    // let categoryDiv = localStorage.getItem("categoryDiv");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // let currentName = e.target.dataset.name;

    // меняем поля местами
    let orig = document.getElementById(idTakenDiv);
    orig.id = currentId;

    if (classElementGrandparent === "collectionFilledFields") {
        orig.style.background = "#369cb7";
        orig.style.opacity = "0.5";
    } else {
        orig.classList.remove("filledField");
    }

    // orig.setAttribute("data-name", currentName);

    e.target.id = idTakenDiv;
    e.target.classList.add("filledField");
    e.target.textContent = orig.textContent;

    if (classElementGrandparent !== "collectionFilledFields") {
        e.target.style.opacity = "1";
    }
    // e.target.setAttribute("data-name", categoryDiv);

    // именно - после всех операций - удаляем содержимое изначального места
    orig.textContent = "";
}
