// @ts-nocheck
const isBirthdayData: boolean = true
const userNameData: string = "River"

let ageData: number = 40

const createError = (message: string): never => {
	throw new Error(message)
}

function logBirthdayMessage (
    isBirthday: boolean, 
    userName: string,
    age: number
): string {
    if (isBirthday) {
        return `Congrats, ${userName.toUpperCase()}! You have turned ${age + 1} years old today!`
    } else if (!isBirthday) {
        return "Too bad"
    }
	return createError("Error")
}

logBirthdayMessage(isBirthdayData, userNameData, ageData)