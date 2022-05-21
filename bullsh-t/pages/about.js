import React from 'react'
import { Flex, Heading, Container, Button, UnorderedList, ListItem, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import Link from '../components/Link'

const About = () => {
    return (
        <>
        <Head>
            <title>BULLSH*T | About</title>
        </Head>

        <Flex
            direction="column"
            align="center"
            justify="center"
            maxW="600px"
            m="0 auto"
        >

        <Heading size="lg">About</Heading>

        <Container m={"1em"}>
            This game is based on a Netflix show of the same name. It was made by one dude over a couple of days. If you would like to contribute or report bugs, check out the <Link href="https://github.com/givensuman/bullsh-t">Github.</Link>
        </Container>

        <Container>
            Made with:
            <UnorderedList px={"1em"} mt={"1em"}>
                <ListItem>
                    <Link href="https://nextjs.org/">
                        Next.js
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://chakra-ui.com/">
                        Chakra UI
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://socket.io/">
                        Socket.IO
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://opentdb.com/">
                        OpenTrivia
                    </Link>
                </ListItem>
                <ListItem>
                    Love ❤️
                </ListItem>
                <ListItem>
                    Coffee ☕
                </ListItem>
            </UnorderedList>
        </Container>

        <HStack 
            justify="flex-start"
            width={"85%"}
            mt={"2em"}
            
        >
            <Button 
                variant="outline"
                as="a"
                href="https://www.github.com/givensuman/bullsh-t/"
            >
                Codebase
            </Button>
            <Button 
                variant="outline"
                as="a"
                href="https://given.codes/"
            >
                Author
            </Button>
        </HStack>

    </Flex>
    </>
    )
}

export default About