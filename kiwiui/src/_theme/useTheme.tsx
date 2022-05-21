import React, { createContext, useContext, useEffect, useRef } from 'react'
import theme, { ThemeType } from './theme'

const ThemeContext = createContext(theme)
const useTheme = () => {
    try {
        return useContext(ThemeContext)
    } catch {
        return theme
    }
}

const ThemeProvider = (
    { children, value }: {
        children: any,
        value: ThemeType
    }
) => {

    const userTheme = useRef({...theme, ...value})

    useEffect(() => {
        userTheme.current = {...theme, ...value}
    }, [value])

    return (
        // @ts-ignore
        <ThemeContext.Provider value={userTheme.current}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, useTheme as default }