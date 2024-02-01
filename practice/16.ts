// @ts-nocheck
let userBillsData = {
    elData: {
        readings: 95,
        units: "kWt",
        mode: "double",
    }, 
    wData: {
        readings: 3,
        units: "m3",
    },
    elRate: 0.45, 
    wRate: 2
}

let monthlyBills: number[] = [0, 0] 
// monthlyBills = [electricity, water]


const calculatePayments = ({ elData, wData, elRate, wRate }: {
    elData: {
        readings: number,
        units: string,
        mode: string,
    }, 
    wData: {
        readings: number,
        units: string,
    },
    elRate: number, 
    wRate: number
}) => {
	if (elData.mode === "double" && elData.readings < 50) {
		monthlyBills[0] = elData.readings * elRate * 0.7
	} else {
		monthlyBills[0] = elData.readings * elRate
	}

	monthlyBills[1] = wData.readings * wRate
}

console.log(userBillsData)
console.log(calculatePayments(userBillsData))

const sendInvoice = (
    monthlyBills: number[], 
    { elData, wData }: {
        elData: {
            readings: number,
            units: string,
            mode: string,
        }, 
        wData: {
            readings: number,
            units: string,
        }
    }) => {
	const text = `    Hello!
    This month you have used ${elData.readings}${elData.units} of electricity.
    It will cost you: ${monthlyBills[0]}€
    
    This month you have used ${wData.readings}${wData.units} of water.
    It will cost you: ${monthlyBills[1]}€
    
    Total cost: ${monthlyBills[0] + monthlyBills[1]}`

	return text
}

console.log(sendInvoice(monthlyBills, userBillsData))