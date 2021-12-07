let answerChoice;

// implementation of movement and rotation of the ruler

dragElement(document.getElementsByClassName("ruler")[0]);

const rotationFunction = new Propeller(
    document.getElementsByClassName("ruler")[0],
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

document
    .getElementsByClassName("ruler")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "leftEdge" ||
                e.target.className !== "rightEdge") &&
            e.target.className === "imgRuler"
        ) {
            rotationFunction.stop();
            dragElement(document.getElementsByClassName("ruler")[0]);
        }

        if (
            (e.target.className === "leftEdge" ||
                e.target.className === "rightEdge") &&
            e.target.className !== "imgRuler"
        ) {
            rotationFunction.onRotated(e);
        }
    });

// check implementation

document.getElementById("redBtn").onclick = function () {
    document.getElementById("redBtn").style.background = "red";
    document.getElementById("redBtn").style.color = "white";

    document.getElementById("blueBtn").style.background = "white";
    document.getElementById("blueBtn").style.color = "black";

    document.getElementById("greenBtn").style.background = "white";
    document.getElementById("greenBtn").style.color = "black";

    answerChoice = "верный ответ, молодец";
};

document.getElementById("blueBtn").onclick = function () {
    document.getElementById("blueBtn").style.background = "blue";
    document.getElementById("blueBtn").style.color = "white";

    document.getElementById("redBtn").style.background = "white";
    document.getElementById("redBtn").style.color = "black";

    document.getElementById("greenBtn").style.background = "white";
    document.getElementById("greenBtn").style.color = "black";

    answerChoice = "ответ неверный, можете попробовать ещё раз";
};

document.getElementById("greenBtn").onclick = function () {
    document.getElementById("greenBtn").style.background = "green";
    document.getElementById("greenBtn").style.color = "white";

    document.getElementById("blueBtn").style.background = "white";
    document.getElementById("blueBtn").style.color = "black";

    document.getElementById("redBtn").style.background = "white";
    document.getElementById("redBtn").style.color = "black";

    answerChoice = "ответ неверный, можете попробовать ещё раз";
};

document.getElementById("submit").onclick = function () {
    if (answerChoice) {
        alert(answerChoice);
    } else {
        alert(" сначала необходимо выбрать один из вариантов ");
    }
};
