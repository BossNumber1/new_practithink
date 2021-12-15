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
