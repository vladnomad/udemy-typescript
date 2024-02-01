// @ts-nocheck
// let userName: string = "John"

// userName = 5
// userName.isInteger()

// userName = "Lenny"

// '', "", ``
// 10, 0.5, 0.0001, -50, 4e10, NaN, Infinity
// true, false
/* 
const isBirthday = true
const age = 40
const userName = "River"

if (isBirthday) {
    console.log(`Congrats, ${userName}! You have turned ${age + 1} years old today!`)
}
 */

const isBirthdayData: boolean = true
const ageData: number = 40
const userNameData: string = "River"

/* 
function logBirthdayMessage (
    isBirthday: boolean, 
    userName: string, 
    age: number
): void {
    if (isBirthday) {
        console.log(`Congrats, ${userName.toUpperCase()}! You have turned ${age + 1} years old today!`)
    }

    return undefined
}
 */
const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "River"}'

const userObject: {
    isBirthdayData: boolean, 
    ageData: number, 
    userNameData: string
} = JSON.parse(userData)
console.log(userObject)

const logBirthdayMessage = (
    isBirthday: boolean, 
    age: number,
    userName: string
): string => {
    if (isBirthday) {
        return `Congrats, ${userName.toUpperCase()}! You have turned ${age + 1} years old today!`
    } else {
        return "Error"
    }
}

logBirthdayMessage(isBirthdayData, ageData, userNameData)

let salary: number
salary = 9000