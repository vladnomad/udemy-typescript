type testType = {
    name: string;
    active: boolean;
    count: number;
}

const testObj: testType = {
    name: "string",
    active: true,
    count: 3
};
/* 
const folder = "main"

switch (folder) {
    case "main": 
        const test = "test";
        break;
    case "admin":
        return true;
    default: 
        return false;
}
 */
interface IStyles {
    [style: string]: string;
}

const style_1: IStyles = {"border": "red"}
const style_2 = style_1["bg"]
// string | undefined