function validateFormData(formData) {
    var formFilled = Object.values(formData).every(function (value) { return (typeof value === "boolean" ? value : value !== ""); });
    if (!formFilled) {
        console.log("Please complete all fields");
    }
    return formFilled;
}
function checkFormData(formData) {
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    if (emails.includes(formData.email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
        console.log(formData);
    }
}
var inputs = document.querySelectorAll("input, textarea");
var handleSubmit = function (e) {
    e.preventDefault();
    var formData = {
        email: "",
        title: "",
        text: "",
        checkbox: false,
    };
    inputs.forEach(function (input) {
        var inputId = input.id;
        formData[inputId] = input.type === "checkbox" ? input.checked : input.value;
    });
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
};
var submitBtns = document.querySelectorAll("button[type='submit']");
submitBtns.forEach(function (submit) {
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", handleSubmit);
});
