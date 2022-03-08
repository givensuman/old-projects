import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
  max-width: 70ch;
`;

export default function Error({ setErrorState, setAccessToken }) {
    const fixError = () => {
        setAccessToken('');
        setErrorState(false);
    }

    return (
        <Wrapper>
            <Text>Oops! You encountered an error. This could be because Spotify's services are down right now, but it is more likely because you don't have enough Spotify activity to use this app. Go listen to some tunes and head back! Click <a onClick={fixError}>here</a> to try again.</Text>
        </Wrapper>
    )
}

