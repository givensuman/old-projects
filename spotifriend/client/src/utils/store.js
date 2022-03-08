import React, { createContext, useState } from 'react'

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {

    const [token, setToken] = useState(null)

    return <StoreContext.Provider value={{
        token: token,
        setToken: setToken
    }}>{children}</StoreContext.Provider>

}

export default StoreProvider