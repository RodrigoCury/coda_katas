function humanReadable(seconds) {
    var hours = seconds / 3600 >> 0;
    var minutes = (seconds - (hours * 3600)) / 60 >> 0;
    var second = seconds - (hours * 3600) - (minutes * 60);
    toTwoDigits = (h) => {
        h = h.toString()
        if (h.length == 2) {
            return h
        }
        return "0" + h
    }
    return `${toTwoDigits(hours)}:${toTwoDigits(minutes)}:${toTwoDigits(second)}`
}