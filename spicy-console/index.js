let randomColor = require('randomcolor');
const emojis = require('./emojis.json');
const rndEmoji = () => {
    let emojisObj = Object.keys(emojis);
    let randomKey = emojisObj[Math.floor(Math.random() * emojisObj.length)];
    return emojis[randomKey];
}
const lowercaseify = array => array.map(item => item.toLowerCase())
const emojifyString = (emoji, string) => `${emoji} ${string} ${emoji}`
function spicyConsole(string, optionsArray = ['void']) {
    let _string = string;
    let options = lowercaseify(optionsArray);
    let darkColor = randomColor({luminosity:'dark', alpha:'1.0', hue:'monochrome'});
    let lightColor = randomColor({luminosity:'light', alpha:'0.4'}); // for readability
    let midColor = randomColor({luminosity:'bright', alpha:'1.0'});
    let emoji = rndEmoji();

    console.log(
        `%c ${options.includes('noemoji') ? _string : emojifyString(emoji, _string)}`, 
        `color: ${darkColor}; 
        ${options.includes('nobackground') ? '' : `background-color: ${lightColor};`}
        ${options.includes('noborder') ? '' : `border-color: ${midColor}; border-style: solid;`} 
        ${options.includes('nopadding') ? '' : `padding: 4px 7px 4px 0;`}`
        );
}
module.exports = spicyConsole;
