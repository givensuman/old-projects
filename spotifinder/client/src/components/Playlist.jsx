import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import FavItem from './FavItem.jsx';
import Loading from './Loading.jsx';
import Player from './Player.jsx';

import { getRecommendationsForTracks, createPlaylist, addTracksToPlaylist } from '../spotify.js';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const PlaylistDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin: 150px 0;
    padding-left: 15px;
    opacity: ${props => props.input ? 0.2 : 1}
    @media all and (max-width: 1010px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 508px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media all and (max-width: 415px) {
        position: relative; 
        top: 150px;
    }
`;
const GoBack = styled.img`
    position: fixed;
    top: 40px;
    left: 40px;
    height: 75px;
    width: 75px;
    transition-duration: 0.3s;
    &:hover {
        transform: scale(1.2);
    }
    @media all and (max-width: 415px) {
        position: static;
    }
`;
const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #1E1D1D;
    position: fixed;
    top: 0;
    height: 150px;
    opacity: 1;
    @media all and (max-width: 415px) {
        flex-direction: column;
        height: 200px;
        z-index: 100;
        padding-bottom: 20px;
    }
`;
const InputDiv = styled.div`
    display: flex;
    position: fixed;
    top: 30%;
    flex-direction: column;
    height: ${props => props.show ? 'auto' : '0'};
    width: ${props => props.show ? 'auto' : '0'};
    overflow: hidden;
    opacity: 1;
    background-color: #1E1D1D;
    padding: ${props => props.show ? '20px' : '0'};
    border-radius: 10px;
    z-index: 50;

`;
const Option = styled.input`
    padding: 5px;
    border-radius: 5px;
    width: 300px;
    height: ${props => props.height};
    outline: none;
    border-color: ${props => props.outline ? '#ef3550' : null}
`;
const Text = styled.span`
    font-size: 1.1rem;
    margin-bottom: 15px;
`;
const buttonStyle = {
    height: 'auto',
    width: '40%',
    margin: '5%'
}
const Anchor = styled.a`
    text-decoration: none;
    color: #26c6da;
`;
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    @media all and (max-width: 732px) {
        flex-direction: column;
    }
`;

const Playlist = (props) => {
    const location = useLocation();

    const { oldFavs, artistFavs } = location.state.history;
    const { user } = location.state;
    const [seeds, setSeeds] = useState({
        tracks: '',
        artists: ''
    })

    const [playlist, setPlaylist] = useState([]);

    const [trackURI, setTrackURI] = useState(null);
    
    const fetchPlaylist = async () => {
        const _playlist = await getRecommendationsForTracks(seeds.tracks, seeds.artists).then(res => res.data.tracks);
        setPlaylist(_playlist);
    }

    useEffect(() => {
        const seedTracks = [];
        oldFavs.slice(0, 3).map(item => seedTracks.push(item.id));
        const seedArtists = [];
        artistFavs.slice(0, 2).map(item => seedArtists.push(item.id));

        const trackString = seedTracks.length > 0 ? seedTracks.join('%2C') : '';
        const artistString = seedArtists.length > 0 ? seedArtists.join('%2C') : '';
        setSeeds({tracks: trackString, artists: artistString});

    }, [])

    useEffect(() => {
        fetchPlaylist();
    }, [seeds])
    
    const colorArray = ['#ef3550', '#f48fb1', '#7e57c2', '#2196f3', '#26c6da', '#43a047', '#eeff41', '#f9a825', '#ff5722']

    const [input, setInput] = useState(false);
    const [playlistInfo, setPlaylistInfo] = useState({
        title: '',
        description: '',
        url: ''
    })
    const updatePlaylistInfo = (value, target) => {
        let shallowCopy = playlistInfo;
        shallowCopy[target] = value;
        setPlaylistInfo(shallowCopy);
    }

    const exportPlaylist = async () => {
        setAddText('Adding...')
        let playlistID = '';
        await createPlaylist(user.id, playlistInfo.title, playlistInfo.description).then(res => {
            playlistID = res.data.id; 
            updatePlaylistInfo(res.data.external_urls.spotify, 'url')
        });
        let playlistURIs = [];
        playlist.map(item => playlistURIs.push(item.uri));
        playlistURIs.join();
        await addTracksToPlaylist(playlistID, encodeURI(playlistURIs)).then(res=> console.log(res)).catch(err => setAddText('Error'));
        setAddText('Success!');
    }
    const [inputError, setInputError] = useState(false);
    const [addText, setAddText] = useState('Add');

    return(
        <Wrapper>
            <InputDiv show={input}>
                <Text>Add this playlist to your Spotify account</Text>
                 <Option outline={inputError} type="text" height='20px' placeholder='Give your playlist a title... (Required)' 
                 onChange={(e)=>updatePlaylistInfo(e.target.value, 'title')}/> 
                 <Option type='text' height='50px' placeholder='Give your playlist a description... (Optional)' onChange={(e)=>updatePlaylistInfo(e.target.value, 'description')}/>
                 <div style={{display: 'flex', flexDirection: 'row'}}>
                    <button className='button' style={buttonStyle} onClick={()=>{setInput(false); setAddText('Add')}}>Cancel</button>
                    <button className='button' style={buttonStyle} onClick={()=>{
                        if (playlistInfo.title.length === 0) {
                            setInputError(true);
                        } else {
                            setInputError(false);
                            exportPlaylist();
                        }
                        }}>{addText}</button>
                 </div>
                 {addText === 'Success!' ? <Text>Click <Anchor href={playlistInfo.url}>here</Anchor> to view your new tunes!</Text> : null}
            </InputDiv>
            <DivRow>
                <Link to='/'><GoBack src='/images/back.svg' alt='back arrow' /></Link>
                {playlist.length > 0 ?
                <ButtonDiv>
                    <button style={{ margin: '2% 10px', opacity: input ? '0.2' : '1' }} className='button' onClick={()=> {setPlaylist([]); fetchPlaylist()}}>New Playlist</button>
                    <button style={{ margin: '2% 10px', opacity: input ? '0.2' : '1' }} className='button' onClick={()=> setInput(true)}>Add To Spotify</button>
                </ButtonDiv>
                : null}
            </DivRow>
            {playlist.length > 0 ? 
            <PlaylistDiv input={input}>
            {playlist.map(item => <FavItem 
                img={item.album.images[2].url}
                name={item.name}
                data={item}
                subname={item.artists[0].name}
                link={item.external_urls.spotify}
                hover={colorArray[Math.floor(Math.random() * colorArray.length)]}
                key={item.id}
                setTrack={setTrackURI}
                    />)}
            </PlaylistDiv>
            : <div style={{ position: 'relative', top: '50px'}}><Loading/></div>}
            <Player accessToken={props.token} trackURI={trackURI}/>
        </Wrapper>
    )
}

export default Playlist;