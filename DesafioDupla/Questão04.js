function dinheiro(valor) {
    resultado = valor.toFixed(2);
    resultado.toString();

    let tamanho = resultado.length;
    let numeroComVirgula = '';

    for (let i = 0; i < tamanho; i++) {
        if (resultado[i] == '.') {
            numeroComVirgula += ',';
        } else if (resultado[i] != '-') {
            numeroComVirgula += resultado[i];
        };
    };

    if (valor > 0) {
        return "R$ " + numeroComVirgula;
    } else if (valor < 0) {
        return "-R$ " + numeroComVirgula;
    } else {
        return "R$ 0,00"
    }
}