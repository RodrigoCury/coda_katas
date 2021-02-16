function validParentheses(parens) {
    while (parens.includes("()")) {
        parens = parens.replace("()", "")
    }
    return parens == ""
}

function valid(parens) {
    for (var i = 0; i < parens.length; i++) {
        parens = parens.replace("()", "")
    }
    console.log(parens == "")
    return parens == "" && parens.length == 0
}

list = { m: 1 }
for (bucetao in list) {
    console.log(list[bucetao])
}

