// drag and drop implementation

function dragStart(e) {
    // alert("goood");
    // localStorage.setItem("idTakenNumber", e.target.id);
    // localStorage.setItem(
    //     "classGrandparent",
    //     e.target.parentElement.parentElement.className
    // );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    alert("op!");
    // // получаем id взятого элемента и класс прародителя
    // let idTakenNumber = localStorage.getItem("idTakenNumber")
    //     ? localStorage.getItem("idTakenNumber")
    //     : "square";
    // let classGrandparent = localStorage.getItem("classGrandparent");
    // // берем id того элемента, на который положим несомый
    // // let currentId;
    // // if (e.target.id == e.target.alt) {
    // let currentId = e.target.id ? e.target.id : "square";
    // // } else {
    // //     currentId = e.target.alt;
    // // }
    // // получаем объекты
    // let orig = document.getElementById(idTakenNumber);
    // let currentElem = document.getElementById(currentId);
    // // меняем поля местами
    // orig.id = currentId;
    // if (classGrandparent === "bottomRow") {
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
    // console.log("idTakenNumber =", idTakenNumber, " / currentId =", currentId);
    // currentElem.id = idTakenNumber;
    // currentElem.src = "./pictures/" + idTakenNumber + ".svg";
    // if (currentId.parentElement === "square") {
    //     e.target.parentElement.className = "number";
    // } else {
    //     e.target.parentElement.className = "square";
    // }
    // if (classGrandparent !== "bottomRow") {
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
