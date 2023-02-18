let familia = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.24, 128.45, 175.87,1450]
};

function soma(array){
    let total = 0;

for(let value of array){
    total += value
}
return total;
}

function calcular (){
    const calcularIcomes = soma(familia.receitas)
    const calculeteExpenses = soma(familia.despesas)

    const total = calcularIcomes - calculeteExpenses
    const itsOK = total >= 0

    let balanceText = "negativo"
    if(itsOK){
        balanceText = "positivo"
    }
''
    console.log(`seu saldo é de ${balanceText}: ${total}`)
    
}

calcular()