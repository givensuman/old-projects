import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import styled from 'styled-components';

const Holder = styled.div`
    overflow: visible;
    height: 100px;
    background-color: #1E1D1D;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    max-width: 1200px;
    width: 70vw;
    position: fixed;
    bottom: 0;
`;
const Backdrop = styled.div`
    height: 100px;
    width: 100vw;
    background-color: #1E1D1D;
    position: fixed;
    bottom: 0;
`;
const divStyle = {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 'auto'
}

const Player = ({ accessToken, trackURI }) => {

    const [play, setPlay] = useState(false);
    useEffect(() => setPlay(true), [trackURI]);
    const [volume, setVolume] = useState(null)
    
    if (!accessToken) return null;
    return (
        <div style={divStyle}>
            <Backdrop></Backdrop>
            <Holder>
                <SpotifyPlayer
                token={accessToken}
                play={play}
                callback={state => {
                    if (!state.isPlaying) setPlay(false);
                    setVolume(state.volume);

                }}
                showSaveIcon
                uris={trackURI ? [trackURI] : []}
                initialVolume={volume ? volume : null}
                styles={{
                    activeColor: '#7e57c2',
                    bgColor: '#f4f4f4',
                    color: '#1e1d1d',
                    loaderColor: '#7e57c2',
                    sliderColor: '#2196f3',
                    trackNameColor: '#1e1d1d',
                    sliderHandleColor: '#26c6da',
                    sliderTrackBorderRadius: '50%'
                }}
                />
            </Holder>
        </div>
    )   
}

export default Player;