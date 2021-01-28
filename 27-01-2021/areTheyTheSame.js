function comp(ar1, ar2) {
    return ar1 != null && ar2 != null && ar1.map(i => i * i).sort().join() == ar2.sort().join()
}

comp = (ar1, ar2) => {
    ar1 = ar1.map((item) => ar2.includes(item ** 2) ? true : false)
    return !ar1.includes(false)
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];