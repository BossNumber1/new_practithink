// drag and drop implementation

function dragStart(e) {
    localStorage.setItem("idSign", e.target.id);
    localStorage.setItem(
        "classGrandparentElement",
        e.target.parentElement.className
    );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id взятого элемента и класс прародителя
    let idSign = localStorage.getItem("idSign");
    let classGrandparentElement = localStorage.getItem(
        "classGrandparentElement"
    );

    let currentClassGrandparent = e.target.parentElement.className;

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orig = document.getElementById(idSign);
    let currentElem = document.getElementById(currentId);

    // меняем поля местами
    currentElem.parentElement.className = classGrandparentElement;
    currentElem.id = idSign;
    currentElem.textContent = orig.textContent;
    currentElem.setAttribute("draggable", true);

    orig.textContent = "";
    orig.id = currentId;
    orig.parentElement.className = currentClassGrandparent;

    if (orig.parentElement.parentElement.className !== "inputCollection") {
        orig.style.background = "#369cb7";
    }
}

// check implementation

document.getElementById("submit").onclick = function () {
    alert(
        "your result: by ice cream - " +
            selected.amountIceCream +
            ", by flowers - " +
            selected.amountFlowers
    );
};
