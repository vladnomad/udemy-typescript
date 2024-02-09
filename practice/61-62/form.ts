//@ts-nocheck
interface IForm {
	login: string;
	password: string;
}

type Validation<T> = {
	[P in keyof T]: { isValid: true } | { isValid: false; errorMsg: string }
}

const validationData: Validation<IForm> = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true }
}