/**
 * Automating course progress update with a terminal command.
 *
 * @remarks
 * To run the script from the terminal, use:
 * ```
 * ts-node <filename> <lecture> <module>
 * ```
 * Replace `<lecture>` and `<module>` with the appropriate values.
 *
 * - `<lecture>`: An integer representing the last finished lecture.
 * - `<module>`: Lowercase Roman numeral (from 'i' to 'iv').
 */

import { promises as fs } from "fs"

/**
 * Regular expression type.
 */
type Regex = RegExp

/**
 * Module type.
 */
type Module = {
    /**
     * Label for the module.
     */
    label: string;

    /**
     * Start index of the module.
     */
    start: number;

    /**
     * Finish index of the module.
     */
    finish: number;
}

/**
 * Roman numerals enumeration.
 */
enum RomanNumeral {
    I = "i",
    II = "ii",
    III = "iii",
    IV = "iv"
}

/**
 * Calculate progress percentage.
 *
 * @param start - Start index.
 * @param current - Current index.
 * @param finish - Finish index.
 * @returns Calculated progress percentage (multiple of 5).
 */
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

/**
 * Update progress in README file.
 *
 * @param lecture - Last finished lecture.
 * @param module - Module details.
 * @returns A Promise that resolves when the progress is updated.
 */
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

/**
 * Check if the given lecture is within a valid range for the specified module.
 *
 * @param lecture - The lecture to check.
 * @param module - The module details.
 * @returns True if the lecture is within the valid range, otherwise false.
 */
const isValidLecture = (lecture: number, module: Module): boolean => {
    return lecture >= module.start && lecture <= module.finish;
}

/**
 * Main function.
 *
 * @remarks
 * This function extracts and validates command-line arguments.
 * @example
 * ```
 * const modules: Readonly<{ [key: string]: Module }> = { ... }
 * const [, , ...args] = process.argv
 * main()
 * ```
 */
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