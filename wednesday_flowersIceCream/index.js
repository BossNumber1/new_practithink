let selected = { amountIceCream: 0, amountFlowers: 0 };

document.getElementById("amountIceCream").onchange = function (e) {
    if (e.target.value == 6) {
        selected.amountIceCream = "right";
    } else {
        selected.amountIceCream = "wrong";
    }
};

document.getElementById("amountFlowers").onchange = function (e) {
    if (e.target.value == 6) {
        selected.amountFlowers = "right";
    } else {
        selected.amountFlowers = "wrong";
    }
};

// submit

document.getElementById("submit").onclick = function () {
    alert(
        "your result: by ice cream - " +
            selected.amountIceCream +
            ", by flowers - " +
            selected.amountFlowers
    );
};
