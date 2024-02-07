//@ts-nocheck
interface IPhone {
	company: string;
	number: number;
}

type phoneCompanyType = IPhone["company"]

interface IMobilePhone extends IPhone {
	size: string;
	companyPartner: phoneCompanyType;
	manufactured: Date;
}

interface IPhoneIsMobile extends IPhone, IMobilePhone {}

const mobilePhones: IPhoneIsMobile[] = [
	{
		company: "Nokia",
		number: 1285637,
		size: "5.5",
		companyPartner: "MobileNokia",
		manufactured: new Date("2022-09-01")
	},
	{
		company: "Samsung",
		number: 4356637,
		size: "5.0",
		companyPartner: "SamMobile",
		manufactured: new Date("2021-11-05")
	},
	{
		company: "Apple",
		number: 4552833,
		size: "5.7",
		companyPartner: "no data",
		manufactured: new Date("2022-05-24T12:00:00")
	}
]

interface IPhonesManufacturedAfterDate extends IPhoneIsMobile {
	initialDate: string;
}

function filterMobilePhonesByDate<T extends IPhoneIsMobile>(
	phones: T[],
	key: keyof T,
	initial: string
): Partial<IPhonesManufacturedAfterDate>[] {
	return phones.filter(phone => {
        const manufactured = phone[key]
		if (manufactured instanceof Date && 
			manufactured.getTime() > new Date(initial).getTime()
		) return phone
	}).map(phone => {
		const newObj = {...phone, initialDate: initial}
		return newObj
	})
}

console.log(filterMobilePhonesByDate(mobilePhones, "manufactured", "2022-01-01"))