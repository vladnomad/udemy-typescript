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
var isBirthdayData = true;
var ageData = 40;
var userNameData = "River";
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
var userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "River"}';
var userObject = JSON.parse(userData);
console.log(userObject);
var logBirthdayMessage = function (isBirthday, age, userName) {
    if (isBirthday) {
        return "Congrats, ".concat(userName.toUpperCase(), "! You have turned ").concat(age + 1, " years old today!");
    }
    else {
        return "Error";
    }
};
logBirthdayMessage(isBirthdayData, ageData, userNameData);
var salary;
salary = 9000;
