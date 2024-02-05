//@ts-nocheck
interface IProcessing {
    <T>(data: T): T;
}

function processing<T>(data: T): T {
    return data
}

let newFunc: IProcessing = processing

type Smth<T> = T

const num: Smth<number> = 5

// type User<U> = {
interface User<ParentsData extends ParentsOfUser> {
    // login: U,
    login: string;
    age: number;
    parents: ParentsData;
}

interface ParentsOfUser {
    mother: string;
    father: string;
}

// const user: User<string> = {
const user: User<{ mother: string, father: string, married: boolean }> = {
// const user: User<"us_er"> = {
    login: "us_er",
    age: 36,
    parents: {
        mother: "Anna",
        father: "Ludwig",
        married: true
    }
}
/* 
const user2: User<string> = {
    login: "us_er2",
    age: 44,
    parents: ""
}
 */
type TypeOrNull<Type> = Type | null

type OneOrMany<Type> = Type | Type[]

const data: OneOrMany<number[]> = [5, 7]

const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req to server with amount: ${amount}`)
    return amount
}

depositMoney(500)
depositMoney("1000")
// depositMoney(false)

/* 
const depositMoney = (amount: number | string): number | string => {
    console.log(`req to server with amount: ${amount}`)
    return amount
}

depositMoney(500)
depositMoney("1000")
depositMoney(false) 
*/