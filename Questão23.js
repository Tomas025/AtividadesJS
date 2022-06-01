function contarPalavras(frase) {
    if(frase == '') { return 0 }
    let listText = frase.split(' ')
    
    return listText.length
}

console.log(contarPalavras("Sou uma frase"))