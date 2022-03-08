import React, { useState } from 'react';
import styled from 'styled-components';

import FavItem from './FavItem.jsx';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media all and (max-width: 820px) {
        max-height: 50vh;
        overflow-y: auto;
        flex-wrap: wrap;
        border-top: solid 1px #F4F4F4;
        border-bottom: solid 1px #F4F4F4;
    }
    @media all and (max-width: 616px) {
        overflow-x: auto;
    }
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin: 0 15px;
    max-width: 450px;
    @media all and (max-width: 1000px) {
        font-size: .5rem;
    }
    @media all and (max-width: 820px) {
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        width: 100vw;
    }
`;
export const Legend = styled.span`
    font-size: 2rem;
    margin-bottom: 25px;
    text-shadow: -2px 2px ${props => props.color}
    @media all and (max-width: 1000px) {
        font-size: 1.5rem;
    }
    @media all and (max-width: 820px) {
        margin-top: 10px;
    }
`;

const Favorites = (props) => {
    const { recentFavs, oldFavs, artistFavs } = props.history || [];
    const [limit, setLimit] = useState(5);

    return(
        <Wrapper>
            <Column>
                <Legend color={'#f48fb1'}>Your recent jams:</Legend>
                {recentFavs.map((item, index) => index < limit ? 
                <FavItem setTrack={props.setTrack} type={'favs'} data={item} hover={'#f48fb1'} key={index} />
                 : null)}
            </Column>
            <Column>
                <Legend color={'#2196f3'}>Your all-time favorites:</Legend>
                {oldFavs.map((item, index) => index < limit ? 
                <FavItem setTrack={props.setTrack} type={'favs'} data={item} hover={'#2196f3'} key={index} />
                 : null)}
            </Column>
            <Column>
            <Legend color ={'#f9a825'}>Your top artists:</Legend>
                {artistFavs.map((item, index) => index < limit ? 
                <FavItem setTrack={props.setTrack} type={'artistFavs'} data={item} hover={'#f9a825'} key={index}  />
                 : null)}
            </Column>
        </Wrapper>
    )
}

export default Favorites;