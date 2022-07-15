# factfun
### A CLI tool for printing fun facts during development

---

To install with npm, run: 
```node
npm install --save-dev factfun
```
or with yarn, run:
```node
yarn add factfun --dev
```
Then add the `factfun` command to the end of the development script in your project's package.json:
```json
"scripts": {
    "dev": "node index.js && factfun"
}
```
And run the script to learn something new!
```terminal
[Server] Compiling...
[Server] Success!
 🤯 A flock of flamingos is called… wait for it… a flamboyance! Fancy.
```
