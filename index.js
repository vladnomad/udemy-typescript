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
var test = null;
var test2 = null;
// const test3: string = null
// const test4: number = null 
var test5 = undefined;
var test6 = undefined;
// const test7: string = undefined
var smth;
function getRndData() {
    if (Math.random() < 0.5) {
        return null;
    }
    else {
        return "   Some data   ";
    }
}
var data = getRndData();
var trimmedData = data ? data.trim() : null;
