function alphabetPosition(text) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return text.toLowerCase()
        .split("")
        .filter(letter => alphabet.includes(letter))
        .map(letter => alphabet.indexOf(letter) + 1).join(" ")
}

function alphabetPositionCharCodeAt(text) {
    return text.toUpperCase()
        .split("")
        .filter(letter => letter.charCodeAt() < 91 && letter.charCodeAt() > 64)
        .map(letter => letter.charCodeAt() - 64).join(" ")
}
