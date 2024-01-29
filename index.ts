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