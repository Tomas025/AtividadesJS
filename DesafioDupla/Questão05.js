function saque(valor) {
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador2 = 0;
    let verdade = true;
    let saida = {}

    if (valor != 0 && valor > 0){
        while (verdade) {
            if (valor >= 100) {
                valor -= 100;
                contador100++;
            } else if (valor >= 50) {
                valor -= 50;
                contador50++;
            } else if (valor >= 20) {
                valor -= 20;
                contador20++;
            } else if (valor >= 10) {
                valor -= 10;
                contador10++;
            } else if (valor >= 5) {
                valor -= 5;
                contador5++;
            } else if (valor >= 2) {
                valor -= 2;
                contador2++;
            } else if (valor % 2 == 1) {
                break
            } else {
                saida.R$100 = contador100
                saida.R$50 = contador50
                saida.R$20 = contador20
                saida.R$10 = contador10
                saida.R$5 = contador5
                saida.R$2 = contador2
                break
            };
        };
    };

    return saida;
}