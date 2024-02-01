type voidFunction = () => void

const returnString: voidFunction = () => {
	return "string"
}

const s = returnString()
console.log(s)

const returnNumber: voidFunction = () => {
	return 5
}

const n = returnNumber()
console.log(n)
/* 
function f2(): void {
	return true
}

const f3 = function(): void {
	return true
}
 */
const names = ["Anna", "John"]
const newArray = names.slice()

names.forEach((name, i, arr) => {
	arr.push(`Hey, ${name}! You're ${i + 1} in line.`)
})