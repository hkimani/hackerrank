function rotLeft(a, d) {
    // Splice used to add or remove elements in the array
    var elements = a.splice(0, d)

    // spread operator concatenate elements to the already existing array
    a.push(...elements)
    return a
}