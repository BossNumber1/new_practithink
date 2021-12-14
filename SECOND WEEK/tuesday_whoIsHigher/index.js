// check implementation

let selectBtn;

document.getElementById("btnSelectTom").onclick = function () {
    document.getElementById("btnSelectTom").style.backgroundColor = "#369CB7";
    document.getElementById("btnSelectTom").style.color = "white";

    selectBtn = "wrong";

    document.getElementById("btnSelectMike").style.backgroundColor = "white";
    document.getElementById("btnSelectMike").style.color = "black";
    document.getElementById("btnSelectJack").style.backgroundColor = "white";
    document.getElementById("btnSelectJack").style.color = "black";
};

document.getElementById("btnSelectMike").onclick = function () {
    document.getElementById("btnSelectMike").style.backgroundColor = "#369CB7";
    document.getElementById("btnSelectMike").style.color = "white";

    selectBtn = "right";

    document.getElementById("btnSelectTom").style.backgroundColor = "white";
    document.getElementById("btnSelectTom").style.color = "black";
    document.getElementById("btnSelectJack").style.backgroundColor = "white";
    document.getElementById("btnSelectJack").style.color = "black";
};

document.getElementById("btnSelectJack").onclick = function () {
    document.getElementById("btnSelectJack").style.backgroundColor = "#369CB7";
    document.getElementById("btnSelectJack").style.color = "white";

    selectBtn = "wrong";

    document.getElementById("btnSelectTom").style.backgroundColor = "white";
    document.getElementById("btnSelectTom").style.color = "black";
    document.getElementById("btnSelectMike").style.backgroundColor = "white";
    document.getElementById("btnSelectMike").style.color = "black";
};

document.getElementById("submit").onclick = function () {
    alert("you made the " + selectBtn + " choice");
};
