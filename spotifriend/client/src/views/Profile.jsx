import React, { useEffect, useState, useContext } from 'react'
import { StoreContext } from '../utils/store'
import { 
    getUser, getUserTopArtists, getUserTopTracks
 } from '../utils/spotify'

import Loading from '../components/Loading'
import Banner from '../components/ProfileBanner'
import TopArtists from '../components/ProfileTopArtists'
import TopTracks from '../components/ProfileTopTracks'

const Profile = () => {

    const { token } = useContext(StoreContext)
    const [data, setData] = useState({
        loading: true,
        user: {},
        top: {
            artists: {},
            tracks: {}
        }
    })

    useEffect(() => {
        const getData = async () => {
            await getUser(token)
                .then(res => {
                    let d = data
                    d.user = res.data
                    setData(d)
                })
                .catch(err => console.error(err))
            await getUserTopArtists(token)
                .then(res => {
                    let d = data
                    d.top.artists = res.data
                })
                .catch(err => console.error(err))
            await getUserTopTracks(token)
                .then(res => {
                    let d = data
                    d.top.tracks = res.data
                    setData(d)
                })
                .catch(err => console.error(err))
            setData({...data, loading: false})
        }
        getData()
    }, [token])

    return (
        <>
        {data.loading ? <Loading /> :
        <>
        <Banner data={data.user} />
        <TopArtists data={data.top.artists} />
        <TopTracks data={data.top.tracks} />
        <button onClick={() => console.log(data)}>Click me to log data</button>
        </>
        }
        </>
    )
}

export default Profile