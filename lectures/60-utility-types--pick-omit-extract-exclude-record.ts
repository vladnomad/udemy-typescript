//@ts-nocheck
type Curr = {
    usa: "usd";
    poland: "pln";
    ukraine: "uah";
    uk: "gbp";
}



type CurrWithoutPoland = Omit<Curr, "poland">
type CurrUkraineAndUSA = Pick<Curr,  "ukraine" | "usa">
type CountriesWithoutPoland = Exclude<keyof Curr, "poland">

type FadeType = Exclude<TAnimation,  "swipe">
type SwipeType = Extract<TAnimation, "swipe">
type SwipeTypeWithDirection = Extract<TAnimation | Direction, "swipe">



type CreateCustomCurr<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string
}

type PlayersNames = "alex" | "john"
type GameDataCurr = Record<PlayersNames, CustomCurr>

const gameData: GameDataCurr = {
    alex: {
        customUsa: "usd-A",
        customPoland: "pln-A",
        customUkraine: "uah-A",
        customUk: "gbp-A"
    },
    john: {
        customUsa: "usd-J",
        customPoland: "pln-J",
        customUkraine: "uah-J",
        customUk: "gbp-J"
    }
}


type CustomCurr = CreateCustomCurr<Curr>

type TAnimation = "fade" | "swipe"
type Direction = "in" | "out"

type NewTAnimation = `${TAnimation}${Capitalize<Direction>}`