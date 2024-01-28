var fetchData = function (url, method) {
    console.log("Fetched!");
};
var reqOptions = {
    url: "https://someurl.com",
    method: "GET"
    // } as const
};
// fetchData("qqq", "GET")
fetchData(reqOptions.url, reqOptions.method);
/*
const reqOptions = {
    url: "https://someurl.com",
    method: "GET"
}
fetchData(reqOptions.url, <"GET">reqOptions.method)
 */
var box = document.querySelector(".box");
box.style;
box === null || box === void 0 ? void 0 : box.classList;
var input = document.querySelector("input");
var num = +input.value;
console.log(num);
