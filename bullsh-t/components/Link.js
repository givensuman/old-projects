import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Link = ({ children, ...props}) => {
    return (
        <ChakraLink 
            sx={{
                "&:focus": {
                    boxShadow: "none"
                }
            }}
            {...props}
        >
            {children}
            <ExternalLinkIcon 
                mr="2px"
                ml="4px"
                sx={{
                    position: 'relative',
                    bottom: '2px'
                }} 
            />
        </ChakraLink>
    )
}

export default Link