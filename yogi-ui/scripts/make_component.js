const fs = require('fs');
const { component, story, barrel } = require('./component_template.js');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// grab component name from terminal argument
let [ name ] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');
name = capitalizeFirstLetter(name)
const dir = `./src/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);