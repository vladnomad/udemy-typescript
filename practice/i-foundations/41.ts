// @ts-nocheck
interface AnimalAvailable {
	status: "available";
	data: {
		animal: "cat" | "dog" | "bird";
		breed: string;
		sterilized?: string;
		location: string;
		age?: number;
	}
}

interface AnimalNotAvailable {
	status: "not available";
	data: {
		message: string;
		nextUpdateIn: Date;
	}
}

type Animal = AnimalAvailable | AnimalNotAvailable

const animal: Animal = {
	status: "available",
	data: {
		animal: "cat",
		breed: "bengal",
		sterilized: "Not sterilized",
		location: "Iowa"
	}
}

function isAvailable(animal: Animal): animal is AnimalAvailable {
	return (animal as AnimalAvailable).data.location !== undefined
}

function checkAnimalData(animal: Animal): string | AnimalAvailable["data"] {
	if (isAvailable(animal)) {
		return animal.data
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`
	}
}

console.log(checkAnimalData(animal))


/* 
type Animal = "cat" | "dog" | "bird"

enum AnimalStatus {
	Available = "available",
	NotAvailable = "not available",
}

interface AnimalData {
	animal: Animal;
	breed: string;
	sterilized?: string;
}

interface AnimalAvailableData extends AnimalData {
	location: string;
	age?: number;
}

interface AnimalNotAvailableData {
	message: string;
	nextUpdateIn: Date;
}

interface AnimalAvailableResponse {
	status: AnimalStatus.Available;
	data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
	status: AnimalStatus.NotAvailable;
	data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse

function isAvailable(res: Res): res is AnimalAvailableResponse {
	if (res.status === AnimalStatus.Available) {
		return true
	} else {
		return false
	}
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
	if (isAvailable(animal)) {
		return animal.data
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`
	}
}

const animal: Res = {
	status: "available",
	data: {
		animal: "cat",
		breed: "bengal",
		sterilized: "Not sterilized",
		location: "Iowa"
	}
}

console.log(checkAnimalData(animal))
 */
