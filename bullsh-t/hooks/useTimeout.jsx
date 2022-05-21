import { useEffect, useRef } from 'react'

const useTimeout = (callback, delay) => {

    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current  = callback
    }, [callback])

    useEffect(() => {
        const timeout = setTimeout(() => savedCallback.current(), delay)
        return () => clearTimeout(timeout)
    }, [delay])
}

export default useTimeout