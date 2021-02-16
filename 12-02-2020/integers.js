function listSquared(m, n) {
    let divisorsList = []
    for (let i = m; i <= n; i++) {
        let divisors = [],
            sqrt = 0
        for (let d = i; d > 0; d--) {
            if (i % d == 0) {
                divisors.push(d)
            }
        }
        divisors = divisors.reduce((a, b) => a + (b ** 2), 0)
        sqrt = Math.sqrt(divisors)
        if (sqrt === +sqrt && sqrt === (sqrt | 0)) {
            divisorsList.push([i, divisors])
        }
    }
    return divisorsList
}
