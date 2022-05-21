import React, { createContext, useContext, useEffect, useRef } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext(null)

const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {

    const socket = useRef(io())

    useEffect(() => {
        return () => {
            if (socket.current.removeAllListeners) {
                socket.current.removeAllListeners()
            }
        }
    }, [])

    return (
        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketProvider, useSocket as default }