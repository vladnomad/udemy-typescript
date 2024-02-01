// @ts-nocheck
/* 
// let some: any
let some: unknown

some = "string"

// let data: string[] = some
// data.find(e => e)

// const someValue: any = 10
const someValue: unknown = 10
// someValue.method()

function fetchData(data: unknown): void {
	if (typeof data === "string") {
		console.log(data.toLowerCase())
	} else if (typeof data === "number") {
		console.log(data.toFixed())
	} else {

	}
}
 */
const userData = '{"isA": true, "b": 23, "c": "string"}'

function safeParse (s: string): unknown {
	return JSON.parse(s)
}

const data = safeParse(userData)

function transferData(d: unknown): void {
	if (typeof d === "string") {
		console.log(d.toLowerCase())
	} else if (typeof d === "object" && d) {
		console.log(data)
	} else {
		console.error("Invalid data")
	}
}

transferData(data)

try {
	if (1) throw "error"
} catch (e) {
	console.log(typeof e)
}
// string

try {
	if (1) throw new Error("error")
} catch (e) {
	console.log(typeof e)
}
// object


try {
	if (1) throw new Error("error")
} catch (e) {
	if (e instanceof Error) {
		console.log(e.message)
	} else if (typeof e === "string") {
		console.log(e)
	}
}

type T0 = any | unknown
type T1 = number | unknown

type T2 = any & unknown
type T3 = number & unknown