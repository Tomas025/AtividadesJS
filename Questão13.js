function filtrarNumeros(array) {
    let dados = array
    let resposta = []

    for (let i in dados) {
        if (typeof(dados[i]) == "number") {
            resposta.push(dados[i])
        }
    }

    return resposta
}

console.log(filtrarNumeros([,"puts", true]))