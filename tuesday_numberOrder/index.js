// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("idTakenDiv", event.target.id);
    // localStorage.setItem("categoryDiv", event.target.dataset.name);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // получаем id и имя несомого элемента
    let idTakenDiv = localStorage.getItem("idTakenDiv");
    // let categoryDiv = localStorage.getItem("categoryDiv");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // let currentName = e.target.dataset.name;

    // меняем поля местами
    let orig = document.getElementById(idTakenDiv);
    // orig.src = "./pictures/" + currentName + ".svg";
    orig.id = currentId;
    orig.classList.remove("filledField");

    // orig.setAttribute("data-name", currentName);
    // orig.parentElement.style.cursor = "default";

    // e.target.src = "./pictures/" + categoryDiv + ".svg";
    e.target.id = idTakenDiv;
    e.target.classList.add("filledField");
    e.target.textContent = orig.textContent;
    // e.target.setAttribute("data-name", categoryDiv);
    // e.target.parentElement.style.cursor = "grab";

    // именно - после всех операций - удаляем содержимое изначального места
    orig.textContent = "";
}
