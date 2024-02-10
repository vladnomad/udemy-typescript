// @ts-nocheck
const fetchData = (url: string, method: "GET" | "POST"): void => {
	console.log("Fetched!")
}

const reqOptions = {
	url: "https://someurl.com",
	method: "GET" as const
// } as const
}

// fetchData("qqq", "GET")
fetchData(reqOptions.url, reqOptions.method)

/* 
const reqOptions = {
	url: "https://someurl.com",
	method: "GET"
}
fetchData(reqOptions.url, <"GET">reqOptions.method)
 */

const box = document.querySelector(".box") as HTMLElement
box.style
box?.classList

const input = document.querySelector("input") as HTMLInputElement
// const input = <HTMLInputElement>document.querySelector("input")
const num: number = +input.value
// const num: number = input.value as any as number
console.log(num)

let a = "value" as const
let b = {f: 100} as const
let c = [] as const

let value = "value"
let arr = ["arr1", "arr2"]
let obj = {g: 200}

// let T0 = value as const

// let aa = (Math.round(Math.random() * 1) ? "yes" : "no") as const