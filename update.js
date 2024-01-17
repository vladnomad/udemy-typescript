// Automating course progress update with a terminal command

// To run the script from the terminal use:
// node update.js <lecture> <module>

// Make sure to replace <lecture> and <module> with the appropriate values
// <lecture> –  an integer representing last finished lecture
// <module>  –  lower case roman numeral (from 'i' to 'iv')

// Ensure that Node.js is installed on your machine

import { readFile, writeFile } from "fs"

const calculateProgress = (start, current, finish) => {
    const total = finish - start
    const done = current - start

    // Calculate progress as a multiple of 5
    return Math.ceil(done / total * 100 / 5) * 5
}

const updateReadmeProgress = (lecture, module) => {
    const filePath = "./README.md"
    
    // Read the contents of the README.md file
    readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err)
            return
        }

        // Regular expression to match the progress bar within headings
        const progressBarRegex = `!\\[(\\d+)%\\]\\(https://geps.dev/progress/(\\d+)\\)`
        const headingRegex = new RegExp(`###\\s*${progressBarRegex}\\s*${module.label}`, "gim")

        const replaceProgress = () => {
            const newPercentage = calculateProgress(module.start, lecture, module.finish)

            return `### ![${newPercentage}%](https://geps.dev/progress/${newPercentage}) ${module.label}`
        }

        // Replace the heading with an updated progress bar percentage
        const updatedContent = data.replace(headingRegex, replaceProgress)

        // Write the updated content back to the README.md file
        writeFile(filePath, updatedContent, "utf8", (writeErr) => {
            if (writeErr) {
                console.error("Error writing to file:", writeErr)
            } else {
                console.log(`Progress indicator for module "${module.label}" updated successfully.`)
            }
        })
    }) 
}

const validateArguments = (args) => {
    // Check if the correct number and types of arguments are provided
    if (args.length !== 2 || isNaN(args[0]) || typeof args[1] !== "string" || args[1].trim() === "") {
        console.error(`
        "Usage: node update.js <lecture> <module>\n" +
        "  lecture: an integer representing the last finished lecture\n" +
        "  module: lower case roman numeral (from 'i' to 'iv')"
        `);
        process.exit(1)
    }
}

const main = () => {
    const modules = {
        i: {
            label: "I. Foundations",
            start: 5,
            finish: 44
        },
        ii: {
            label: "II. Generics & type manipulations",
            start: 45,
            finish: 65
        },
        iii: {
            label: "III. Classes",
            start: 66,
            finish: 79
        },
        iv: {
            label: "IV. Decorators & configuration",
            start: 80,
            finish: 100
        }
    }

    // Extract and validate command-line arguments
    const [, , ...args] = process.argv
    validateArguments(args)

    const [lectureArgument, moduleArgument] = args

    const lecture = parseInt(lectureArgument)

    let module = modules[moduleArgument.toLowerCase()]
    if (!module) {
        console.error(`Module "${moduleArgument}" not found.`)
        process.exit(1)
    }


    updateReadmeProgress(lecture, module)
}

main()