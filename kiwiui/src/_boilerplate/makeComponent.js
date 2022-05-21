const fs = require("fs")

let component = process.argv.slice(2)[0]
component = component[0].toUpperCase() + component.substring(1)

try {
    fs.mkdirSync(`./src/${component}`)
} catch {
    console.log("Directory already exists...")
}

fs.copyFileSync('./src/_boilerplate/index.ts', `./src/${component}`)
fs.copyFileSync('./src/_boilerplate/Boilerplate.tsx', `./src/${component}`)
fs.copyFileSync('./src/_boilerplate/Boilerplate.stories.tsx', `./src/${component}`)

fs.renameSync(`./src/${component}/Boilerplate.tsx`, `./src/${component}/${component}.tsx`, () => console.log("Renaming component..."))
fs.renameSync(`./src/${component}/Boilerplate.stories.tsx`, `./src/${component}/${component}.stories.tsx`, () => console.log("Renaming component story..."))