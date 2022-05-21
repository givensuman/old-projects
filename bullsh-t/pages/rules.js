import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Divider, Flex, Heading, Container, UnorderedList, ListItem } from '@chakra-ui/react'
import Link from '../components/Link'
import Head from 'next/head'

const Rules = () => {
    return (
        <>
        <Head>
            <title>BULLSH*T | Rules</title>
        </Head>

        <Flex
            direction="column"
            align="center"
            justify="center"
            maxW="600px"
            m="0 auto"
        >

            <Heading size="lg">How to play</Heading>

            <Container m={"1em"}>{`
                Bullsh*t is a trivia game. Answer the questions correct and you win the round. But there's a twist: if you don't know the answer, you're not out of luck. If you can convince the other players that you do know the answer -- y'know, bullsh*t -- you win the round all the same.
            `}</Container>
            
            <Divider />

            <Container m={"1em"}>
                The game plays out as follows:
                <UnorderedList px={"1em"} mt={"1em"}>
                    <ListItem>{`
                        Each round, someone is put in the "hot seat." 
                    `}</ListItem>
                    <ListItem>{`
                        They're given a multiple-choice question, and then have to explain why their answer is correct to all the other players -- even if it isn't.
                    `}</ListItem>
                    <ListItem>
                        If they got the answer correct or can convince at least one other player of their reasoning, they win the round and get to go again.
                    </ListItem>
                    <ListItem>{`
                        The other players' judgement on whether or not the answer was bullsh*t affects their bullsh*t meter.
                    `}</ListItem>
                    <ListItem>{`
                        If the answer is wrong and everyone calls bullsh*t, the player with the most accurate bullsh*t meter gets to answer the next round's question.
                    `}</ListItem>
                    <ListItem>
                        The first player to win the designated number of rounds wins the game!
                    </ListItem>

                </UnorderedList>
            </Container>

            <Divider />

            <Container m={"1em"}>
                For more information, check out the <Link href="https://www.youtube.com/watch?v=HG1DE4BfMXQ">official trailer</Link> to the Netflix show.
            </Container>

        </Flex>
        </>
    )
}

export default Rules