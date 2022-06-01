function basket(string) {
    pontuação = string;
    let lista = pontuação.split(' ');
    let records = [0, 1];
    let maiorponto = 0;
    let menorponto = 0;
    let index = 0;

    for (let x in lista) {
        lista[x] = Number(lista[x]);
        
        index++;

        if (x == 0) {
            maiorponto = lista[x];
            menorponto = lista[x];
        };
        
        if (lista[x] > maiorponto) {
            records[0]++;
            maiorponto = lista[x];
        };

        if (lista[x] < menorponto) {
            records[1] = index;
            menorponto = lista[x];
        };
    };

    return records;
}