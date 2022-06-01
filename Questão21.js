function menorNumero(array) {
    let arrayOrdenado = array.sort((a,b) => a-b)

    return arrayOrdenado[0]
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))