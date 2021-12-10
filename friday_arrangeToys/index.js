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

    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (idFigure != "car" && idFigure != "robot" && idFigure != "pyramid") {
        currentElement.src = "./pictures/" + idFigure.slice(0, -1) + ".svg";
        currentElement.style.cursor = "grab";
        orig.src = "./pictures/" + idFigure + ".svg";
        orig.style.cursor = "default";
    } else {
        currentElement.src = "./pictures/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        orig.src = "./pictures/" + currentId.slice(0, -1) + ".svg";
        orig.style.cursor = "default";
    }

    // поменять id для дальнейших переносок
    currentElement.id = idFigure;
    orig.id = currentId;
}

// check implementation

let choice = {
    topSeat: "",
    centralSeat: "",
    bottomSeat: "",
};

document.getElementById("submit").onclick = function () {
    let topSeat = document.getElementById("topSeat");
    let centralSeat = document.getElementById("centralSeat");
    let bottomSeat = document.getElementById("bottomSeat");

    if (topSeat.children[0].id === "pyramid") {
        choice.topSeat = "right";
    } else {
        choice.topSeat = "wrong";
    }

    if (centralSeat.children[0].id === "car") {
        choice.centralSeat = "right";
    } else {
        choice.centralSeat = "wrong";
    }

    if (bottomSeat.children[0].id === "robot") {
        choice.bottomSeat = "right";
    } else {
        choice.bottomSeat = "wrong";
    }

    let numberCorrectlyPlacedToys = 0;

    for (let index in choice) {
        if (choice[index] === "right") numberCorrectlyPlacedToys++;
    }

    if (numberCorrectlyPlacedToys === 3) {
        alert("you are great, everything is right");
    } else {
        alert("toys placed incorrectly, try again");
    }
};
