import { promises as fs } from "fs"

type Regex = RegExp

type Module = {
    label: string;
    start: number;
    finish: number;
}

enum RomanNumeral {
    I = "i",
    II = "ii",
    III = "iii",
    IV = "iv"
}

const calculateProgress = (
    start: number, 
    current: number, 
    finish: number
): number => {
    const total = finish - start
    const done = current - start

    const progress = Math.ceil(done / total * 100 / 5) * 5

    return progress
}

const updateReadmeProgress = async (
    lecture: number, 
    module: Module
): Promise<void> => {
    const filePath = "./README.md"
    
    try {
        const data = await fs.readFile(filePath, "utf8")

        const _progressBarRegex: string = `!\\[(\\d+)%\\]\\(https://geps.dev/progress/(\\d+)\\)`
        const headingRegex: Regex = new RegExp(`###\\s*${_progressBarRegex}\\s*${module.label}`, "gim")

        const replaceProgress = () => {
            const newPercentage = calculateProgress(module.start, lecture, module.finish)
            return `### ![${newPercentage}%](https://geps.dev/progress/${newPercentage}) ${module.label}`
        }

        const updatedContent = data.replace(headingRegex, replaceProgress)

        await fs.writeFile(filePath, updatedContent, "utf8")
        console.log(`Progress indicator for module "${module.label}" updated successfully.`)
    } catch (error) {
        console.error("Error updating the README file:", error)
    }
}

const isValidLecture = (lecture: number, module: Module): boolean => {
    return lecture >= module.start && lecture <= module.finish;
}

const main = async () => {
    try {
        const modules: Readonly<{ [key: string]: Module }> = {
            [RomanNumeral.I]: {
                label: "I. Foundations",
                start: 5,
                finish: 44
            },
            [RomanNumeral.II]: {
                label: "II. Generics & type manipulations",
                start: 45,
                finish: 65
            },
            [RomanNumeral.III]: {
                label: "III. Classes",
                start: 66,
                finish: 79
            },
            [RomanNumeral.IV]: {
                label: "IV. Decorators & configuration",
                start: 80,
                finish: 100
            }
        }

        const [, , ...args] = process.argv

        if (args.length !== 2) {
            console.error("Error: Please provide both lecture and module arguments")
            process.exit(1)
        }

        const [lectureArgument, moduleArgument] = args

        const lecture = parseInt(lectureArgument)

        if (isNaN(lecture)) {
            console.error("Error: Lecture must be a valid number")
            process.exit(1)
        }

        const moduleKey = moduleArgument.toLowerCase() as RomanNumeral

        let module: Module

        if (modules.hasOwnProperty(moduleKey)) {
            module = modules[moduleKey]

            if (isValidLecture(lecture, module)) {
                await updateReadmeProgress(lecture, module)
            } else {
                console.error(`Error: Lecture is not within the valid range for module ${moduleKey}`)
                process.exit(1)
            }
        } else {
            console.error(`Error: Module ${moduleKey} not found`)
            process.exit(1)
        }
    }
    catch (error) {
        console.error("An unexpected error occurred:", error)
        process.exit(1)
    }    
}

main()