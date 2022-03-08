import React from 'react';

import Message from './Message';

export default function ChatLog({ messageArray, id }) {

    // Chat log that loops over the array of message data
    
    return (
        <div className='log' id='chatlog'>
                {messageArray.map(message => 
                    <Message 
                        key={message.key}
                        sender={message.sender}
                        text={message.text}
                        time={message.timestamp}
                        self={message.senderId === id ? true : false}
                    />
                    )}
            </div>


    )
}
