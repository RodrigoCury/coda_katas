function highAndLow(numbers) {
    high = -999999999
    low = 99999999999
    numbers.split(" ").forEach(n => {
        if (high < parseInt(n, 10)) { high = n }
        if (low > parseInt(n, 10)) { low = n }
    })
    return `${high} ${low}`
}