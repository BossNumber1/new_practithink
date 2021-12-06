// drag and drop implementation

function dragStart(event) {
    localStorage.setItem("appleIdStarted", event.target.id);
    localStorage.setItem("positionAppleInRow", event.target.dataset.position);
    localStorage.setItem("parentElementIdStart", event.target.parentElement.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop() {
    // забираем данные из хранилища

    let parentElementIdStart = localStorage.getItem("parentElementIdStart");
    let figureId = localStorage.getItem("appleIdStarted");
    let positionAppleInRow = localStorage.getItem("positionAppleInRow");

    // начинаем ложить яблоко в корзину
    if (parentElementIdStart !== "appleInBasket" + positionAppleInRow) {
        let selectedFigure = document.getElementById(figureId); // получаем картинку для вставки

        let objectBeingCreated = document.createElement("div");
        objectBeingCreated.style.cursor = "grab";
        objectBeingCreated.id = "appleInBasket" + positionAppleInRow;

        document
            .getElementsByClassName("appleInBasket2row")[0]
            .appendChild(objectBeingCreated)
            .appendChild(selectedFigure);

        // создаём копию и ставим на место оригинала

        let copyBeingCreated = document.createElement("img");
        copyBeingCreated.src = "./pictures/apple.svg";
        copyBeingCreated.id = figureId;
        copyBeingCreated.setAttribute("data-position", positionAppleInRow);
        copyBeingCreated.style.opacity = "0.5";
        copyBeingCreated.style.cursor = "default";

        let newPlaceSelectedApple =
            document.getElementsByClassName("appleInRow")[positionAppleInRow];
        newPlaceSelectedApple.appendChild(copyBeingCreated);
    }

    // делаем возврат на место

    if (parentElementIdStart === "appleInBasket" + positionAppleInRow) {
        // убираем яблоко из корзины
        document.getElementById(parentElementIdStart).remove();

        // возвращаем прозрачность положенному яблоку
        let returnedApple =
            document.getElementsByClassName("appleInRow")[positionAppleInRow];
        returnedApple.children[0].style.opacity = "1";
    }
}

// summing up

document.getElementById("submit").onclick = function () {
    let basket = document.getElementsByClassName("appleInBasket2row")[0];

    if (basket.children.length === 5) {
        alert(" молодец! верный выбор ");
    } else {
        alert(" необходимо другое число яблок ");
    }
};
