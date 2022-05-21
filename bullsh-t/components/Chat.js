import React, { useEffect, useState, useRef } from 'react'
import { Flex, HStack, IconButton, Input, Container, Text, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

import useSocket from '../hooks/useSocket'
import useSocketListener from '../hooks/useSocketListener'
import useEventListener from '../hooks/useEventListener'
import useStore from '../hooks/useStore'

const Chat = () => {

    const socket = useSocket()
    const { roomId, displayName } = useStore()

    const inputRef = useRef()
    const scrollAnchor = useRef()

    const [ chat, setChat ] = useState([]) 
    const handleChat = () => {
        if (message !== "") {
            setChat(state => [...state, message])
            setMessage("")
        }
    }
    useEventListener('keydown', e => e.key == 'Enter' && handleChat(), inputRef.current)

    const [ message, setMessage ] = useState("")
    const handleMessage = e => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    // scrolls to a dummy div at the bottom of chat
    const scrollToBottom = () => {
        scrollAnchor.current?.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        scrollToBottom()
    }, [chat])

    useSocketListener([
        {
            event: "message",
            callback: data => setChat(state => [...state, data.message])
        }
    ])

    return (
        <>
        <Container
            maxW={"350px"}
            h={"100%"}
            maxH={"inherit"}
            p={"1em"}
            shadow="md"
            borderWidth="1px"
            position="absolute"
            right="0"
        >
        
        <Flex
            direction="column"
            h={"100%"}
        >

        <Flex
            direction="column"
            flexGrow={1}
            mb={"1em"}
            overflowY="scroll"
            overflowX="hidden"
        >
            {chat.map((item, index) =>
                <Box
                    mt={index == 0 && "auto"}
                    mb={"0.5em"}
                    bgColor="gray.100"
                    p={"0.5em"}
                    maxW={"80%"}
                    borderRadius="0.75em 0.75em 0.75em 0.25em"
                >
                <Text>
                    {item}
                </Text>
                </Box>
            )}
            <div ref={scrollAnchor} />
        </Flex>

        <HStack>
            <Input 
                ref={inputRef}
                value={message}
                onChange={handleMessage}
            />
            <IconButton 
                variant="outline"
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                onClick={() => handleChat(message)}
            />
        </HStack>


        </Flex>

        </Container>
        
        </>
    )
}

export default Chat