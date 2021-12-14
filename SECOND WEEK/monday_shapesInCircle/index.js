// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idOriginal", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idOriginal");

    // получаем текущий id
    let currentId = e.target.id;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = document.getElementById(currentId);

    // начинаем уборку
    if (currentId === "flowersPlace" || currentId === "redColorPlace") {
        // добавляем объект в корзину
        let tray = document.createElement("div");
        tray.style.height = "50px";
        tray.style.width = "50px";
        tray.style.position = "absolute";
        tray.style.marginTop = e.clientY - 270 + "px";

        if (currentId === "flowersPlace") {
            tray.style.marginLeft = e.clientX - 430 + "px";
        } else {
            tray.style.marginLeft = e.clientX - 600 + "px";
        }

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        currentElement.appendChild(tray).appendChild(objectBeingCreated);

        // заменяем место объекта на квадрат
        orig.src = "./pictures/emptyPlace.svg";
        orig.style.cursor = "default";
        orig.id = "emptyPlace";
    } else {
        currentElement.src = "./pictures/" + idFigure + ".svg";
        currentElement.style.cursor = "grab";
        currentElement.id = idFigure;

        orig.remove();
    }
}

// check implementation

function checkFlowers() {
    const contentFlowersArea = ["blueFlower", "greenFlower", "violetFlower"];
    let resultFor0 = [];

    let length = document.getElementById("flowersPlace").children.length;

    for (let i = 1; i < length; i++) {
        resultFor0.push(
            document.getElementById("flowersPlace").children[i].children[0].id
        );
    }

    if (length === 4) {
        let resultatByFirstObject = contentFlowersArea.includes(resultFor0[0]);
        let resultatBySecondObject = contentFlowersArea.includes(resultFor0[1]);
        let resultatByThirdObject = contentFlowersArea.includes(resultFor0[2]);

        if (
            resultatByFirstObject == true &&
            resultatBySecondObject == true &&
            resultatByThirdObject == true
        ) {
            return "right";
        } else {
            return "wrong";
        }
    } else {
        return "not enough objects";
    }
}

function checkRedColor() {
    const contentRedColorArea = ["redFlower", "socks", "ball", "car", "ruler"];
    let resultFor = [];

    let length2 = document.getElementById("redColorPlace").children.length;

    for (let i = 1; i < length2; i++) {
        resultFor.push(
            document.getElementById("redColorPlace").children[i].children[0].id
        );
    }

    if (length2 === 6) {
        let resultatByFirstObject2 = contentRedColorArea.includes(resultFor[0]);
        let resultatBySecondObject2 = contentRedColorArea.includes(
            resultFor[1]
        );
        let resultatByThirdObject2 = contentRedColorArea.includes(resultFor[2]);
        let resultatByFourthObject2 = contentRedColorArea.includes(
            resultFor[3]
        );
        let resultatByFifthObject2 = contentRedColorArea.includes(resultFor[4]);

        if (
            resultatByFirstObject2 == true &&
            resultatBySecondObject2 == true &&
            resultatByThirdObject2 == true &&
            resultatByFourthObject2 == true &&
            resultatByFifthObject2 == true
        ) {
            return "right";
        } else {
            return "wrong";
        }
    } else {
        return "not enough objects";
    }
}

document.getElementById("submit").onclick = function () {
    let res1 = checkFlowers();
    let res2 = checkRedColor();

    alert(
        "Your choice for flowers space - " +
            res1 +
            ", for red color space - " +
            res2
    );
};
