function evaporator(content, evap_per_day, threshold) {
    let days = 0
    threshold = content * threshold / 100
    while (content > threshold) {
        content -= content * evap_per_day / 100
        days++
    }
    return days
}

console.log(evaporator(10, 10, 10))