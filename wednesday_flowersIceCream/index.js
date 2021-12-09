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
        orig.style.background = "#c2e1e9";
    }
}

// check implementation

let selected = { amountIceCream: 0, amountFlowers: 0, sign: "" };

document.getElementById("amountIceCream").onchange = function (e) {
    if (e.target.value == 6) {
        selected.amountIceCream = "right";
    } else {
        selected.amountIceCream = "wrong";
    }
};

document.getElementById("amountFlowers").onchange = function (e) {
    if (e.target.value == 7) {
        selected.amountFlowers = "right";
    } else {
        selected.amountFlowers = "wrong";
    }
};

document.getElementById("submit").onclick = function () {
    let selectedSign =
        document.getElementsByClassName("inputCollection")[0].children[1]
            .textContent;

    selectedSign = selectedSign.replace(/\s/g, "");

    debugger;
    if (selectedSign == "<") {
        selected.sign = "right";
    } else {
        selected.sign = "wrong";
    }

    alert(
        "your result: by ice cream - " +
            selected.amountIceCream +
            ", by flowers - " +
            selected.amountFlowers +
            ", by sign - " +
            selected.sign
    );
};
