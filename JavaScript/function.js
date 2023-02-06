//function statement
function createPhrases(){
    console.log('estudar é muito bom')
    console.log('paciência é persistência')
    console.log('revisão é a mãe do aprendizado')
} 
//function execute,run,call,invoke 
createPhrases();
console.log('fim do programa')

//function expression(anonymous)
const sum = function (nro1,nro2){
 let soma = nro1 + nro2;
 return soma;
}

let nro1 = 10
let nro2 = 25

console.log(sum(nro1,nro2)); //arguments

console.log(`o nro 1 é ${nro1} o nro2 é ${nro2} e a soma é: ${sum(nro1,nro2)}`)

//function scope

let subject = 'create video'
function creatThink(subject){
    subject = 'study'
    return subject
}
console.log(subject)
console.log(creatThink(subject))

//function hoistiong

sayMyName();

function sayMyName(){
    console.log('mayk')
}

// sayMyName() = function(){
//     console.log('mayk')
// }

//arrow function
                     //function
const sayMyName2 = (name) => {
    console.log(name)
}

sayMyName2('mayk');

//callback function

function sayMyName3 (name){

    console.log(name)
}

sayMyName3(
    () => {
        console.log('estou em uma callback')
    }
)

/* function contructor
    * expressão new
    * criar um novo objeto
    * this keyword  
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return "andando"
    }
}

const mayk = new Person("mayk")
const joao= new Person("joão")
console.log(mayk.walk())
console.log(joao.walk())