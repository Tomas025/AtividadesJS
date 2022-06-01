function funcaoDaSorte(num) {
    let num2 = Math.floor(Math.random() * 10 + 1)

    if (num == num2) {
        return "Parabéns! O número sorteado foi o " + String(num2)
    } else {
        return "Que Pena! O número sorteado foi o " + String(num2)
    }
}

console.log(funcaoDaSorte(10))