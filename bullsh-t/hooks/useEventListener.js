import { useEffect, useRef } from 'react'

const useEventListener = (event, callback, target) => {
    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (!target || !target.addEventListener) return
        
        const listener = e => savedCallback.current(e)
        target.addEventListener(event, listener)
        return () => target.removeEventListener(event, listener)
    })
}

export default useEventListener