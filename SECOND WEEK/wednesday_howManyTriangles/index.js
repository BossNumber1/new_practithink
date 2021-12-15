// check implementation
let answer = "";

document.getElementById("answer").onchange = function (e) {
    if (e.target.value == 2) {
        answer = "right";
    } else {
        answer = "wrong";
    }
};

document.getElementById("submit").onclick = function () {
    if (answer == "") {
        alert("you must fill in the field");
    } else {
        alert(answer + " the number");
    }
};
