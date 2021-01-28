const countBits = function (n) {
    sum = 0
    n.toString(2).split("").forEach(num => {
        if (num == "1") {
            sum++
        }
    })
    return sum
};

// Refactored

const countBits = n => n.toString(2).split("0").join("").length