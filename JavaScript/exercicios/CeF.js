function calculateC(F){
    let celcius = (F-32) *5/9
    return celcius
}

function calculateF(C){
    let fahrenheit = C* 9/5 + 32
    return fahrenheit
}

let value = 0;
let temperature = prompt('escolha entre "C" ou "F"').toLocaleUpperCase()
if(temperature == 'C'){
    value = prompt('escolha o valor que queira transformar em Fahrenheit')
    let fahrenheit = calculateF(value)
    alert('o valor em Fahrenheit é = '+fahrenheit)
}else if(temperature == 'F'){
    value = prompt('escolha o valor que queira transformar em Celsius')
    let celcius = calculateC(value)
    alert('o valor em Celsius é = '+celcius)
}else{
    alert('valor inválido!')
}

//outra forma de se realizar

//transform('50f')
function transformDegree(degree){
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celciusExists && !fahrenheitExists){
        throw new Error('Grau não identificado');
}

    let upadatedDegre = degree.toUpperCase().replace("F", "");
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celciusExists){
        upadatedDegre = degree.toUpperCase().replace("C", "");
        formula = (celcius) => celcius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(upadatedDegre) + degreeSign

}

try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('20Z'))
}   catch(error){
        console.log(error.message)
}