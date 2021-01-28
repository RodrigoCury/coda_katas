function rgb(r, g, b) {
    function componentToHex(c) {
        c = c > 255 ? 255 : c
        c = c < 0 ? 0 : c
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
    }
    hex = ""
    lista = [r, g, b]
    lista.forEach(n => hex += componentToHex(n))
    return hex
}