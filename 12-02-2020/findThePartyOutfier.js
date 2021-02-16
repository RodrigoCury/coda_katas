function findOutlier(integers) {
    let count = 0
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 == 0) {
            count++
        } else {
            count--
        }
    }
    if (count > 0) {
        for (let i in integers) {
            if (integers[i] % 2 != 0) {
                return integers[i]
            }
        }
    } else {
        for (let i in integers) {
            if (integers[i] % 2 == 0) {
                return integers[i]
            }
        }
    }
}

function findOutlier(integers) {
    let filter = integers.filter(int => int % 2 == 0)
    if (filter.length > 1) {
        filter = integers.filter(int => int % 2 != 0)
        return filter[0]
    } else {
        return filter[0]
    }
}