import React from 'react';
import styled from 'styled-components';

const Spinner = styled.img`
    margin-top: 200px;
    height: 300px;
    width: auto;
    animation: rotate 3s linear 0s infinite;
    -webkit-animation: rotate 3s linear 0s infinite;
    @keyframes rotate
    {
    0%   {}
    100% {transform: rotate(-360deg);}
    }
    @-webkit-keyframes rotate
    {
    0%   {}
    100% {-webkit-transform: rotate(-360deg);}
`;


const Loading = () => <Spinner src='/images/vinyl.svg' alt='spotifinder logo' />

export default Loading;