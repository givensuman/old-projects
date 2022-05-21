import React, { useState } from 'react'
import {
    Stack, FormControl, FormLabel, Input, Button, FormErrorMessage, Icon
} from '@chakra-ui/react'
import { IoEnterOutline } from 'react-icons/io5'

import useStore from '../../hooks/useStore'
import useSocket from '../../hooks/useSocket'

const JoinForm = ({ data }) => {

    const store = useStore()
    const socket = useSocket()

    const [ state, dispatch ] = data
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const handleSubmit = () => {
        if (state.id == "" || state.displayName == "") {
            setError(true)
        }
        else {
            setError(false)
            setLoading(true)
            store.displayName.set(state.displayName)
            socket.emit("join", { id: state.id })
            store.roomId.set(state.id)
            store.inRoom.set(true)
            setLoading(false)
        }
    }

    return (
        <Stack spacing={3}>

        <FormControl
            isRequired
            isInvalid={error && state.id == ""}
        >
        <FormLabel htmlFor="id">
            Room ID
        </FormLabel>
        <Input
            id="id"
            size="lg"
            value={state.id}
            onChange={e => dispatch({
                type: "id",
                payload: e.target.value
            })}
        />
        </FormControl>
        <FormControl
            isRequired
            isInvalid={error && state.displayName == ""}
        >
        <FormLabel htmlFor="join-displayName">
            Display Name
        </FormLabel>
        <Input
            id="join-displayName"
            size="lg"
            value={state.displayName}
            onChange={e => dispatch({
                type: "displayName",
                payload: e.target.value
            })}
        />
        </FormControl>

        <Button
            rightIcon={<Icon as={IoEnterOutline} fontSize="1.25em" />}
            onClick={handleSubmit}
            isLoading={loading}
        >
            Join
        </Button>

        <FormControl isInvalid={error}>
            {error && 
            <FormErrorMessage>
                Please fill out the required fields
            </FormErrorMessage>
            }
        </FormControl>

        </Stack>
    )
}

export default JoinForm