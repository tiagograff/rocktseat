//estruturas de repetição

for(let i = 0; i < 10; i++){
    if( i==5){
        continue; //pula a execução do momento
    }
    console.log(i)
}

let x = 0

// while(true){
// console.log(x)
// x++;
// }

let name = 'Mayk'
let names = ['joao', 'paulo', 'pedro']

for (let name of names){ //substituir
    console.log(name)
}

let person = {
    name2: 'jhon',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    // console.log(person[property])
}