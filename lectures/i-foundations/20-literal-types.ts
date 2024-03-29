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

const userDataTuple: [...boolean[], number, string] = [true, 37, "Jane"]
// userDataTuple[3]
// userDataTuple.push(50)
// userDataTuple[3]

const res = userDataTuple.map(t => `${t} - data`)

const [isBirthday, age, userName] = userDataTuple

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

const message: string | number | boolean = 5
const messages: string[] | number[] = ["a", "b"]
/* 
function printMessage (msg: string | number | boolean): void {
    if (typeof msg === "string" || typeof msg === "number") {
        console.log(msg.toLowerCase())
    } else {
        console.log(msg.toExponential())
    }

    console.log(msg)
}
 */
function printMessage (msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m))
    } else if (typeof msg === "number") {
        console.log(msg.toFixed())
    } else {
        msg ? console.log(msg) : console.log(!msg)
    }

    console.log(msg)
}

printMessage(4)
// printMessage("some string")

const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
        console.log(a, b)
    }
}

const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3))
}

function checkReadings (readings: {system: number} | {user: number}): void {
    if ("system" in readings) {
        console.log(readings.system)
    } else {
        console.log(readings.user)
    }
}

function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.getFullYear())
    } else {
        console.log(x.trim())
    }
}

let mssg: "Hello" = "Hello"

// mssg = "Hell"

const port3000: number = 3000
const port3001: number = 3001

function startServer(protocol: "http" | "https", port: 3000 | 3001): "Server has started" {
    if (port === port3000 || port === port3001) {
        console.log(`Server has started on ${protocol}://server:${port}`)
    } else {
        console.error("Invalid port")
    }
    return "Server has started"
}

startServer("https", 3001)

function createAnimation(
    id: string | number, 
    animation: string, 
    timingFunc: "ease" | "ease-out" | "ease-in" | "ease-in-out" = "ease", 
    duration: number, 
    iterationCount: "infinite" | number
): void {
    const element = document.querySelector(`#${id}`) as HTMLElement

    if (element) {
        element.style.animation = `${animation} ${timingFunc} ${duration} ${iterationCount}`
    }
    // console.log(`${animation} ${timingFunc} ${duration}s ${iterationCount}`)
}

createAnimation("id", "fade", "ease-in-out", 5, "infinite")