function receberSomenteOsParesDeIndicesPares(array) {
    let numeros = array
    let numerosPares = []
    indice = 0

    for (let i in numeros) {
        if (i % 2 == 0 && numeros[i] % 2 == 0) numerosPares.push(numeros[i])
    }

    return numerosPares
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))