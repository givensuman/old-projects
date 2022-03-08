import React, { useEffect } from 'react';
import styled from 'styled-components';

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://spotifinderapp.herokuapp.com/login';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100%;
    z-index: 100;
`;
const Title = styled.h1`
    font-size: 6rem;
    letter-spacing: 0.3rem;
    text-shadow: -2px 2px 2px #ef3550,
               -4px 4px 2px #f48fb1,
               -6px 6px 2px #7e57c2,
               -8px 8px 2px #2196f3,
               -10px 10px 2px #26c6da,
               -12px 12px 2px #43a047,
               -14px 14px 2px #eeff41,
               -16px 16px 2px #f9a825,
               -18px 18px 2px #ff5722;
    @media all and (max-width: 719px) {
        font-size: 3rem;
    }
    @media all and (max-width: 480px) {
        font-size: 2rem;
    }
`;
const Logo = styled.img`
    height: 100px;
    width: auto;
    z-index: -100;
    position: relative;
    right: 5px;
    border: solid white;
    border-radius: 50%;
    box-shadow: -2px 2px 2px #ef3550,
               -4px 4px 2px #f48fb1,
               -6px 6px 2px #7e57c2,
               -8px 8px 2px #2196f3,
               -10px 10px 2px #26c6da,
               -12px 12px 2px #43a047,
               -14px 14px 2px #eeff41,
               -16px 16px 2px #f9a825,
               -18px 18px 2px #ff5722;
    @media all and (max-width: 719px) {
    height: 3rem;
    }
    @media all and (max-width: 480px) {
        height: 2rem;
    }
`;

const SpotifyLogo = styled(Logo)`
    height: 30px;
    z-index: 5;
    box-shadow: none;
    background-color: #F4F4F4;
    @media all and (max-width: 719px) {
        height: 25px;
    }
`;

const Ribbon = styled.span`
    position: absolute;
    bottom: 5px;
    margin: 20px;
`;

export const Login = () => {

    useEffect(() => window.history.replaceState(null, '', '/'), []);

    return (
        <Wrapper>
            <Title>SP<Logo src='/images/vinyl.svg' alt='Vinyl record' />TIFINDER</Title>
            <button style={{ width: '300px' }} className='button' onClick={() => window.open(LOGIN_URI, '_self')}><SpotifyLogo src='/images/spotify.png' alt='Spotify logo' />Login With Spotify</button>
            <Ribbon>This site is still under development!
                    Please report any bugs you find <a href='https://github.com/givensuman/spotifinder/issues' style={{ textDecoration: 'none', color: '#2196f3'}}>here.</a>
            </Ribbon>
        </Wrapper>
    )
}

export default Login;