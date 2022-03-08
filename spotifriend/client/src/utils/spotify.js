import axios from 'axios'

const route = 'https://api.spotify.com/v1'
const makeHeader = token => {
    return ({
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
        }
    })
}

export const getUser = async token => {
    let headers = makeHeader(token)
    return await axios(`${route}/me`, headers)
}

export const getUserTopArtists = async token => {
    let headers = makeHeader(token)
    return await axios(`${route}/me/top/artists`, headers)
}

export const getUserTopTracks = async token => {
    let headers = makeHeader(token)
    return await axios(`${route}/me/top/tracks`, headers)
}