// @ts-nocheck
const userData = {
    userName: "River",
    age: 40,
    isBirthday: true,
    messages: {
        error: "Not today!",
        success: "Congrats,"
    }
}

const createError = (message: string) => {
	throw new Error(message)
}

function logBirthdayMessage ({
    isBirthday, 
    userName, 
    age, 
    messages: { 
        error, 
        success 
}}: {
    isBirthday: boolean, 
    userName: string,
    age: number,
    messages: { 
        error:string, 
        success:string 
}}): string {
    if (isBirthday) {
        return `${success} ${userName.toUpperCase()}! You have turned ${age + 1} years old today!`
    } else {
        return createError(error)
    }
}

console.log(logBirthdayMessage(userData))

const departments: string[] = ["dev", "design", "marketing"]
const department = departments[0]

// departments.push(5)

const report = departments
.filter((d: string) => d !== "dev")
// .map((d: string) => { return 4 })
.map((d: string) => `${d} - done`)


const numbers: number[][] = [[3, 5, 6], [3, 5, 6]]

const [first] = report
console.log(first)