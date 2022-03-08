import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import FavItem from './FavItem.jsx';
import { Wrapper, Column as ColumnNoMargin, Legend } from './Favorites.jsx';
import Player from './Player.jsx'
import Loading from './Loading.jsx';

const WrapperTight = styled(Wrapper)`
max-width: 1600px;
margin-top: 5%;
`;
const Backdrop = styled.div`
    position: fixed;
    top: 0;
    background-color: #1E1D1D;
    text-align: left;
    z-index: 10;
    margin-top: 20px;
`;
const Column = styled(ColumnNoMargin)`
    margin-bottom: 150px;
`;
const GoBack = styled.img`
    position: fixed;
    top: 20px;
    left: 20px;
    height: 75px;
    width: 75px;
    z-index: 10;
    transition-duration: 0.3s;
    &:hover {
        transform: scale(1.2);
    }
`;
const HideMyMistakes = styled.div`
    position: fixed;
    top: 0;
    height: 110px;
    z-index: 1;
    width: 100vw;
    background-color: #1E1D1D;
`;

const History = (props) => {
    const location = useLocation();

    const { recentFavs, oldFavs, artistFavs } = location.state.history;

    const [trackURI, setTrackURI] = useState(null);

    return (
        <Wrapper>
            <HideMyMistakes></HideMyMistakes>
            <Link to='/'><GoBack src='/images/back.svg' alt='back arrow' /></Link>
            {location.state.history ? 
            <WrapperTight>
                <Column> 
                    <Backdrop><Legend color={'#f48fb1'}>Your recent jams:</Legend></Backdrop>
                    {recentFavs.map((item, index) => 
                    <FavItem type='favs' data={item} hover={'#f48fb1'} key={index} setTrack={setTrackURI} />)}
                </Column>
                <Column>
                    <Backdrop><Legend color={'#2196f3'}>Your all-time favorites:</Legend></Backdrop>
                    {oldFavs.map((item, index) => 
                    <FavItem type='favs' data={item} hover={'#2196f3'} key={index} setTrack={setTrackURI} />)}
                </Column>
                <Column>
                    <Backdrop><Legend color={'#f9a825'}>Your top artists:</Legend></Backdrop>
                    {artistFavs.map((item, index) => 
                    <FavItem type='artistFavs' data={item} hover={'#f9a825'} key={index} setTrack={setTrackURI} />)}
                </Column>
                {/* <Player accessToken={props.token} trackURI={trackURI} /> */}
            </WrapperTight>
            : <Loading />    
            }
            
            
        </Wrapper>
        )
}

export default History;