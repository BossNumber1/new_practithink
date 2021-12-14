// check implementation

let selectBtn;

let elements = document.getElementsByClassName("row");

document.getElementById("balloon").onclick = function (e) {
    document.getElementById("balloon").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("book").onclick = function (e) {
    document.getElementById("book").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("truck").onclick = function (e) {
    document.getElementById("truck").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("feather").onclick = function (e) {
    document.getElementById("feather").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("car").classList.remove("selectedPicture");
};

document.getElementById("car").onclick = function (e) {
    document.getElementById("car").classList.add("selectedPicture");

    selectBtn = "wrong";

    document.getElementById("balloon").classList.remove("selectedPicture");
    document.getElementById("book").classList.remove("selectedPicture");
    document.getElementById("truck").classList.remove("selectedPicture");
    document.getElementById("feather").classList.remove("selectedPicture");
};
