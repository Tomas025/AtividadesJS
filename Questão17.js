function somarNumeros(array) {
    let numeros = array
    resultado = numeros[0]

    for (let i in numeros) {
        if (i != 0) resultado += numeros[i]
    }

    return resultado
}

console.log(somarNumeros([15, 15, 15, 15]))