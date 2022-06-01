function removerPropriedade(parametros, propriedade) {
    let jsonobj = JSON.stringify(parametros)
    let copia = JSON.parse(jsonobj)

    for (let i in copia) {
        if (String(i) == propriedade) delete copia[propriedade]
    }

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))