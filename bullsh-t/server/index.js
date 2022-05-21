const cors = require("cors")
const app = require("express")().use(cors())
const server = require("http").Server(app)
const io = require("socket.io")(server, { cors: { origin: '*' } })
const next = require("next")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

io.on('connection', socket => {
    console.log(socket.id.substring(0, 4) + '... connected')

    socket.on('hello', () => {
        console.log('hello')
        socket.emit('hello')
    })

    socket.on('validate-room', ({ id }) => {
        const room = io.sockets.adapter.rooms.get(id)
        if (room) socket.emit('validate-room', {
            id: id,
            status: true
        })
        else socket.emit('validate-room', {
            id: id,
            status: false
        })
    })

    socket.on('create', ({ id }) => {
        if (!io.sockets.adapter.rooms.get(id)) {
            socket.join(id)
            socket.emit('create', {
                id: id,
                status: true
            })
        } else { 
            socket.emit('create', {
                id: id,
                status: false
            })
        }
    })

    socket.on('message', ({ id, ...data }) => {
        socket.to(id).emit('message', {
            id: id,
            status: true,
            data: data
        })
    }) 
})

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return nextHandler(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`Blast off on port ${port} 🚀`)
    })
})