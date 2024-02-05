//@ts-nocheck
const arr: Array<number> = [1,2,3]
const arr1: number[] = [1,2,3]

const roArr: ReadonlyArray<string> = ["str", "trs", "srt"]
// roArr[0] = "tsr"

interface IState {
    data: {},
    tag?: string
}

// [P in keyof T]?: T[P] | undefined
const state: Partial<IState> = {
    data: {
        name: "Jack"
    }
}

// [P in keyof T]-?: T[P]
const strictState: Required<IState> = {
    data: {
        name: "Jonas"
    },
    tag: "br"
}
// strictState.data = "Garett"

// readonly [P in keyof T]: T[P]
function action(state: Readonly<IState>) {
    // state.data = "abc"
}