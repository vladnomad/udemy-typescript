//@ts-nocheck
class BoxClass {
    width: number;
    height: number;
    volume: number | undefined;
    _content: string | undefined

    constructor(width: number, volume?: number, content?: string) {
        this.width = width;
        this.height = 50;
        this.volume = volume;
        this._content = content;
    }

    calculateVolume(): void {
        if (!this.volume) {
            this.volume = this.width * this.height
            console.log(`Parcel volume: ${this.volume}`)
        } else {
            console.log(`Parcel volume: ${this.volume}`)
        }
    }

    checkTransportWidth(transport: number): string
    checkTransportWidth(transport: number[]): string
    checkTransportWidth(transport: number | number[]): string {
        if (typeof transport === "number") {
            return transport >= this.width ? "Ok" : "Not ok"
        } else {
            return transport.some(t => t >= this.width) ? "Ok" : "Not ok"
        }
    }

    get content() {
        return this._content
    }

    set content(value) {
        this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`
    }

    async contentAsync(value: string) {
        const date = await new Date().toTimeString()
        this._content = `Date: ${date}, Content: ${value}`
    }
}

const userBox = new BoxClass(25)

console.log(userBox.calculateVolume())
console.log(userBox.checkTransportWidth([13, 47]))

userBox.volume = 50000

console.log(userBox.content = "Test")
console.log(userBox.content)