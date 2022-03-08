import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

import { StoreContext } from '../utils/store'

const Auth = () => {

    const [searchParams] = useSearchParams()
    const [code, setCode] = useState(null)
    const { token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        setCode(searchParams.get('code'))

        const getData = async () => {
            await axios.post('/auth', { code: code })
                .then(res => {
                    setToken(res.data.access_token)
                    navigate('/profile')
                })
                .catch(err => console.error(err))
        }
        getData()
    }, [searchParams, code, setToken, navigate])

    return (
        <>
        <button onClick={() => console.log(token)}>You're on /auth. Press to log your token</button>
        </>
    )
}

export default Auth