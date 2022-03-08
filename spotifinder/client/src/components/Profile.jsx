import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getFollowing, getPlaylists, getTopTracksShort, getTopTracksLong, getRecentlyPlayed, getUser, getTopArtistsLong } from '../spotify.js';

import Banner from './Banner.jsx';
import Favorites from './Favorites.jsx';
import Loading from './Loading.jsx';
import Player from './Player.jsx';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Profile = (props) => {

    const [user, setUser] = useState({
        name: 'Spotify User',
        followers: 0,
        following: 0,
        playlists: 0,
        link: 'https://spotify.com/',
        image: '/images/spotifylogo.png'
    });

    const [history, setHistory] = useState(null);
    
    const fetchUserData = async () => {

        const { display_name, followers, external_urls, images, id } = await getUser().then(res => {
            if (res.status !== 200) {
                props.setErrorState(true);
            } else {
                return res.data;
            }
        });
        const following = await getFollowing().then(res => res.data.artists.items.length);
        const playlists = await getPlaylists().then(res => res.data.items.length);
        setUser({
            name: display_name,
            followers: followers.total,
            following: following,
            playlists: playlists,
            link: external_urls.spotify,
            image: images[0].url,
            id: id
        });

        const recentFavs = await getTopTracksShort().then(res => {
            if (res.status !== 200) {
                props.setErrorState(true);
            } else {
                return res.data.items
            }
        });
        const oldFavs = await getTopTracksLong().then(res => {
            if (res.status !== 200) {
                props.setErrorState(true);
            } else {
                return res.data.items
            }
        });
        const artistFavs = await getTopArtistsLong().then(res => {
            if (res.status !== 200) {
                props.setErrorState(true);
            } else {
                return res.data.items
            }
        })
        const recentPlays = await getRecentlyPlayed().then(res => {
            if (res.status !== 200) {
                props.setErrorState(true);
            } else {
                return res.data.items
            }
        })
        setHistory({
            recentFavs: recentFavs,
            oldFavs: oldFavs,
            artistFavs: artistFavs,
            recentPlays: recentPlays
        });
    }
    useEffect(() => {
        fetchUserData();
    }, []);

    const [trackURI, setTrackURI] = useState(null);

    useEffect(() => window.history.replaceState(null, '', '/'), []);

    return (
        <Wrapper>
            {history ?
            <Wrapper>
                <Banner user={user} />
                <Link to={{
                    pathname: '/playlist',
                    state: {
                        user: user,
                        history: history
                    }
                }} className='button'>Find New Music</Link>
                <Favorites history={history} setTrack={setTrackURI} />
                {/* <Link to={{
                    pathname: '/history',
                    state: {
                        user: user,
                        history: history
                    }
                }} className='button'>See More</Link> */}
                <Player accessToken={props.token} trackURI={trackURI} />
            </Wrapper>
            : <Loading/>}
        </Wrapper>
    );
}

export default Profile;
