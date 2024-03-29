# [Modern TypeScript](https://www.udemy.com/course/modern_typescript/) :star::star::star::star::star:

```javascript
const courseDetails = {
    author: "Ivan Petrichenko",
    rating: 4.8,    
    ratingCount: 686,
    students: 2856,
    tests: 1,
    tasks: 14,
    lectures: 100,
    videoHoursTotal: 21,
    lastUpdate: "06.2023"
}
```
This course, authored by Ivan Petrichenko, offers an in-depth exploration of TypeScript, coupled with practical applications. Throughout the course, each theoretical concept is followed by a hands-on test or practice task, fostering interactive web development skills. The curriculum is divided into four main modules:

### ![100%](https://geps.dev/progress/100) I. Foundations 

### ![100%](https://geps.dev/progress/100) II. Generics & type manipulations

### ![100%](https://geps.dev/progress/100) III. Classes

### ![100%](https://geps.dev/progress/100) IV. Decorators & configuration

## What the Course Covers

```typescript
// Learn Foundations and create Real-World Projects with the use of Advanced Techniques
async function exploreCourse(): Promise<[Foundations, AdvancedTechniques, RealWorldProjects]> {
    try {
        const [foundations, advancedTechniques, realWorldProjects] = await Promise.all([
            fetch("/foundations") as Promise<Foundations>,
            fetch("/advanced-techniques") as Promise<AdvancedTechniques>,
            fetch("/real-world-projects") as Promise<RealWorldProjects>
        ])

        return [foundations, advancedTechniques, realWorldProjects]
    } catch (error) {
        throw new Error("Error: Grasp of TypeScript foundations before advancing further")
    }
}

// Apply TypeScript in Real-World Projects
type ProjectType = "Large-Scale Apps" | "Team Collaborations" | "Complex Functionalities"

const realWorldProjects: Array<ProjectType> = [
    "Large-Scale Applications", 
    "Team Collaborations", 
    "Complex Functionalities"
]

function implementProject(project: ProjectType): string {
    switch (project) {
        case "Large-Scale Apps":
            return "Implementing scalable TypeScript architecture for high-traffic apps."
        case "Team Collaborations":
            return "Utilizing TypeScript interfaces for effective team collaboration."
        case "Complex Functionalities":
            return "Managing complex business logic with TypeScript's advanced type system."
        default:
            return "Exploring innovative TypeScript applications."
    }
}

const implementedProjects: string[] = realWorldProjects.map(implementProject)
```