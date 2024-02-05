interface ICompany {
    name: string;
    obligations: number;
    departments: Department;
    management: {
        owner: string;
    }
}

interface Department {
    [key: string]: string
}

type CompanyKeys = keyof ICompany

// Union type of strings — "name" | "obligations"
const keys: CompanyKeys = "name"

// function printObligations(company: ICompany, name: string) {
function printObligations<T, K extends keyof T, S extends keyof T>(
    company: T, 
    name: K, 
    obligations: S
) {
    console.log(`Company ${company[name]}, obligations: ${company[obligations]}`)
}

/* 
const hh: ICompany = {
    name: "HH",
    obligations: 50000
}

printObligations(hh, "name", "obligations")

const google = {
    name: "Google",
    open: "true"
}
 */

type GoogleKeys = keyof typeof google

const keys2: GoogleKeys = "name"

// printObligations(google, "name", "open")


const google: ICompany = {
    name: "Google",
    obligations: 25000,
    departments: {
        sales: "sales",
        developer: "dev"
    },
    management: {
        owner: "Cassidy"
    }
}

// type CompanyObligationsType = typeof ICompany.obligations

// type CompanyObligationsType = ICompany["obligations"]
type CompanyOwnerType = ICompany["management"]["owner"]
type CompanyDepartmentsType = ICompany["departments"]

type Test = ICompany[keyof ICompany]

// departments: Department[];
// type CompanyDepartmentsTypes = ICompany["departments"][number]


// const obligations = "obligations"
// let obligations = "obligations" as const
let obligations: "obligations" = "obligations"
type CompanyObligationsType = ICompany[typeof obligations]