import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';

import { SocketContext } from '..';
import '../styles/Chat.scss';

import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

export default function ChatInterface({ name, id, sessionId, load }) {

    // Holds the input and the chat log, as well as contains most socket functionality of the chat

    const socket = useContext(SocketContext);
    const [messageArray, setMessageArray] = useState([{
        text: 'This is the beginning of your chat history.',
        sender: 'sys',
        senderId: 'sys',
        timestamp: null,
        key: uuidv4()
    }]);
    // useEffect(() => console.log(messageArray), [messageArray])
    const encrypt = (text, key) => {
        return CryptoJS.AES.encrypt(text, key).toString();
    }

    const decrypt = (text, key) => {
        let bytes = CryptoJS.AES.decrypt(text, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    const updateMessageArray = data => setMessageArray([...messageArray, data])

    const sendMessage = message => {
        if (message.length && message.length > 0) {
            let time = new Date().toLocaleTimeString(
                navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                }
            );
            if (time[0] === '0') {
                time = time.substring(1);
            }
            let key = uuidv4();
            let baseMessage = {
                text: message,
                sender: name,
                senderId: id,
                timestamp: time,
                key: key
            }
            let data = {
                sessionId: sessionId,
                message: {
                    text: encrypt(message, key),
                    sender: name,
                    senderId: id,
                    timestamp: time,
                    key: key
                }
            }
            updateMessageArray(baseMessage);
            socket.emit('message', data);
        } else {
            return null;
        }
    }

    socket.on('sys message', data => {
        updateMessageArray({
            text: data,
            sender: 'sys',
            senderId: 'sys',
            timestamp: null,
            key: uuidv4()
        })
    })

    socket.on('message', data => {
            let { text, key, sender, senderId, timestamp } = data;
            let newMessage = decrypt(text, key);
            updateMessageArray({
                text: newMessage,
                key: key,
                sender: sender,
                senderId: senderId,
                timestamp: timestamp
            });
        });

    useEffect(() => {
        let log = document.getElementById('chatlog');
        if (log.scrollHeight) {
            log.scrollTop = log.scrollHeight;
        }
    })

    return (
        <div className={`logwrapper animate__animated animate__${load ? null : 'fadeOut'}`}>
            <ChatInput
                sendMessage={sendMessage}
                load={load}
            />
            <ChatLog 
                messageArray={messageArray} 
                id={id}
            />
        </div>
    )
}
