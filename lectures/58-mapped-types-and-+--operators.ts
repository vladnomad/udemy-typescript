type Currencies = {
    usa: "usd";
    poland: "pln";
    ukraine: "uah";
    uk: "gbp";
}

type CreateCustomCurr<T> = {
    [P in keyof T]: string
    // readonly [P in keyof T]: string
    // readonly [P in keyof T]?: string   --optional
    // +readonly [P in keyof T]+?: string   --remove readonly & optional
    // -readonly [P in keyof T]-?: string   --remove readonly & optional
}

type CustomCurrencies = CreateCustomCurr<Currencies>

type ROnlyCurr = Readonly<Currencies>
/* 
type CustomCurrencies = {
    usa: string;
    poland: string;
    ukraine: string;
    uk: string;
}
 */
/* 
type ComparableType = {
    [UniqueId in Set] : UniqueIdType
}
 */
type Keys = "name" | "age" | "role"

type User58 = {
    [K in Keys] : string
}

const alex58: User58 = {
    name: "Alex",
    age: "25",
    role: "admin"
}