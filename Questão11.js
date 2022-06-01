function receberPrimeiroEUltimoElemento(array) {
    let indice = array.length;
    const resposta = [array[0], array[indice -1]]
    return resposta
}
console.log(receberPrimeiroEUltimoElemento([10, "20", true]))