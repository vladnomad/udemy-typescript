// @ts-nocheck
const currencyRate: string = "1.05"

const fetchCurrency = (response: string): number => {
	const data: number = JSON.parse(response)
	return data
}

function transferEurToUsd(
    available: boolean, 
    amount: number, 
    commission: number
): void {
	if (available) {
		let res: number = fetchCurrency(currencyRate) * amount * commission
		console.log(res)
	} else {
		console.log("Сейчас обмен недоступен")
	}
}

transferEurToUsd(true, 500, 1.05)