// var clima = 'quente';
// let tempo = 'frio';
// const verao = 'quente';
// console.log(clima);

let age, isHuman;
name = 'mike';
age = 18;
isHuman = true;

console.log(age,isHuman);
console.log(' o '+ name+ ' tem '+age+' anos')

console.log(`o ${name} tem ${age} anos`)

//object
const person = {
    name: 'john',
    age: 30,
    weight: 88.6,
    isAdimin: true
}

console.log(person.age);
console.log(`o ${person.name} tem ${person.age} anos`)

//array
const animals = [
    'lion',
    'monkey',
    {
        name: 'cat',
        age: 3
    }
]

//acessar valores dentro do array
console.log(animals[2].name)

for (i = 0; i < animals.length; i++){
    console.log(animals[i])
}