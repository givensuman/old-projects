import React, { createContext, useContext, useReducer } from 'react'
import { 
  Flex, Tabs, TabList, Tab, TabPanels, Stack, Heading, Text, TabPanel
} from '@chakra-ui/react'

import { v4 as uuid } from 'uuid'

import useSocket from '../../hooks/useSocket'
import useSocketListener from '../../hooks/useSocketListener'

import JoinForm from './JoinForm'
import CreateForm from './CreateForm'

const Login = () => {

  const socket = useSocket()

  const joinStateObj = {
      id: "",
      displayName: ""
  }

  const createStateObj = {
    roomName: "",
    displayName: "",
    difficulty: "Medium",
    category: "Any",
    rounds: 10
  }

  const reducer = (state, action) => {
      return {
          ...state,
          [action.type]: action.payload
      }
  }

  const joinManager = useReducer(reducer, joinStateObj)
  const createManager = useReducer(reducer, createStateObj)

  useSocketListener([
    {
      event: 'hello',
      callback: () => console.log('hello')
    },
    {
      event: 'validate-room',
      callback: res => {
        if (res) socket.join(res.id)
        else setJoinErr(true)
      }
    }
  ])

  return (
    <>

      <Flex
        direction="column"
        justify="center"
        align="center"
      >
        {/* TITLE */}

        <Heading 
          size='2xl' 
          mb='15px'
        >
          BULLSH*T
        </Heading>
        <Text mb="50px">Made by Given Suman</Text>
        
        <Stack spacing={5}>

        {/* TABS */}

        <Tabs 
          variant="enclosed"
          align="center"
          isFitted
        >
          <TabList>
            <Tab>Join Room</Tab>
            <Tab>Create Room</Tab>
          </TabList>

        <TabPanels>
            <TabPanel>
                <JoinForm data={joinManager} />
            </TabPanel>
            <TabPanel>
                <CreateForm data={createManager} />
            </TabPanel>
        </TabPanels>

        </Tabs>

        </Stack>
      </Flex>

    </>
  )
}

export default Login