// drag and drop implementation

function dragStart(e) {
    localStorage.setItem("idFigure", e.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idFigure");

    // получаем класс предка предка
    let grandparentClass = e.target.parentElement.parentElement.className;

    // получаем текущий id
    let currentId = e.target.id;

    // начинаем ложить фигуру в корзину

    let orig = document.getElementById(idFigure); // для начала получаем картинку для вставки

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = idFigure;
    objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "3px";

    if (grandparentClass !== "topRow" || grandparentClass !== "bottomRow") {
        document
            .getElementById(currentId)
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);
    }

    // создаём копию и ставим на место оригинала

    orig.style.opacity = "0.5";
    orig.style.cursor = "default";

    // делаем возврат на место

    if (grandparentClass === "topRow" || grandparentClass === "bottomRow") {
        e.target.style.opacity = "1";
        orig.remove();
    }
}

// check implementation

let answers = { hearts: 0, stars: 0, rhombus: 0 };

document.getElementById("numberHearts").onchange = function (e) {
    if (e.target.value == 6) {
        answers.hearts = "right";
    } else {
        answers.hearts = "wrong";
    }
};

document.getElementById("numberStars").onchange = function (e) {
    if (e.target.value == 4) {
        answers.stars = "right";
    } else {
        answers.stars = "wrong";
    }
};

document.getElementById("numberRhombus").onchange = function (e) {
    if (e.target.value == 4) {
        answers.rhombus = "right";
    } else {
        answers.rhombus = "wrong";
    }
};

document.getElementById("submit").onclick = function () {
    alert(
        "your choice: for hearts - " +
            answers.hearts +
            ", for stars - " +
            answers.stars +
            ", for rhombus - " +
            answers.rhombus
    );
};
