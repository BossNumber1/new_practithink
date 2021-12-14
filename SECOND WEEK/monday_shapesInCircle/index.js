// drag and drop implementation

function dragStart(e) {
    localStorage.setItem("idOriginal", e.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    e = e || window.event;

    // забираем данные из хранилища
    let idFigure = localStorage.getItem("idOriginal");

    // получаем позицию области для вставки
    let positionCircleArea = e.target.dataset.position;

    // получаем текущий id
    let currentId = e.target.id;
    let currentClass = e.target.className;

    // получаем картинки
    let orig = document.getElementById(idFigure);
    let currentElement = currentId
        ? document.getElementById(currentId)
        : currentClass === "background-circle" && positionCircleArea === "2"
        ? document.getElementsByClassName("background-circle")[1]
        : document.getElementsByClassName("circle-container")[
              positionCircleArea
          ];

    // начинаем уборку
    if (
        currentClass === "circle-container" ||
        currentClass === "circle-container right-circle-container" ||
        currentClass === "background-circle"
    ) {
        // добавляем объект в корзину
        let tray = document.createElement("div");
        tray.style.height = "50px";
        tray.style.width = "50px";
        tray.style.position = "absolute";
        tray.style.marginTop = e.offsetY + "px";
        tray.style.marginLeft = e.offsetX + "px";

        let objectBeingCreated = document.createElement("img");
        objectBeingCreated.src = "./pictures/" + idFigure + ".svg";
        objectBeingCreated.id = idFigure;

        if (currentClass !== "circle-container") {
            objectBeingCreated.style.transform = "rotate(180deg)";
        }

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

    let length =
        document.getElementsByClassName("circle-container")[0].children.length;

    for (let i = 1; i < length; i++) {
        resultFor0.push(
            document.getElementsByClassName("circle-container")[0].children[i]
                .children[0].id
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
    const contentRedColorArea = ["socks", "ball", "car", "ruler"];
    let resultFor = [];

    let element = document.getElementsByClassName(
        "circle-container right-circle-container"
    )[0];

    if (element.className === "circle-container right-circle-container") {
        let length2 = element.children.length;

        for (let i = 1; i < length2; i++) {
            resultFor.push(
                document.getElementsByClassName("circle-container")[1].children[
                    i
                ].children[0].id
            );
        }

        if (length2 === 5) {
            let resultatByFirstObject2 = contentRedColorArea.includes(
                resultFor[0]
            );
            let resultatBySecondObject2 = contentRedColorArea.includes(
                resultFor[1]
            );
            let resultatByThirdObject2 = contentRedColorArea.includes(
                resultFor[2]
            );
            let resultatByFourthObject2 = contentRedColorArea.includes(
                resultFor[3]
            );

            if (
                resultatByFirstObject2 == true &&
                resultatBySecondObject2 == true &&
                resultatByThirdObject2 == true &&
                resultatByFourthObject2 == true
            ) {
                return "right";
            } else {
                return "wrong";
            }
        } else {
            return "not enough objects";
        }
    }
}

function checkIntersection() {
    let element = document.getElementsByClassName("background-circle")[1];

    if (element.children.length === 1) {
        if (element.children[0].children[0].id === "redFlower") {
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
    let res3 = checkIntersection();

    alert(
        "Your choice for flowers space - " +
            res1 +
            ", for red color space - " +
            res2 +
            ", for Intersection space - " +
            res3
    );
};
