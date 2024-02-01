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

const isBirthday: boolean = true
let age: number
const userName: string = "River"

age = 40

if (isBirthday) {
    console.log(`Congrats, ${userName.toUpperCase()}! You have turned ${age + 1} years old today!`)
}