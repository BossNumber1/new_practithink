// check implementation

let selectBtn = "right";

let elements = document.getElementsByClassName("row");

document.getElementById("balloon").onclick = function () {
    document.getElementById("balloon").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("book").onclick = function () {
    document.getElementById("book").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("truck").onclick = function () {
    document.getElementById("truck").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("feather").onclick = function () {
    document.getElementById("feather").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("car").onclick = function () {
    document.getElementById("car").classList.add("selectedPicture");

    selectBtn = "right";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
};

document.getElementById("submit").onclick = function () {
    alert("you have selected the " + selectBtn + " object");
};
