function stat(strg) {
    const getSeconds = (hour => {
        return [hour[0] * 3600, hour[1] * 60, hour[2]].reduce((a, b) => a + b, 0)
    })
    const getTime = seconds => {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds - (hours * 3600)) / 60);
        var second = seconds - (hours * 3600) - (minutes * 60);
        return [hours, minutes, second].map(n => n.toString()).map(n => n.length == 1 ? "0" + n : n).join("|")
    }
    const separated = strg.split(", ").map(hour => hour.split("|")
        .map(digits => parseInt(digits))).map(hour => getSeconds(hour)).sort((a, b) => a - b)

    const range = seconds => {
        let r = Math.max(...seconds) - Math.min(...seconds)
        return r
    }

    const average = seconds => {
        return Math.floor(seconds.reduce((a, b) => a + b, 0) / seconds.length)
    }

    const median = seconds => {
        if (seconds.length % 2 == 0) {
            return seconds[seconds.length / 2 + 1]
        } else {
            return seconds[Math.floor(seconds.length / 2)]
        }
    }

    return `Range: ${getTime(range(separated))} Average: ${getTime(average(separated))} Median: ${getTime(median(separated))}`
}

console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))
