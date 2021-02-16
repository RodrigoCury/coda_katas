function findMissingLetter(array) {
    curr = array[0].charCodeAt()
    for (let i = 1; i < array.length; i++) {
        next = array[i].charCodeAt()
        if (next != curr + 1) {
            return String.fromCharCode(curr + 1)
        }
        curr = next
    }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))