let weight;

console.log(typeof weight)

let name = 'mayk'
let age = 30
let stars = 200.32
let isSubscribed = true


//objeto
let student = {
    name: 'mayk',
    age: 30,
    weight: 68.32,
    isSubscribed: true
};

//concanetacao
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

let students = [
    student 
]
console.log(students)

console.log(students[0])

const john = {
    name: 'john',
    age: 251,
    weight: 87,
    isSubscribed: false
}

students = [
    students,
    john
]

students[1] = john