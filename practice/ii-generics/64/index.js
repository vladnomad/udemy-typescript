/*
const testJSON = "{'name': 'Test', 'data': 4}"

interface JSONTest {
    name: string;
    data: number;
}

const objFromJSON: JSONTest = JSON.parse(testJSON)
 */
var todoList = [];
/*
fetch("http://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => {
        if ("id" in json) todoList.push(json)
        console.log(todoList)
    })
 */
fetch("http://jsonplaceholder.typicode.com/todos")
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ("id" in json) {
        todoList.push(json);
    }
    else if (Array.isArray(json)) {
        todoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    console.log(todoList);
});
var promise = new Promise(function (resolve, reject) {
    resolve("test");
});
promise.then(function (value) { return console.log(value.toUpperCase()); });
