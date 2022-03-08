import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function ChatInput({ load, sendMessage }) {

    // Bottom section of chat interface containing a text input, emoji button, and send button that transforms to prevent spam

    const [message, setMessage] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [timer, setTimer] = useState(0);

    const sendFunctions = () => {
        if (timer === 0) {
            sendMessage(message);
            setMessage('');
            setShowEmoji(false);
            setTimer(3);
            }
    }

    const keyPress = e => {
        if (e.key === 'Enter') {
            sendFunctions();
        }
    }

    useEffect(() => {
        if (timer !== 0 ){
            setTimeout(() => setTimer(timer - 1), 1000)
        }
    }, [timer])

    const emojiArray = ['😃', '😅', '🤣', '😍', '😎', '😜', '😸'];

    return (
        <div className={`input-div flex-row animate__animated animate__${load ? 'fadeInUpBig' : 'fadeOutLeft'}`}>
            <div className='emoji-div'
            style={{visibility: showEmoji ? 'visible' : 'hidden'}}>
                {emojiArray.map(emoji => <button className='emoji' key={emoji}
                onMouseDown={e => {
                    e.preventDefault();
                }}
                onClick={e => {
                    e.preventDefault();
                    setMessage(message + emoji);
                    }}>
                    {emoji}
                </button>)
                }
            </div>
                <i className="far fa-laugh-wink hover"
                onClick={() => setShowEmoji(!showEmoji)}></i>
                <Form onSubmit={e => e.preventDefault()}>
                    <Form.Group>
                    <Form.Control
                        onKeyPress={e => keyPress(e)}
                        contentEditable='true'
                        className='chat-input'
                        value={message} 
                        onChange={e => {
                            e.preventDefault();
                            if (message.length < 100) { 
                                setMessage(e.target.value);
                            }
                            }} 
                        type='text' 
                        placeholder='Your message...'
                    />
                    </Form.Group>
                </Form>
                    <button 
                        onClick={sendFunctions}
                        onMouseDown={e => e.preventDefault()}
                        className='send'
                        style={{ cursor: `${timer === 0 ? 'pointer' : 'wait'}` }}
                        >
                        {timer === 0 ? <i className="fas fa-paper-plane hover"></i> : <span className='hover timer'>{timer}</span>}
                    </button>
                {/* <img className='chat-logo' src='/images/cat.png' alt='logo' /> */}
            </div>
    )
}
