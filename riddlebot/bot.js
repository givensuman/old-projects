const discord = require('discord.js')
const axios = require('axios')
require('dotenv').config()

const client = new discord.Client()

client.on('ready', () => {
    console.log('riddlebot is up and running 🚀')
})

let answer = null
const answerGif = 'https://i.gifer.com/2JlZ.gif'
let embed = new discord.MessageEmbed()

const simplify = string => {
    // Fixes some inconsistent responses with the API
    let punctuation = ['!', '?', '.']
    if (punctuation.includes(string[string.length - 1])) {
        string = string.substring(0, string.length - 1)
    }
    string.replace('A', '').replace('An', '')
    return string.toLowerCase()
}

client.on('message', async msg => {
    if (msg.content === '?riddle') {
        let riddle = await axios('https://www.no-api-key.com/api/v1/riddle')
        // API returns with {question:'abc', answer:'xyz'}
            .then(res => res.data)
            .catch(err => console.log(err))

        if (riddle) {
            answer = riddle.answer // Overrides previous riddle answer 
            msg.channel.send({ embed: {
                color: 0x6CAD0E,
                description: riddle.question
            }})
            msg.channel.send(`Click to reveal the answer! ||${riddle.answer}||`) // Spoiler tags!
        }

    } else if (simplify(msg.content) === simplify(answer)) {
        embed
            .setColor(0x6CAD0E)
            .setTitle(`${msg.author.username} got it right! 🎊`)
            .setImage(answerGif)
        msg.channel.send(embed)
        answer = null
    }
})

client.login(process.env.TOKEN)