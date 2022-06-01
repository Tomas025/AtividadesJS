function repetir(elemento, vezes) {
    
    let lista = []

    for (let i = 0; i < vezes; i ++) {
        lista.push(elemento)
    }
    return lista
}

console.log(repetir(2, 3))