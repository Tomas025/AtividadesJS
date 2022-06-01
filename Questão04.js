function nomeDoMes(mes) {
    let data = new Date(2022,mes - 1, 1)
    const options = {
        month: 'long'
    }

    return data.toLocaleDateString('pt-BR', options)
}

console.log(nomeDoMes(1))