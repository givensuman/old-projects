import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { SocketContext } from '..';
import '../styles/Login.scss'

export default function Create({ setLogin, setSessionId, setName, randomName }) {

    // Subset of login UX to create a new session

    const socket = useContext(SocketContext);
    const history = useHistory();

    const [loginName, setLoginName] = useState('Anonymous');
    const [sessionName, setSessionName] = useState(randomName);
    const [password, setPassword] = useState('');

    const [load, setLoad] = useState(true);

    const handleInput = (e, target) => {
        let value = e.target.value;
        switch(target) {
            case 'name':
                setLoginName(value);
                break;
            case 'sessionName':
                setSessionName(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const createRoom = () => {
        socket.emit('create room', {
            name: loginName,
            sessionName: sessionName,
            password: password
        });
    }

    socket.on('login', data => {
        setSessionId(data.id);
        setLogin(data.state);
    });

    return (
        <div className={`flex-row wrapper center animate__animated animate__${load ? 'bounceInUp' : 'fadeOutUp'}`}>
            <div className='flex-col'>
            <div className='login-wrapper center'>
            <Form action="submit">
                <Form.Group>
                    <Form.Label className='space'>Name</Form.Label>
                    <Form.Control onChange={e => handleInput(e, 'name')} type='text' placeholder='Anonymous' />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='space'>Room Name</Form.Label>
                    <Form.Control onChange={e => handleInput(e, 'sessionName')} type='text' placeholder={randomName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='space'>Password</Form.Label>
                    <Form.Control onChange={e => handleInput(e, 'password')} type='password' placeholder='Max: 50 characters'/>
                </Form.Group>
            </Form>
            <Button className='login-button'
                onClick={() => {
                    setLoad(false);
                    setTimeout(() => {       
                        createRoom();
                        setName(loginName);
                    }, 1200)
                }}>
                <img src='/images/arrow.png' alt='create' />
            </Button>
            </div>
            <Button className='create-button'
                    onClick={() => history.push('/')}
            >Go Back</Button>
            </div>
        </div>
    )
}
