function filter_list(l) {
    filtered = []
    l.forEach(i => {
        if (typeof i == "number") {
            filtered.push(i)
        }
    })
    return filtered
}