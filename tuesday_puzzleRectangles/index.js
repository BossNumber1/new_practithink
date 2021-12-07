//  common and initialization

dragElement(document.getElementsByClassName("firstTriangle")[0]);
dragElement2(document.getElementsByClassName("secondTriangle")[0]);

const rotationFunctionForFirstTriangle = new Propeller(
    document.getElementsByClassName("firstTriangle")[0],
    {
        inertia: 0,
    }
);

const rotationFunctionForSecondTriangle = new Propeller(
    document.getElementsByClassName("secondTriangle")[0],
    {
        inertia: 0,
    }
);

function dragElement(element) {
    // alert("exc");
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// temp

function dragElement2(element) {
    // alert("exc!!");
    let pos10 = 0,
        pos20 = 0,
        pos30 = 0,
        pos40 = 0;

    element.onmousedown = dragMouseDown2;

    function dragMouseDown2(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos30 = e.clientX;
        pos40 = e.clientY;
        document.onmouseup = closeDragElement2;
        document.onmousemove = elementDrag2;
    }

    function elementDrag2(e) {
        // console.log("hhh");
        e = e || window.event;
        // calculate the new cursor position:
        pos10 = pos30 - e.clientX;
        pos20 = pos40 - e.clientY;
        pos30 = e.clientX;
        pos40 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos20 + "px";
        element.style.left = element.offsetLeft - pos10 + "px";
    }

    function closeDragElement2() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// implementation of movement and rotation of the first triangle

document
    .getElementsByClassName("firstTriangle")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "topСorner" ||
                e.target.className !== "bottomСorners") &&
            e.target.className === "mainImg"
        ) {
            rotationFunctionForFirstTriangle.stop();
            dragElement(document.getElementsByClassName("firstTriangle")[0]);
        }

        if (
            (e.target.className === "topСorner" ||
                e.target.className === "bottomСorners") &&
            e.target.className !== "mainImg"
        ) {
            rotationFunctionForFirstTriangle.onRotated(e);
        }
    });

// implementation of movement and rotation of the second triangle

document
    .getElementsByClassName("secondTriangle")[0]
    .addEventListener("mousedown", (e) => {
        // alert("exc");
        if (
            (e.target.className !== "leftCorners" ||
                e.target.className !== "rightCorner") &&
            e.target.className === "mainImgSecondTriangle"
        ) {
            // alert("god");
            rotationFunctionForSecondTriangle.stop();
            dragElement2(document.getElementsByClassName("secondTriangle")[0]);
        }

        if (
            (e.target.className === "leftCorners" ||
                e.target.className === "rightCorner") &&
            e.target.className !== "mainImgSecondTriangle"
        ) {
            // alert("ogoo");
            rotationFunctionForSecondTriangle.onRotated(e);
        }
    });

document.getElementById("submit").onclick = function () {
    // Дано:

    // функция для получения координат фигуры

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
        };
    }

    // Надо: ...

    // Решение:

    // 1. получаем координаты треугольников

    // - беру первый треугольник
    let firstTriangle = document.getElementsByClassName("firstTriangle")[0];

    // - получаю его координаты
    let coordElem = getCoords(firstTriangle);

    // 2. сравниваю их с координатами прямоугольника
    if (
        coordElem.left < 570 &&
        coordElem.left > 560 &&
        coordElem.top < 220 &&
        coordElem.top > 200
    ) {
        alert("uraaa");
    } else {
        alert("ahaha");
    }

    // ... если верно, то...

    // left 565
    // top 210 - прямоугольника
};
