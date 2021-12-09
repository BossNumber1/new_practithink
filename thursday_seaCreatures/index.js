// check implementation

let howManyCounted = {
    jellyfish: 0,
    seaHorse: 0,
    result: 0,
};

document.getElementById("numberJellyfish").onchange = function (e) {
    if (e.target.value == 5) {
        howManyCounted.jellyfish = "right";
    } else {
        howManyCounted.jellyfish = "wrong";
    }
};

document.getElementById("numberSeahorses").onchange = function (e) {
    if (e.target.value == 3) {
        howManyCounted.seaHorse = "right";
    } else {
        howManyCounted.seaHorse = "wrong";
    }
};

document.getElementById("result").onchange = function (e) {
    if (e.target.value == 8) {
        howManyCounted.result = "right";
    } else {
        howManyCounted.result = "wrong";
    }
};

document.getElementById("submit").onchange = function (e) {
    alert(
        "your results: number of jellyfish - " +
            howManyCounted.jellyfish +
            ", number of sea horses -" +
            howManyCounted.seaHorse +
            ", total -" +
            howManyCounted.result
    );
};
