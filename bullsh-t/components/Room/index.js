import React, { useState, useEffect } from 'react'

import useSocket from '../../hooks/useSocket'
import useSocketListener from '../../hooks/useSocketListener'
import useStore from '../../hooks/useStore'

import Chat from '../Chat'

const Room = () => {

    const store = useStore()
    const socket = useSocket()

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        socket.emit('get-users', { id: store.roomId.state })
    }, [])

    return (
        <>
        
        <h1>room {store.roomId.state}</h1>

        <Chat />
        
        </>
    )
}

export default Room