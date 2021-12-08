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
    // // let currentId;
    // // if (e.target.id == e.target.alt) {
    // let currentId = e.target.id ? e.target.id : "square";
    // // } else {
    let currentId = e.target.id;
    // // }
    // получаем объекты
    let orig = document.getElementById(idSign);
    let currentElem = document.getElementById(currentId);
    // меняем поля местами
    // currentElem.appendChild(orig);

    currentElem.parentElement.className = classGrandparentElement;
    currentElem.id = idSign;
    currentElem.textContent = orig.textContent;
    currentElem.setAttribute("draggable", true);

    orig.textContent = "";
    orig.id = currentId;
    orig.parentElement.className = currentClassGrandparent;

    // alert(orig.parentElement.className);

    if (orig.parentElement.parentElement.className !== "inputCollection") {
        orig.style.background = "#369cb7";
    }

    // if (classGrandparentElement === "bottomRow") {
    //     // let pele = orig.parentElement; // получаю родителя
    //     // let pos = pele.dataset.position; // теперь его позицию
    //     orig.parentElement.style.position = "relative";
    //     orig.parentElement.style.display = "flex";
    //     let objectBeingCreated = document.createElement("img");
    //     objectBeingCreated.style.borderRadius = "50px";
    //     objectBeingCreated.style.background = "#369cb7";
    //     objectBeingCreated.style.position = "absolute";
    //     objectBeingCreated.style.width = "50px";
    //     objectBeingCreated.style.height = "50px";
    //     objectBeingCreated.style.top = "0px";
    //     objectBeingCreated.style.right = "0px";
    //     objectBeingCreated.style.zIndex = 10;
    //     // objectBeingCreated.id = "cape";
    //     orig.parentElement.appendChild(objectBeingCreated);
    //     // orig.id = currentId;
    // } else {
    //     orig.src = "./pictures/" + currentId + ".svg";
    //     // orig.id = currentId;
    // }
    // console.log("idSign =", idSign, " / currentId =", currentId);
    // currentElem.id = idSign;
    // currentElem.src = "./pictures/" + idSign + ".svg";
    // if (currentId.parentElement === "square") {
    //     e.target.parentElement.className = "number";
    // } else {
    //     e.target.parentElement.className = "square";
    // }
    // if (classGrandparentElement !== "bottomRow") {
    //     e.target.style.opacity = "1";
    // }
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

let selected = { amountIceCream: 0, amountFlowers: 0 };

document.getElementById("amountIceCream").onchange = function (e) {
    if (e.target.value == 6) {
        selected.amountIceCream = "right";
    } else {
        selected.amountIceCream = "wrong";
    }
};

document.getElementById("amountFlowers").onchange = function (e) {
    if (e.target.value == 6) {
        selected.amountFlowers = "right";
    } else {
        selected.amountFlowers = "wrong";
    }
};

// submit

document.getElementById("submit").onclick = function () {
    alert(
        "your result: by ice cream - " +
            selected.amountIceCream +
            ", by flowers - " +
            selected.amountFlowers
    );
};
