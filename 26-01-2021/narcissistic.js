function narcissistic(value) {
    return value == value.toString().split("").map((n, i, array) => n ** array.length).reduce((a, b) => a + b, 0)
}         