//@ts-nocheck
// SomeType extends OtherType ? TrueType : FalseType

// type Example = "string" extends "Hello" ? string : number

const str: string = "Hello"
type Example = "string" extends typeof str ? string : number

type FromUserOrFromBase<T extends string | number> = T extends string 
    ? IDataFromUser 
    : IDataFromBase

// const test: FromUserOrFromBase<number> = 

interface IDataFromUser {
    weight: string;
}

interface IDataFromBase {
    calories: number;
}

interface User<T extends "created" | Date> {
    created: T extends "created" ? "created" : Date
}

const user: User<"created"> = {
    created: "created"
}


// function calculateDailyCalories(string: string): IDataFromUser
// function calculateDailyCalories(number: number): IDataFromBase
function calculateDailyCalories<T extends string | number>(
    numberOrString: T
): T extends string ? IDataFromUser : IDataFromBase {
    if (typeof numberOrString === "string") {
        const obj: IDataFromUser = {
            weight: numberOrString
        }
        return obj as FromUserOrFromBase<T>
    } else {
        const obj: IDataFromBase = {
            calories: numberOrString
        }
        return obj as FromUserOrFromBase<T>
    }
}


type GetStringType<
    T extends "hello" | "world" | string
> = T extends "hello" ? "hello" : T extends "world" ? "world" : string

type GetFirstType<T> = T extends Array<infer First> ? First : T

type Ex = GetFirstType<number[]>



type ToArray<Type> = Type extends any ? Type[] : never

type ExArray = ToArray<Ex | string>