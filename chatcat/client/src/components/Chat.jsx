import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { SocketContext } from '..';
import '../styles/Chat.scss';

import ChatInterface from './ChatInterface';
import ChatDetails from './ChatDetails';

export default function Chat({ name, id, sessionId, setLogin }) {

    // Main chat window. Contains information on whether or not the chat has loaded, and all critical user/session info

    const socket = useContext(SocketContext);
    const history = useHistory();

    const [sessionInfo, setSessionInfo] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() =>{
        socket.emit('get room info', { sessionId : sessionId })
    }, [sessionId, socket])
    
    socket.on('get room info', data => setSessionInfo(data));

    socket.on('refresh session info', () => {
        socket.emit('get room info', { sessionId : sessionId });
    })

    const leaveRoom = async () => {
        if (sessionInfo !== null) {
            if (sessionInfo.users.length > 1) {
                setLogin(false);
                await socket.emit('leave room', {
                    id: id, 
                    sessionId: sessionId
                })
            }
            else {
                setLogin(false);
                await socket.emit('delete room', { sessionId : sessionId });  
            }
        } else {
            console.log('Error: no session info');
        }
    }

    const exit = () => {
        setLoad(false);
        setTimeout(() => {
            leaveRoom();
            history.push('/');
        }, 1200);
    }

    window.onbeforeunload = leaveRoom;

    return (
        <div>      
        {sessionInfo ?
            <div className='flex-row chat-wrapper'>
                <ChatInterface
                    load={load}
                    name={name} 
                    id={id}
                    sessionId={sessionId}
                />
                <ChatDetails 
                    sessionInfo={sessionInfo} 
                    leaveRoom={exit}
                    load={load}
                    setLoad={setLoad}
                    sessionId={sessionId}
                />
            </div>
        : null}
        </div>
    )
}
