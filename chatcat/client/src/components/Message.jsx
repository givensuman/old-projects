import React from 'react';

import '../styles/Chat.scss';

export default function Message({ sender, text, time, self }) {

    // Component for stylized messages, differentiates from the user, other users, and system messages

    if (sender === 'sys') {
        return (
            <p className='sys-message animate__animated animate__fadeIn'>{text}</p>
        )
    } else {
        return (
            <div className='message-div'>
                {self ? null : <span>{sender}</span>} 
                <div className={`message ${self ? 'self-message' : 'nonself-message'}`}>
                    <span>{text}</span>
                </div>
                <div className={`${self ? 'self' : 'nonself'}`}>
                    <span className='time'>{time}</span>
                </div>
            </div>
        )
    }
}
