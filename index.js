var userData = {
    userName: "River",
    age: 40,
    isBirthday: true,
    messages: {
        error: "Not today!",
        success: "Congrats,"
    }
};
var userDataTuple = [true, 37, "Jane"];
// userDataTuple[3]
// userDataTuple.push(50)
// userDataTuple[3]
var res = userDataTuple.map(function (t) { return "".concat(t, " - data"); });
var isBirthday = userDataTuple[0], age = userDataTuple[1], userName = userDataTuple[2];
var createError = function (message) {
    throw new Error(message);
};
function logBirthdayMessage(_a) {
    var isBirthday = _a.isBirthday, userName = _a.userName, age = _a.age, _b = _a.messages, error = _b.error, success = _b.success;
    if (isBirthday) {
        return "".concat(success, " ").concat(userName.toUpperCase(), "! You have turned ").concat(age + 1, " years old today!");
    }
    else {
        return createError(error);
    }
}
console.log(logBirthdayMessage(userData));
var departments = ["dev", "design", "marketing"];
var department = departments[0];
// departments.push(5)
var report = departments
    .filter(function (d) { return d !== "dev"; })
    // .map((d: string) => { return 4 })
    .map(function (d) { return "".concat(d, " - done"); });
var numbers = [[3, 5, 6], [3, 5, 6]];
var first = report[0];
console.log(first);
var message = 5;
var messages = ["a", "b"];
/*
function printMessage (msg: string | number | boolean): void {
    if (typeof msg === "string" || typeof msg === "number") {
        console.log(msg.toLowerCase())
    } else {
        console.log(msg.toExponential())
    }

    console.log(msg)
}
 */
function printMessage(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed());
    }
    else {
        msg ? console.log(msg) : console.log(!msg);
    }
    console.log(msg);
}
printMessage(4);
// printMessage("some string")
var printReadings = function (a, b) {
    if (a === b) {
        console.log(a, b);
    }
};
var printReadings2 = function (a) {
    console.log(a.slice(0, 3));
};
function checkReadings(readings) {
    if ("system" in readings) {
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getFullYear());
    }
    else {
        console.log(x.trim());
    }
}
var mssg = "Hello";
// mssg = "Hell"
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server has started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error("Invalid port");
    }
    return "Server has started";
}
startServer("https", 3001);
function createAnimation(id, animation, timingFunc, duration, iterationCount) {
    if (timingFunc === void 0) { timingFunc = "ease"; }
    var element = document.querySelector("#".concat(id));
    if (element) {
        element.style.animation = "".concat(animation, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterationCount);
    }
    // console.log(`${animation} ${timingFunc} ${duration}s ${iterationCount}`)
}
createAnimation("id", "fade", "ease-in-out", 5, "infinite");
