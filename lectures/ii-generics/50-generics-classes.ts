//@ts-nocheck
class User<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name
        this.age = age
    }

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== "string") {
            return `Only name is available: ${this.name}`
        } else {
            return `Full name is ${this.name} ${surname}`
        }
    }
}

class AdminUser<T> extends User<string, number> {
    permissions: T;
}

const john = new User("John", 30)
console.log(john)
console.log(john.sayMyFullName("Cooper"))

const nameData = "Alex"
const ageData = 27

const alex = new User<string, number>(nameData, ageData)
console.log(alex)