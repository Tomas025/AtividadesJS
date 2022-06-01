function triangulo(a, b, c) {
    let soma1 = a + b
    let soma2 = a + c
    let soma3 = b + c
    let subtracao1 = Math.abs(a - b)
    let subtracao2 = Math.abs(a - c)
    let subtracao3 = Math.abs(b - c)
    let resposta = false

    if (soma1 > c) {
        if (soma2 > b) {
            if (soma3 > a) {
                if (subtracao1 < c) {
                    if (subtracao2 < b) {
                        if (subtracao3 < a) {
                            resposta = true
                        };
                    };            
                };            
            };
        };
    };

    return resposta
}