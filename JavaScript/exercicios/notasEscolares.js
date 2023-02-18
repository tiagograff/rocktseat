let notaNumerica = 0
let notaCarctere = '0'

let numero = prompt('entre com um número de 0 a 100')
let nro = parseInt(numero);
// console.log(typeof nro);

if(nro >100 || nro < 0){
    alert('valor inválido, tente novamente')
}else if(nro < 60){
    alert('nota: F')
}else if(nro <= 69 && nro >= 60){
    alert('nota: D')
}else if(nro <= 79 && nro >= 70){
    alert('nota: C')
}else if(nro <= 90 && nro >= 80){
    alert('nota: B')
}else if(nro = 90){
    alert('nota: A')
}