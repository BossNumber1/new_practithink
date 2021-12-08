let selected = { amountIceCream: 0, amountFlowers: 0 };

document.getElementById("amountIceCream").onchange = function (e) {
    selected.amountIceCream = e.target.value;
};

document.getElementById("amountFlowers").onchange = function (e) {
    selected.amountFlowers = e.target.value;
};

// submit

document.getElementById("submit").onclick = function () {
    alert(
        "you decided that we have " +
            selected.amountIceCream +
            " ice creams & " +
            selected.amountFlowers +
            " flowers"
    );
};
