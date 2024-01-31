interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

function validateFormData(formData: IFormData): boolean {
	const formFilled = Object.values(formData).every((value) => (typeof value === "boolean" ? value : value !== ""))

	if (!formFilled) {
		console.log("Please complete all fields")
	}

	return formFilled
}

function checkFormData(formData: IFormData): void {
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"]

	if (emails.includes(formData.email)) {
		console.log("This email is already exist")
	} else {
		console.log("Posting data...")
		console.log(formData)
	}
}

const inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll("input, textarea")

const handleSubmit = (e: Event) => {
	e.preventDefault()

	const formData: IFormData = {
		email: "",
		title: "",
		text: "",
		checkbox: false,
	}

	inputs.forEach((input) => {
		const inputId = input.id as keyof IFormData
		(formData[inputId] as boolean | string) = input.type === "checkbox" ? (input as HTMLInputElement).checked : (input as HTMLInputElement | HTMLTextAreaElement).value
	})

	if (validateFormData(formData)) {
		checkFormData(formData)
	}
}

const submitBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button[type='submit']")

submitBtns.forEach((submit) => {
	submit?.addEventListener("click", handleSubmit)
})