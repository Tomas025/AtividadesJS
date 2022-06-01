function juros(capital, taxa, tempo){
    montante = capital * (1 + taxa) ** tempo;
    montante = montante.toFixed(2);
    return montante;
}