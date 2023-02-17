let name = new String('Maik')
name.surName = "Brito"
let age = new Number(23)
let date = new Date('2023-17-02')
console.log(date.__proto__)
console.log(name.surName, age)

const person = {
    name: 'mayk',
    age: 25
}

delete person.age
console.log(person)

//operadores aritiméticos

//multiplicação
console.log(3*5)
//divisão
console.log(6/2)
//soma
console.log(1+1)
//subtração
console.log(10-5)

//resto da divisão
let remainder
remainder = 11%10
console.log(remainder)
//incremento
let increment = 0
increment++
console.log(increment)
//descremento
let decrement = 1
decrement--
console.log(decrement)
//exponencial
console.log(2**2)

//()

let total = (2 + 3) * 5
console.log(total)

//operadores de comparação
let one = 1
let two = 2

console.log( two == 1)
console.log(one == '1')
console.log(one === '1')
console.log(one != two)
console.log(two !== '2')

console.log(one >=1)
console.log(one < two)
console.log(one <= two)

//atribuição

let x = 1
console.log(x)

x += 1
// x = x + 1
console.log(x)