import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { SocketContext } from '..';
import '../styles/Login.scss';

export default function Login({ setLogin, setSessionId, setName }) {

    // Home and landing point for /, allows users to login to a session or create a new one

    const history = useHistory();
    const socket = useContext(SocketContext);

    const [loginName, setLoginName] = useState('Anonymous');
    const [loginSessionId, setLoginSessionId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [passwordState, setPasswordState] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);

    const [load, setLoad] = useState(true);

    socket.on('password', data => setPasswordState(data));

    socket.on('password response', data => setInvalidInput(!data));

    socket.on('login', data => {
        setSessionId(data.id);
        setLogin(data.state);
        setInvalidInput(!data.state);
        history.push('/');
    })

    const submitPassword = () => {
        socket.emit('submit password', {
            password: loginPassword,
            name: loginName,
            sessionId: loginSessionId
        })
    }
    
    const joinRoom = () => {
        socket.emit('join room', {
            name: loginName,
            sessionId: loginSessionId
        }) 
    }

    const sendLoginName = () => {
        if (loginName === '') {
            setName('Anonymous')
        } else {
            setName(loginName);
        }
    }

    const handleInput = (e, target) => {
        e.preventDefault();
        let value = e.target.value;
        switch(target) {
            case 'name':
                if (loginName.length < 15) {
                    setLoginName(value);
                }
                break;
            case 'sessionId':
                if (loginSessionId.length < 30) {
                    setLoginSessionId(value);
                }
                break;
            case 'password':
                if (loginPassword.length < 50) {
                    setLoginPassword(value);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className='flex-row center wrapper'>
            <div className='flex-col heading'>
                <div className={`animate__animated animate__${load ? 'bounceInLeft' : 'bounceOutUp'}`}>
                    <h1 className='title'><img className={'logo'} src='/images/cat.png' alt='logo' /> chatcat</h1>
                    <p className='subtitle'>private chat (for humans)</p>
                </div>
                <div className='flex-col'>
                    <div className={`flex-col animate__animated animate__${load ? 'bounceInLeft' : 'bounceOutUp'}`}>
                        <span>Encrypted end-to-end</span>
                        <span>Never externally stored</span>
                        <span>No account sign-up</span>
                        <span>Open <a className='anchor-tag' href='https://github.com/givensuman/chatcat'>source</a></span>
                    </div>
                </div>
            </div>
            
            <div className={`animate__animated animate__${load ? 'bounceInRight' : 'bounceOutUp'}`}>
                <div className='flex-col form-div'>

                <div>{
                    !passwordState ?
                        <div className='flex-row center'>
                            <Form className='flex-col'>
                                <Form.Group>
                                    <Form.Label className='space'>Name</Form.Label>
                                    <Form.Control
                                        key='name' 
                                        value={loginName} 
                                        onChange={e => handleInput(e, 'name')} 
                                        type='text' 
                                        placeholder='Anonymous'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='space'>Room ID</Form.Label>
                                    <Form.Control 
                                        required
                                        key='room' 
                                        value={loginSessionId} 
                                        onChange={e => handleInput(e, 'sessionId')} 
                                        type='text'
                                    />
                                </Form.Group>
                            </Form>
                            <Button className='login-button' onClick={() => {
                                    joinRoom();
                                    sendLoginName();
                                    }}>
                                    <img src='/images/arrow.png' alt='login' />
                            </Button>
                        </div>
                        :
                        <div className='flex-row center'>
                            <div className='flex-col password-div'>
                            <span>This room requires a password</span>
                            <input 
                                key='password'
                                value={loginPassword}
                                onChange={e => handleInput(e, 'password')} 
                                type='password' 
                                placeholder='Password'
                            />
                            </div>
                            <Button className='login-button' onClick={submitPassword}>
                                <img src='/images/arrow.png' alt='login' />
                            </Button>
                        </div>
                    }</div>

                <span>{invalidInput ?  passwordState ? 'Incorrect password' : 'Session not found' : ''}</span>
                    <div className='flex-row'>
                        <Button 
                        onClick={() => {
                            setLoad(false);
                            setTimeout(() => history.push('/create'), 1200)
                        }}
                        className='create-button'>Create a new session</Button>
                        {passwordState ? <Button onClick={() => history.push('/')} className='create-button margin-left'>Go Back</Button> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
