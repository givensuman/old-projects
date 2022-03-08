import React from 'react'
import { Center, Box, Heading, Button } from '@chakra-ui/react'

const Login = () => {

    return (
        <Center w='100%' h='100vh'>
            <Box justify='center' align='center'>
                <Heading>spotifriend</Heading>
                <Button>
                    <a href='http://localhost:1337/login'>Login</a>
                </Button>
            </Box>
        </Center>
    )
}

export default Login