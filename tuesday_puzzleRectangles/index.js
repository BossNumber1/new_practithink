//  common and initialization

dragElement(document.getElementsByClassName("firstTriangle")[0]);
dragElement(document.getElementsByClassName("secondTriangle")[0]);

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
        if (
            (e.target.className !== "leftCorners" ||
                e.target.className !== "rightCorner") &&
            e.target.className === "mainImgSecondTriangle"
        ) {
            rotationFunctionForSecondTriangle.stop();
            dragElement(document.getElementsByClassName("secondTriangle")[0]);
        }

        if (
            (e.target.className === "leftCorners" ||
                e.target.className === "rightCorner") &&
            e.target.className !== "mainImgSecondTriangle"
        ) {
            rotationFunctionForSecondTriangle.onRotated(e);
        }
    });
