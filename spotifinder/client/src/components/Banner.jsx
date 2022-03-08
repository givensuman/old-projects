import React from 'react';
import styled from 'styled-components';

import { logout } from '../spotify.js';

const flexCol = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const flexRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}
const Container = styled.div`
    width: auto;
    margin-top: 3%;
`;
const Name = styled.h1`
    font-size: 2rem;
    // letter-spacing: 0.25em;
    // text-shadow: -1px 1px 1px #ef3550,
    //            -2px 2px 1px #f48fb1,
    //            -3px 3px 1px #7e57c2,
    //            -4px 5px 1px #2196f3,
    //            -5px 5px 1px #26c6da,
    //            -6px 6px 1px #43a047,
    //            -7px 7px 1px #eeff41,
    //            -8px 8px 1px #f9a825,
    //            -9px 9px 1px #ff5722;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    transition-duration: 0.5s;
    transition-property: text-shadow;
    margin-right: 20px;
    &:hover {
        text-shadow: none;
    }
`;
const Picture = styled.img`
    height: 10em;
    width: 10em;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    border: solid 2px #f4f4f4;
    cursor: pointer;
    &: hover {
        opacity: 0.5;
    }
    @media all and (max-width: 567px) {
        height: 25vw;
        width: 25vw;
    }
`;
const SubHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 15px;
    @media all and (max-width: 567px) {
        font-size: 0.75rem;
    }
    @media all and (max-width: 350px) {
        position: relative;
        right: 30px;
    }
`;
const Count = styled.span`
    color: ${props => props.color}
`;
const CountId = styled.span``;
const Logout = styled.button`
    color: #f4f4f4;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 5px;
    transition-duration: 0.3s;
    position: relative;
    top: 5px;
    left: 5px;
    &: hover {
        transform: scale(1.1);
    }
`;

const Banner = (props) => {

    const { name, followers, following, playlists, link, image } = props.user;

    return(
        <Container style={flexRow}>
            <Picture src={image} alt='User profile picture' onClick={() => window.open(link)}/>
            <div style={flexCol}>
                <div style={flexRow}>
                    <Name onClick={() => window.open(link)}>
                        {name}
                    </Name>
                    <Logout style={flexCol} onClick={logout}><img src='/images/logout.svg' alt='Logout button' /><span>Logout</span></Logout>
                </div>
                <div style={flexRow}>
                    <SubHeading>
                        <Count color={'#eeff41'}>{followers}</Count>
                        <CountId>Followers</CountId>
                    </SubHeading>
                    <SubHeading>
                        <Count color={'#eeff41'}>{following}</Count>
                        <CountId>Following</CountId>
                    </SubHeading>
                    <SubHeading>
                        <Count color={'#eeff41'}>{playlists}</Count>
                        <CountId>Playlists</CountId>
                    </SubHeading>
                </div>
            </div>
        </Container>
    )
}

export default Banner;