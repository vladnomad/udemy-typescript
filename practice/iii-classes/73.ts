//@ts-nocheck
enum TransferStatus {
    TIMEOUT = "TIMEOUT",
	REJECTED = "REJECTED",
	COMPLETED = "COMPLETED",
}

enum StatusMessages {
    TIMEOUT = "Request Timeout: 408",
    COMPLETED = "Transfer completed: 200",
	NOTFOUND = "Not found: 404",
	NOTENOUGHSPACE = "Not enough space: 507",
	FORBIDDEN = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	startTransfer: (p: string, d: string[]) => string;
	stopTransfer: (reason: string) => string;
}

interface TransferError {
	message: StatusMessages;
}

class SingleFileTransfer implements ITransfer, TransferError {
	path: string;
	data: string[];
	date?: Date | undefined;
	status: TransferStatus;
	message: StatusMessages;

	constructor(path: string, data: string[]) {
        this.path = path;
        this.data = data;
        this.date = new Date()
	}

    startTransfer(path: string, data: string[]) {
        let dataString = ""

        if (data.length > 1) {
            dataString = data.slice(0, -1)
                .map(item => `"${item}"`)
                .join(", ") + ` and "${data[data.length - 1]}"`
        } else if (data.length === 1) dataString = `"${data[0]}"`
        
        return `Transfering files ${dataString}. Path: "${path}"`
    }

	checkTransferStatus = (
        path: string, 
        data: string[]
    ): TransferStatus => {
        const folderPath = path.slice(0, 11)
        const fileExtensions: string[] = data.map(d => d.slice(-3))

        const hasValidPath = folderPath === "./practice/"
        const hasEnoughSpace = data.length <= 3
        const hasOnlyPermitted = fileExtensions.every(ext => ext === ".ts")
        const hasForbidden = fileExtensions.some(ext => ext === "env")

        if (hasValidPath && hasEnoughSpace && hasOnlyPermitted) {
            this.message = StatusMessages.COMPLETED
            this.status = TransferStatus.COMPLETED

            this.getTransferState()
            return this.status
        }

        if (hasForbidden) {
            this.message = StatusMessages.FORBIDDEN
            this.status = TransferStatus.REJECTED
        } else if (hasValidPath && !hasEnoughSpace) {
            this.message = StatusMessages.NOTENOUGHSPACE
            this.status = TransferStatus.REJECTED
        } else if (!hasOnlyPermitted) { 
            this.message = StatusMessages.NOTFOUND
            this.status = TransferStatus.REJECTED
        } else {
            this.message = StatusMessages.TIMEOUT
            this.status = TransferStatus.TIMEOUT
        }

        this.stopTransfer()
        return this.status
	}

    stopTransfer = (): string => {
        const time = new Date().toLocaleTimeString()

        switch (this.message) {
            case StatusMessages.COMPLETED: 
                return `${StatusMessages.COMPLETED}; Timestamp: ${time};`
            case StatusMessages.FORBIDDEN:
                return `${StatusMessages.FORBIDDEN}; Timestamp: ${time};`
            case StatusMessages.NOTFOUND:
                return `${StatusMessages.NOTFOUND}; Timestamp: ${time};`
            case StatusMessages.NOTENOUGHSPACE:
                return `${StatusMessages.NOTENOUGHSPACE}; Timestamp: ${time};`
            default:
                return `${StatusMessages.TIMEOUT}; Timestamp: ${time};`
        }        
    }

    getTransferState = (): string => {
        return `Current status: ${this.status}; ${this.message};`
    }
}


/* 
const path = "./practice/"
const data = ["73.ts", "practice.ts", "ce.ts", "pr.ts"]
// Transfering files "73.ts", "practice.ts", "ce.ts" and "pr.ts". Path: "./practice/"
// REJECTED
// Not enough space: 507; Timestamp: 4:29:08 pm;
// Current status: REJECTED; Not enough space: 507;
 */


/* 
const path = "./lectures/"
const data = ["73.ts", "practice.ts", "ce.ts", "pr.ts"]
// Transfering files "73.ts", "practice.ts", "ce.ts" and "pr.ts". Path: "./lectures/"
// TIMEOUT
// Request Timeout: 408; Timestamp: 4:34:19 pm;
// Current status: TIMEOUT; Request Timeout: 408;
 */


/* 
const path = "./practice/"
const data = ["73.js", "practice.ts"]
// Transfering files "73.js" and "practice.ts". Path: "./practice/"
// REJECTED
// Not found: 404; Timestamp: 4:31:41 pm;
// Current status: REJECTED; Not found: 404;
 */


/* 
const path = "./practice/"
const data = ["73.ts", "practice.ts", ".env"]
// Transfering files "73.ts", "practice.ts" and ".env". Path: "./practice/"
// REJECTED
// Forbidden: 403; Timestamp: 4:32:08 pm;
// Current status: REJECTED; Forbidden: 403;
 */


const path = "./practice/"
const data = ["73.ts", "practice.ts"]
// Transfering files "73.ts" and "practice.ts". Path: "./practice/"
// COMPLETED
// Transfer completed: 200; Timestamp: 4:30:55 pm;
// Current status: COMPLETED; Transfer completed: 200;

const sft = new SingleFileTransfer(path, data)

console.log(sft.startTransfer(path, data))
console.log(sft.checkTransferStatus(path, data))
console.log(sft.stopTransfer())
console.log(sft.getTransferState())