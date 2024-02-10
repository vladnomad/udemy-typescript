//@ts-nocheck
// function processingData<T, S>(data: T, options: S): string {
function processingData<T, S>(data: T[], options: S): string {
    data.length
	switch (typeof data) {
        case "string": 
            return `${data}, speed: ${options}`
        case "number":
            // return `${data.toFixed()}, speed: ${options}`
        default:
            return "Not valid"
    }
}

//let res1 = processingData(1, "fast")
//let res2 = processingData("1", "slow")

let res1 = processingData([1], "fast")
let res2 = processingData(["1"], "slow")

// const res3  = processingData<number, string>(10, "slow")

const res3  = processingData<number, string>([10], "slow")

function processing<T>(data: T): T {
    return data
}

interface IProcessing {
    <T>(data: T): T
}

// let newFunc: <T>(data: T) => T = processing
let newFunc: IProcessing = processing

interface IDataSaver {
    // processing: <T>(data: T) => T
    // processing: typeof processing
    processing: IProcessing
}

const saver: IDataSaver = {
/* 
    processing(data) {
        console.log(data)
        return data
    }
     */

    // processing: <T>(data: T) => {
/* 
    processing: (data) => {
        return data
    }
     */
    processing: processing
}