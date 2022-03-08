const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { v4 : uuid } = require('uuid')
require('dotenv').config()

const app = express().use(cors()).use(express.json())

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

app.get('/login', (req, res) => {
    const scope = 'user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-private user-read-email user-library-read user-library-modify streaming app-remote-control user-read-playback-position user-top-read user-read-recently-played playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public'

    res.redirect(
        `https://accounts.spotify.com/authorize?${new URLSearchParams({
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: scope,
            redirect_uri: REDIRECT_URI,
            state: uuid()
        })}`
    )
})

app.post('/auth', async (req, res) => {
    const data = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: REDIRECT_URI
    }), {
        headers: {
            'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        }   
    })
        .then(data => res.send(data.data))
        .catch(err => console.error(err))
})

const PORT = process.env.PORT || 1337
app.listen(PORT, () => console.log(`Server is blasting off on port ${PORT} 🚀`))