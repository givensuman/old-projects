import React, { useState, useContext } from 'react';

import { SocketContext } from '..';
import '../styles/Chat.scss';

import Participants from './Participants';

export default function ChatDetails({ sessionInfo, leaveRoom, load, sessionId }) {

    // Sidebar window of chat containing session info and a list of users, as well as a leave button

    const socket = useContext(SocketContext);

    const [sessionUsers, setSessionUsers] = useState(sessionInfo.users);

    socket.on('refresh users', () => {
        socket.emit('get users', { sessionId : sessionId });
    })

    socket.on('get users', data => {
        setSessionUsers(data);
    });

    return (
        <div className={`flex-col details animate__animated animate__${load ? 'fadeInRightBig' : 'fadeOutUp'}`}>
            <span className='room-name'>{sessionInfo.sessionName}</span>
            <span className='room-id'>
                {sessionInfo.sessionId}
                <i className="fas fa-copy copy"
                    onClick={() => navigator.clipboard.writeText(sessionInfo.sessionId)}></i> 
            </span>
            <Participants users={sessionUsers} />
            <div className='flex-row center'>
                <button className='leave' onClick={leaveRoom}>Leave Room</button>
            </div>
        </div>
    )
}
