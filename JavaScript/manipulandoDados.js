/*
protorype
    * prototype-based language
    * prototypr chain
    * __proto__
    * 
    * mayk.__proto__
    * 20.0.__proto__
    * 
    * 
    * 
    * Type conversion se trata de uma conversão de tipo feita pelo dev,
    * explicitamente, e pode ser feita de diversas maneiras, por exemplo
    * com o método Number(), já type coersion é uma mudança de tipos feita
    * pelo próprio JavaScript, implicitamente, por exemplo quando você 
    * tenta somar um número na forma string com um número do tipo número.
*/
console.log(Number('9')+5)

let string = '123'
console.log(Number(string))
let number = 123
console.log(String(number))

let word = "paralelepipedo"
console.log(word.length);
let number2 = 1234
console.log(String(number2).length)

let number3 = 432112345.432124
console.log(number3.toFixed(2).replace(".",","))

let word1 = "programar é muito bacana!"
console.log(word1.toLocaleUpperCase())

let word2 = "eu quero viver a melancolia!"
let myArray = word2.split(" ")
console.log(myArray)
let word2WithUndersocre = myArray.join("_")
console.log(word2WithUndersocre.toLowerCase())

let word3 = "eu quero viver a melancolia"
console.log(word3.includes("melancolia"))

//criar array com construtor
let myArray2 = new Array(10)
console.log(myArray2)

console.log([
    "a",
    "array",
    "alo".length
])

let word4 = "manipulação"
console.log(Array.from(word4))

let techs = ["html", "css", "js"]
//adcionar no fim
console.log(techs.push("nodejs"))
//adcionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1,3))
//remover um ou mais itens em qualquer posição no array
console.log(techs.splice(1,2))