import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { SocketProvider } from '../hooks/useSocket'
import useStore, { StoreProvider } from '../hooks/useStore'

import Login from '../components/Login'
import Room from '../components/Room'

const Display = () => {
    const { inRoom, ...store } = useStore()

    useEffect(() => {
        inRoom.set(false)
    }, [])

    return (
        <>
        <button onClick={() => inRoom.set(!inRoom.state)}>
            click
        </button>
        <button onClick={() => console.log(store)}>
            log
        </button>
        {inRoom.state ? <Room /> : <Login />}
        </>
    )
}

const App = () => {

    return (
        <>

        <Head>
            <title>BULLSH*T</title>
        </Head>

        <SocketProvider>
        <StoreProvider value={{
            inRoom: false,
            displayName: "",
            roomName: "",
            roomId: "",
            host: false,
            difficulty: "Medium",
            category: "Any",
            rounds: 10
        }}>

            <Display />
        
        </StoreProvider>
        </SocketProvider>

        </>
    )
}

export default App