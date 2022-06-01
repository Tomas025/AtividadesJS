function buscarPalavrasSemelhantes(parametro, array) {
    let lista = array
    let saida = []
    let palavra = ''
    
    for (let i of lista) {
        palavra = ''
        for (let x in i) {
            if (i[x] == parametro[x]) {
                palavra += i[x]
            }
        }
        if (palavra == parametro) {
            saida.push(i)
        }
    }

    return saida
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))