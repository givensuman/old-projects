const express = require('express');
const { v4 : uuidv4 } = require('uuid');
const randomColor = require('randomcolor');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

const PORT = process.env.PORT || 8888;
const server = app.listen(PORT, () => console.log(`Blast off on port ${PORT} 🚀`));
const io = require('socket.io')(server, { cors: { origin : '*' } });



let sessionArrayShallow = []; // holds all active session IDs
let sessionArray = []; // holds data on all active session IDs

const getSessionIndex = sessionId => {
    if (sessionArrayShallow.includes(sessionId)) {
        return sessionArray.findIndex(item => item.sessionId === sessionId);
    } else {
        return null
    }
}

io.on('connection', socket => {

    socket.on('create room', data => {
        let sessionId = uuidv4();
        while (sessionArrayShallow.includes(sessionId)) {
            sessionId = uuidv4(); // ensures no duplicates
        }
        sessionArrayShallow.push(sessionId);
        sessionArray.push({
            sessionId : sessionId,
            sessionName : data.sessionName,
            password : data.password,
            host: socket.id,
            users : [{
                name: data.name,
                color: randomColor(),
                id: socket.id
            }]
        })
        socket.join(sessionId);
        socket.emit('login', {
            state: true,
            id: sessionId
        });
    })

    socket.on('delete room', data => {
        sessionArray.splice(getSessionIndex(data.sessionId), 1);
        sessionArrayShallow.splice(sessionArrayShallow.findIndex(item => item === data.sessionId), 1);
    })

    const loginToSession = ({ sessionId, name, socketId}) => {
        socket.join(sessionId);
        socket.emit('login', {
            state: true,
            id: sessionId
        });
        let color = randomColor();
        sessionArray[getSessionIndex(sessionId)].users.push({
            name: name,
            color: color,
            id: socketId
        })
    }

    socket.on('join room', data => {
        if (sessionArrayShallow.includes(data.sessionId)) {
            if (sessionArray[getSessionIndex(data.sessionId)].password.length > 0) {
                socket.emit('password', true)
            } else {
                loginToSession({
                    sessionId: data.sessionId,
                    name: data.name,
                    socketId: socket.id
                });
                socket.to(data.sessionId).emit('refresh users');
                socket.to(data.sessionId).emit('sys message', `${data.name} has joined the room. Welcome!`);
            }     
        } else {
            socket.emit('login', {
                state: false,
                id: null
            });
        }
    })
    
    socket.on('submit password', ({ password, name, sessionId }) => {
        if (password === sessionArray[getSessionIndex(sessionId)].password) {
            loginToSession({
                sessionId: sessionId,
                name: name,
                socketId: socket.id
            });
            socket.to(sessionId).emit('refresh users');
            socket.emit('password response', true)
        } else {
            socket.emit('password response', false)
        }
    })

    socket.on('leave room', ({ id, sessionId }) => {
        if (sessionArrayShallow.includes(sessionId)) {
            let index = getSessionIndex(sessionId)
            sessionArray[index].users.splice(sessionArray[index].users.findIndex(item => item.id === id), 1);

            socket.to(sessionId).emit('refresh users');

            return true;
        } else {
            return null;
        }
    })

    socket.on('get room info', data => {
        if (sessionArrayShallow.includes(data.sessionId)) {
            let roomInfo = sessionArray.find(item => item.sessionId === data.sessionId);
            socket.emit('get room info', roomInfo);
        } else {
            socket.emit('get room info', false);
        }
    })

    socket.on('get users', data => {
        if (sessionArrayShallow.includes(data.sessionId)) {
            let users = sessionArray[getSessionIndex(data.sessionId)].users
            socket.emit('get users', users);
        } else {
            return null;
        }
    })

    socket.on('get socket id', () => {
        socket.emit('get socket id', socket.id);
    });

    socket.on('message', data => {
        socket.to(data.sessionId).emit('message', data.message);
    })
})
