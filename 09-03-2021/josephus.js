function josephus(items, k) {
    let result = []
    let alive = items
    for (let i = (k - 1); alive.length != 0; i += (k - 1)) {
        if (i > alive.length - 1) {
            i = i % alive.length
        }
        result.push(alive[i])
        alive.splice(i, 1)
    }
    return result
}

// josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))
console.log([3, 6, 2, 7, 5, 1, 4])