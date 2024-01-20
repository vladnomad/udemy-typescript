var isBirthdayData = true;
var userNameData = "River";
var ageData = 40;
var createError = function (message) {
    throw new Error(message);
};
function logBirthdayMessage(isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats, ".concat(userName.toUpperCase(), "! You have turned ").concat(age + 1, " years old today!");
    }
    else if (!isBirthday) {
        return "Too bad";
    }
    return createError("Error");
}
logBirthdayMessage(isBirthdayData, userNameData, ageData);
