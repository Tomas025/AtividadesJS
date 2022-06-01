function bhaskara(ax2, bx, c){
    let saida = [];
    let x1 = 0;
    let x2 = 0;
    let delta = (bx ** 2) - (4 * ax2 * c);

    if (delta > 0) {
        let raiz = Math.sqrt(delta);
        x1 = ((bx * -1) + raiz) / (2 * ax2);
        x2 = ((bx * -1) - raiz) / (2 * ax2);
        saida.push(x1);
        saida.push(x2);

        return saida;
    } else if(delta == 0){
        x1 = (bx * -1) / (2 * ax2);
        saida.push(x1);
        return saida;
    } else {
        return saida;
    };
}

console.log(bhaskara(4, -12, 9))