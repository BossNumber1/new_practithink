// drag and drop implementation
function dragStart(event) {
    localStorage.setItem("idOriginala", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOriginala");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orig = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/" + nameObjectOrig + ".svg";
    orig.src = "./pictures/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orig.id = currentId;
}

// check implementation
document.getElementById("submit").onclick = function (e) {
    let idChild0 = document.getElementById("place0").children[1].id;
    let idChild1 = document.getElementById("place1").children[1].id;
    let idChild2 = document.getElementById("place2").children[1].id;

    if (
        idChild0.slice(0, -1) === "stars" &&
        idChild1.slice(0, -1) === "rectangles" &&
        idChild2.slice(0, -1) === "pentagons"
    ) {
        alert("the right choice");
    } else {
        alert("the wrong choice");
    }
};
