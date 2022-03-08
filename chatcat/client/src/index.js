import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

export const SocketContext = React.createContext();

ReactDOM.render(
    <SocketContext.Provider value={io('https://chatcat.app')}>
        <App />
    </SocketContext.Provider>, 
    document.getElementById('root'));

