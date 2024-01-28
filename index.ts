/* 
interface Readings {
	water: number;
	electricity: number;
}
 */
const readingsInspector = {
	water: 200,
	electricity: 350
}

function compareReadings(readings: typeof readingsInspector): boolean {
	const readingsUser = {
		water: 200,
		electricity: 350
	}

	const waterIsEqual = readings.water === readingsUser.water
	const electrictyIsEqual = readings.electricity === readingsUser.electricity

	const readingsAreEqual = waterIsEqual && electrictyIsEqual

	return readingsAreEqual
}

const PI = 3.14
let PIClone: typeof PI


// Practice task

enum TypesOfMedia {
	VIDEO = "video",
	AUDIO = "audio"
}

enum FormatsOfMedia {
	MP4 = ".mp4",
	MOV = ".mov",
	MKV = ".mkv",
	FLV = ".flv",
	WEBM = ".webM"
}

interface IMedia {
	name: string;
	type: TypesOfMedia;
	format: FormatsOfMedia;
	subtitles?: string;
	timestamp?: unknown;
}

function playMedia({ name, type, format, subtitles, timestamp }: IMedia = {
	name: "example",
	type: TypesOfMedia.VIDEO,
	format: FormatsOfMedia.MP4
}): string {
	let timestampLog: string

	if (typeof timestamp === "string") {
		timestampLog = timestamp
	} else if (Array.isArray(timestamp)) {
		timestampLog = timestamp.join(", ")
	} else {
		timestampLog = "Unsupported type of timestamp"
	}

	console.log(
		`The "${name}" ${format} is a ${type} type.
		Timestamp: ${timestampLog}
    	Subtitles: ${subtitles ?? "none"}`
	)

	return "Media has started"
}

playMedia({
	name: "WoW",
	type: TypesOfMedia.VIDEO,
	format: FormatsOfMedia.FLV,
	subtitles: "hmhmhm hmhmhm doh",
	timestamp: ["4:30", "5:40"]
})