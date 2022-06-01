function objetoParaArray(objeto) {
    let objeto1 = objeto;
    let array = []

    for (let i in objeto1) {
        array.push([i, objeto1[i]])
    }

    return array
}

console.log(objetoParaArray({nome: "Maria", profissao: "Desenvolvedora de Software"}))