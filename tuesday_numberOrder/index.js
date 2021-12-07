// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenCube", event.target.id);
    localStorage.setItem("nameCube", event.target.dataset.name);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id и имя несомого элемента
    let idTakenCube = localStorage.getItem("idTakenCube");
    let nameCube = localStorage.getItem("nameCube");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;
    let currentName = e.target.dataset.name;
    debugger;
    // меняем картинки местами
    let orig = document.getElementById(idTakenCube);
    orig.src = "./pictures/" + currentName + ".svg";
    orig.id = currentId;
    orig.setAttribute("data-name", currentName);
    orig.parentElement.style.cursor = "default";

    e.target.src = "./pictures/" + nameCube + ".svg";
    e.target.id = idTakenCube;
    e.target.setAttribute("data-name", nameCube);
    e.target.parentElement.style.cursor = "grab";
}

// value checking implementation

let resultChecking = { more: "", smaller: "", equals: "" };

document.getElementById("more").onchange = function (e) {
    if (e.target.value == "42") {
        resultChecking.more = "верно";
    } else {
        resultChecking.more = "не верно";
    }
};

document.getElementById("smaller").onchange = function (e) {
    if (e.target.value == "37") {
        resultChecking.smaller = "верно";
    } else {
        resultChecking.smaller = "не верно";
    }
};

document.getElementById("equals").onchange = function (e) {
    if (e.target.value == "5") {
        resultChecking.equals = "верно";
    } else {
        resultChecking.equals = "не верно";
    }
};

document.getElementById("submit").onclick = function () {
    if (
        resultChecking.more !== "" &&
        resultChecking.smaller !== "" &&
        resultChecking.equals !== ""
    ) {
        alert(
            "первое поле - " +
                resultChecking.more +
                ", второе - " +
                resultChecking.smaller +
                ", третье - " +
                resultChecking.equals
        );
    } else {
        alert("сначала стоит заполнить все поля");
    }
};
