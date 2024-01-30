interface FormsData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(formsData: FormsData) {
	const formFilled = Object.entries(formsData).every(([key, value]) => {
		if (key === "checkbox") {
		  return value
		}
		return value !== ""
	  })
	
	  if (formFilled) {
		return true
	  } else {
		console.log("Please complete all fields")
		return false
	  }
}

function checkFormData(formsData: FormsData) {
	const { email } = formsData
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"]

	// Если email совпадает хотя бы с одним из массива
	if ("condition") {
		console.log("This email is already exist")
	} else {
		console.log("Posting data...")
	}
}

const inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll("input, textarea")

const handleSubmit = (e: Event) => {
	e.preventDefault()
	console.log("submit")

	let formsData: FormsData = {
		email: "",
		title: "",
		text: "",
		checkbox: false
	}

	console.log(formsData)

	inputs.forEach(input => {
		const inputId = input.id as keyof FormsData;

		// Use type assertions based on the input type
		if (input.type === "checkbox") {
		  formsData[inputId] = (input as HTMLInputElement).checked;
		} else {
		  formsData[inputId] = (input as HTMLInputElement | HTMLTextAreaElement).value;
		}
	})

	console.log(formsData)
	
	if (validateFormData(formsData)) checkFormData(formsData)
}

const submitBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button[type='submit']")
console.log(submitBtns)
submitBtns.forEach(submit => {
	submit?.addEventListener("click", handleSubmit)
})
