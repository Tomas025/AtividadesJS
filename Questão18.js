function despesasTotais(array) {
    let soma = 0

    for (let i of array) {
        for (x in i) {
            if (x == "preco") {
                soma += i[x]
            }
        }
    }

    return soma
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))