function contarCaractere(parametro, frase) {
    let contador = 0

    for (let i in frase) {
        if (frase[i] == parametro) {
            contador++
        }
    }

    return contador
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))