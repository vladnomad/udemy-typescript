//@ts-nocheck
type Curr = {
    usa: "usd";
    poland: "pln";
    ukraine: "uah";
    uk: "gbp";
}

type CreateCustomCurr<T> = {
    // [P in keyof T as TAnimation]: string
    [P in keyof T as `custom${Capitalize<string & P>}`]: string
}

type CustomCurr = CreateCustomCurr<Curr>

type TAnimation = "fade" | "swipe"
type Direction = "in" | "out"

type NewTAnimation = `${TAnimation}${Capitalize<Direction>}`