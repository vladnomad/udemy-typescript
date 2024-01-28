/*
let num: Number = new Number(5)
let num2: number = 5
let num3 = Number(5)

num = num2
num2 = num  // error
*/
var num = 5;
var strToNum = num.toString();
var str = "5";
var numToStr = +str;
var department = {
    name: "web-dev",
    budget: 5000
};
/*
const mainProject: Project = {
    ...department,
    projectBudget: 7500
}
 */
function transformDepartment(department, amount) {
    return {
        name: department.name,
        projectBudget: amount
    };
}
var mainProject = transformDepartment(department, 4000);
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === "number") {
        console.log(msg.toFixed());
    }
    else {
        console.log("msg is not ".concat(!msg));
    }
    console.log(msg);
}
printMsg(4);
var box = document.querySelector(".box");
box === null || box === void 0 ? void 0 : box.addEventListener("click", function () { });
