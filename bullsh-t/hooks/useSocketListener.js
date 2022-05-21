import { useEffect } from 'react'
import useSocket from './useSocket'

const useSocketListener = callbacks => {

    const socket = useSocket()

    useEffect(() => {
        callbacks.map(item => {
            socket.on(item.event, item.callback)
        })
        return () => {
            callbacks.map(item => {
                socket.off(item.event, item.callback)
            })
        }
    }, [callbacks])
}

export default useSocketListener