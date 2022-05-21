// TODO: implement better text shortening and language swapping, also !news should provide help prompt

const discord = require('discord.js')
const axios = require('axios')
require('dotenv').config()

const client = new discord.Client()

client.on('ready', () => {
    console.log('newsinator is up and running 🚀')
})

client.on('message', async message => {
    if (message.content.substring(0, 5) === '!news') {

        if (message.content.length === 5) {
            message.reply({ embed: {
                    color: 0x5DE0E6,
                    title: "Hi! I'm a news bot.",
                    url: 'https://newsinator.netlify.app',
                    fields: [
                        {
                            name: 'Here are my commands:',
                            value: '> Note: you can initiate me anytime with `!news`'
                        },
                        {
                            name: 'Type a query after `!news` to get news on it',
                            value: '> Ex: `!news cats` gets cat-related news'
                        },
                        {
                            name: 'Use a `--` flag followed by a two letter language key to change languages',
                            value: `> Ex: \`!news --es cats\` gets cat-related news *en español*
                            Possible keys are: \`en (default) ar jp in es fr\`
                            > Note: if using a language flag, it must come before any search queries
                            News results may be limited in non-english searches`
                        },
                        {
                            name: 'I even support advanced search options',
                            value: `
                            Use a \`-\` flag to remove queries from results
                            > Ex: \`!news cats -dogs\` removes dogs from our results
                            You can also use an \`AND\` or \`OR\` operator
                            > Ex: \`!news cats AND dogs AND hamsters\` provides crucial cat-dog-hamster news
                            > Note: you can't use \`AND\` and \`OR\` in the same query
                            `
                        },
                        {
                            name: 'Lastly, be specific!',
                            value: 'I am an unbiased bot powered by the NewsData API. Because I lack bias, I may give you news you don\'t want if your queries are vague.'
                        },
                        {
                            name: '\u200b',
                            value: '[Check out the website!](https://newsinator.netlify.app)'
                        }
                    ]
                }
            })
        }
        else {
            let query = message.content.substring(6, message.length)
            let lang = 'en'
            if (query.substring(0, 2) === '--') {
                lang = query.substring(2, 4)
                query = query.substring(5, query.length)
            }
            const encodedQuery = encodeURI(query)
            const translations = {
                'en': "Here's some news on ",
                'ar': "Hadhih baed 'akhbar ",
                'jp': "Koko ni ikutsu ka no nyūsu ga arimasu ",
                'in': "Yahaan kuchh samaachaar hain ",
                'es': "Aquí hay algunas noticias sobre ",
                'fr': "Voici des nouvelles sur "
            }

            await axios(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=${lang}&&country=us&q=${encodedQuery}`)
                .then(res => {
                    let news = res.data.results || []
                    console.log(lang)
                    console.log(query)
                    console.log(news[0])
                    let currentTime = new Date().getTime()
                    let elapsedTime = currentTime - message.createdTimestamp
    
                    let embedObj = {
                        color: 0x5DE0E6,
                        title: translations[lang] + `\`${query}\``,
                        fields: [],
                        footer: {
                            text: `Generated for ${message.author.username} in ${elapsedTime}ms`
                        }
                    }
                    if (news.length === 0) {
                        embedObj.fields.push({
                            name: 'Slow news day...',
                            value: "I couldn't find anything on that topic. Try again later!"
                        })
                    }
                    news.map((item, index) => {
                        if (index < 5) {
                            let description = ''
                            if (item.description) {
                                if (item.description.length > 100) {
                                    description = item.description.substring(0, 101) + ' ...'
                                } else {
                                    description = item.description
                                }
                            } else {
                                description = 'No additional information provided.'
                            }
                            
                            embedObj.fields.push({
                                name: item.title,
                                value: `> ${description}
                                > ${item.pubDate}
                                [Source](${item.link})`
                            })
                        }
                    })
    
                    message.reply({ embed: embedObj })
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.statusText === 'UNPROCESSABLE ENTITY') {
                        message.reply("your query appears to be invalid. Try `!news` to get help.")
                    } else {
                        message.reply("I'm sorry, something went wrong. Try again later!")
                    }
                })
        }
        
    }
})


client.login(process.env.TOKEN)