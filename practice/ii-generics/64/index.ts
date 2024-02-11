//@ts-nocheck
/* 
const testJSON = "{'name': 'Test', 'data': 4}"

interface JSONTest {
    name: string;
    data: number;
}

const objFromJSON: JSONTest = JSON.parse(testJSON)
 */
let todoList: Todo[] = []

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
/* 
fetch("http://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => {
        if ("id" in json) todoList.push(json)
        console.log(todoList)
    })
 */
fetch("http://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        if ("id" in json) {
            todoList.push(json)
        } else if (Array.isArray(json)) {
            todoList = json
        } else {
            console.log(`${json} - is a string`)
        }

        console.log(todoList)
    })

const promise = new Promise<string>((resolve, reject) => {
    resolve("test")
})

promise.then(value => console.log(value.toUpperCase()))