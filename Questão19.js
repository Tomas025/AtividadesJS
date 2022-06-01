function calcularMedia(array) {
    media = 0
    indice = 0
    for (let i in array) {
        media += array[i]
        indice++
    }
    
    media /= indice

    return media
}

console.log(calcularMedia([1, 2, 3, 4, 5]))