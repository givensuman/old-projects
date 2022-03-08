import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    margin-right: auto;
    padding: 0.75em 0;
    width: 100%;
    cursor: pointer;
    transition-duration: 0.15s
    &:hover {
        color: ${props => props.color};
    }
`;
const Icon = styled.img`
    height: 6em;
    width: auto;
    // object-fit: cover;
    // border-radius: 50%;
    // overflow: hidden;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60ch;
    @media all and (max-width: 800px) {
        max-width: 100%;
        width: auto;
        
    }
`;
const TopText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 10px;
    @media all and (max-width: 800px) {
        font-size: 1rem;
    }
    
`;
const BottomText = styled(TopText)`
    font-size: 1rem;
    font-weight: lighter;
    @media all and (max-width: 800px) {
        font-size: 0.8rem;
    }
`;
const Link = styled.img`
    height: 20px;
    opacity: 0.5;
    margin-left: 20px;
    cursor: pointer;
    transition-property: transform;
    transition-duration: 0.5s;
    visibility: ${props => props._visibility ? 'visible' : 'hidden'}
    &:hover {
        opacity: 1;
        transform: scale(1.2)
    }
`;

const FavItem = (props) => {

    const type = props.type;
    const [data, setData] = useState({
        img: '',
        name: '',
        subname: '',
        link: ''
    })
    
    useEffect(() => {
        if (type === 'favs') {
            setData({
                img: props.data.album.images[2].url,
                name: props.data.name,
                subname: props.data.artists[0].name,
                link: props.data.external_urls.spotify
            })
        } else if (type === 'artistFavs') {
            let genres = props.data.genres.join(', ')
            setData({
                img: props.data.images[2].url,
                name: props.data.name,
                subname: genres,
                link: props.data.external_urls.spotify
            })
        } else {
            setData({
                img: props.img,
                name: props.name,
                subname: props.subname,
                link: props.link
            })
        }
    }, [type]);

    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <Item onClick={() => props.setTrack ? props.setTrack(props.data.uri) : null} color={props.hover} 
        onMouseEnter={()=>setMouseEnter(true)} onMouseLeave={()=>setMouseEnter(false)}>
            <Icon src={data.img} />
            <Text>
                <TopText>{data.name}</TopText>
                <BottomText>{data.subname}</BottomText>
            </Text>
            <Link _visibility={mouseEnter} src='/images/link.png' alt='link icon' 
            onClick={() => window.open(data.link)}/>
        </Item>
    )
}

export default FavItem;