function generateHashtag(str) {
    str = str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))).replace(/\s/g, "");
    if (str == "" || str.length >= 140) {
        return false
    } else {
        return "#" + str
    }
}
console.log("code wars".replace(" ", ""))
console.log(generateHashtag(' code wars'))