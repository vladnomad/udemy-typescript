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


const test: null = null
const test2: any = null
// const test3: string = null
// const test4: number = null 

const test5: undefined = undefined
const test6: any = undefined
// const test7: string = undefined

let smth: any

function getRndData() {
    if (Math.random() < 0.5) {
        return null
    } else {
        return "   Some data   "
    }
}

const data = getRndData()
const trimmedData = data ? data.trim() : null