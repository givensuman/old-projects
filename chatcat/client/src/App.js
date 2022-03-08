import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import 'animate.css';

import { SocketContext } from '.';

import Chat from './components/Chat';
import Login from './components/Login';
import Create from './components/Create';

import generateRandomName from './utils/nameGenerator';

export default function App() {

    const socket = useContext(SocketContext);

    const [login, setLogin] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    let randomName = generateRandomName();

    useEffect(() => {
        socket.emit('get socket id');
    }, [socket])

    socket.on('get socket id', data => setId(data))

    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    {login ? <Chat name={name} id={id} setLogin={setLogin} sessionId={sessionId}/> : <Login setLogin={setLogin} setSessionId={setSessionId} setName={setName}/>}
                </Route>
                <Route path='/create'>
                    <Create setLogin={setLogin} setSessionId={setSessionId} setName={setName} randomName={randomName}/>
                </Route>
            </Switch>
        </Router>
    )
}