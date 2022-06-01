function calcularSalario(horas, valor) {
    let salarioTotal = horas * valor;
    return salarioTotal;
}

console.log(`Salário igual a R$ ${calcularSalario(150, 40.5)}`)