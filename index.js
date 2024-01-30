// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(formsData) {
    var formFilled = Object.entries(formsData).every(function (_a) {
        var key = _a[0], value = _a[1];
        if (key === "checkbox") {
            return value;
        }
        return value !== "";
    });
    if (formFilled) {
        return true;
    }
    else {
        console.log("Please complete all fields");
        return false;
    }
}
function checkFormData(formsData) {
    var email = formsData.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if ("condition") {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
var inputs = document.querySelectorAll("input, textarea");
var handleSubmit = function (e) {
    e.preventDefault();
    console.log("submit");
    var formsData = {
        email: "",
        title: "",
        text: "",
        checkbox: false
    };
    console.log(formsData);
    inputs.forEach(function (input) {
        var inputId = input.id;
        // Use type assertions based on the input type
        if (input.type === "checkbox") {
            formsData[inputId] = input.checked;
        }
        else {
            formsData[inputId] = input.value;
        }
    });
    console.log(formsData);
    if (validateFormData(formsData))
        checkFormData(formsData);
};
var submitBtns = document.querySelectorAll("button[type='submit']");
console.log(submitBtns);
submitBtns.forEach(function (submit) {
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", handleSubmit);
});
