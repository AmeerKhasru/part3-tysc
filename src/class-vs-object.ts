
console.log("Class vs Object");

// Class
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

// Object
const person1 = new Person("John", 30)
const person2 = new Person("Jane", 25)

console.log(person1) // Output: Person { name: 'John', age: 30 }
console.log(person2) // Output: Person { name: 'Jane', age: 25 }