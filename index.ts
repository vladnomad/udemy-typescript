type Empty = "empty"
type NumOrEmpty = number | Empty

const empty: Empty = "empty"

interface IClothesWarehouse {
	jackets: NumOrEmpty;
	hats: NumOrEmpty;
	socks: NumOrEmpty;
	pants: NumOrEmpty;
}

interface IStationeryWarehouse {
	scissors: NumOrEmpty;
	paper: boolean | Empty;
}

interface IAppliancesWarehouse {
	dishwashers: NumOrEmpty;
	stoves: NumOrEmpty;
	mixers: NumOrEmpty;
}

interface ITotalWarehouse extends IClothesWarehouse, IStationeryWarehouse, IAppliancesWarehouse {}

interface ITotalWarehouse {
	deficit: boolean;
	date: Date;
}

const totalData = {
	jackets: 5,
	hats: empty,
	socks: empty,
	pants: 15,
	scissors: empty,
	paper: true,
	dishwashers: 3,
	stoves: empty,
	mixers: 14,
	deficit: true,
	date: new Date
}

function printReport(data: ITotalWarehouse): string {
	const emptyItems = Object.entries(data)
		.filter(([, value]) => value === empty)
		.map(([key]) => key)

	if (emptyItems.length > 0) {
		return `We need these items: ${emptyItems.join(", ")}`
	}
	
	return `Everything is fine - ${emptyItems}`
}

console.log(printReport(totalData))


let s: number
s = 500

interface UserData {
	isA: boolean;
	b: number;
	c: string;
}

const userData = "{'isA': true, 'b': 40, 'c': 'Q'}"

const userObj = JSON.parse(userData)  


interface User {
	login: string;
	password: string;
	age: number;
	// address?: string;
	address: string | undefined;
	parents?: {
		mother?: string;
		father?: string;
	}
}

const user: User = {
	login: "",
	password: "",
	age: 0,
	address: ""
}

const dbName = "01"

function sendUserData(obj: User, db?: string): void {
	console.log(obj.parents?.father?.charAt(0), db?.toLowerCase())
}