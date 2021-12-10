// drag and drop implementation

function dragStart(e) {
    localStorage.setItem("idFigure", e.target.id);
    // localStorage.setItem("positionAppleInRow", event.target.dataset.position);
    // localStorage.setItem("parentElementIdStart", event.target.parentElement.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(e) {
    // забираем данные из хранилища

    // let parentElementIdStart = localStorage.getItem("parentElementIdStart");
    let idFigure = localStorage.getItem("idFigure");
    // let positionAppleInRow = localStorage.getItem("positionAppleInRow");

    // получаем текущий id
    let currentId = e.target.id;
    let grandparentClass = e.target.parentElement.parentElement.className;

    console.log("currentId =", currentId);

    // получаем фигуру...

    // начинаем ложить фигуру в корзину

    // if (parentElementIdStart !== "appleInBasket" + positionAppleInRow) {
    let orig = document.getElementById(idFigure); // получаем картинку для вставки

    let objectBeingCreated = document.createElement("img");
    objectBeingCreated.id = idFigure.slice(0, -1);
    objectBeingCreated.src = "./pictures/" + idFigure.slice(0, -1) + ".svg";
    objectBeingCreated.style.cursor = "grab";
    objectBeingCreated.style.marginTop = "5px";
    objectBeingCreated.style.marginLeft = "5px";

    //     objectBeingCreated.id = "appleInBasket" + positionAppleInRow;

    if (grandparentClass !== "topRow") {
        document
            .getElementsByClassName("placeDroppingFigures")[0]
            .appendChild(document.createElement("div"))
            .appendChild(objectBeingCreated);
    }

    // создаём копию и ставим на место оригинала

    orig.style.opacity = "0.5";
    orig.style.cursor = "default";

    //     let copyBeingCreated = document.createElement("img");
    //     copyBeingCreated.src = "./pictures/apple.svg";
    //     copyBeingCreated.id = idFigure;
    //     copyBeingCreated.setAttribute("data-position", positionAppleInRow);
    //     copyBeingCreated.style.opacity = "0.5";
    //     copyBeingCreated.style.cursor = "default";
    //     let newPlaceSelectedApple =
    //         document.getElementsByClassName("appleInRow")[positionAppleInRow];
    //     newPlaceSelectedApple.appendChild(copyBeingCreated);
    // }

    // делаем возврат на место

    // console.log("grandpele =", e.target.parentElement.parentElement.className);

    if (grandparentClass === "topRow") {
        e.target.style.opacity = "1";
        // document.getElementById("heart").remove();
        orig.remove();
        // orig.remove();
    }
    // if (parentElementIdStart === "appleInBasket" + positionAppleInRow) {
    //     // убираем яблоко из корзины
    //     document.getElementById(parentElementIdStart).remove();
    //     // возвращаем прозрачность положенному яблоку
    //     let returnedApple =
    //         document.getElementsByClassName("appleInRow")[positionAppleInRow];
    //     returnedApple.children[0].style.opacity = "1";
    // }
}
