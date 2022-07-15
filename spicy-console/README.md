# spicy-console
### Console logging with a touch of spice 🌶️

---

To use:

```
const cnsl = require('spicy-console');

cnsl('Hello, World!');
```

👇 then

![screenshot](https://github.com/tinkoh/spicy-console/blob/main/screenshot.PNG?raw=true)

👇 then

Wonder how you ever lived without this.

---

Optionally include:```noborder```, ```nobackground```, ```noemoji```, or ```nopadding``` in an array to adjust the output to your liking.

Examples:
```
const cnsl = require('spicy-console');
// for those that hate emojis
cnsl('Hello, World!', ['noemoji']);
```
```
const spicyConsole = require('spicy-console);
// for those that hate fun, reusably
const cnsl = string => spicyConsole(string, ['nobackground', 'noemoji']);
cnsl('Hello, World!');
