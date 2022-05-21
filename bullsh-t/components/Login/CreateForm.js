import React, { useState } from 'react'
import {
    FormErrorMessage, Stack, FormControl, FormLabel, Input, Divider, RadioGroup, Radio, Select, Button, NumberInput, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper, NumberInputField, Icon
} from '@chakra-ui/react'
import { IoCreateOutline } from 'react-icons/io5'

import { v4 as uuid } from 'uuid'

import useSocket from '../../hooks/useSocket'
import useSocketListener from '../../hooks/useSocketListener'
import useStore from '../../hooks/useStore'

const CreateForm = ({ data }) => {

    const socket = useSocket()
    const store = useStore()

    const [ state, dispatch ] = data
    const [ error, setError ] = useState(false)
    const [loading, setLoading] = useState(false)

    const randId = uuid().substring(30).toUpperCase()

    const handleSubmit = () => {
      if (state.roomName == "" || state.displayName == "") {
          setError(true)
      }
      else {
          setError(false)
          setLoading(true)
          socket.emit("create", { id: randId })
          // sync store with form state
          Object.keys(state).forEach(key => 
            store[key]?.set(state[key])
          )
          store.inRoom.set(true)
          store.roomId.set(randId)
          setLoading(false)
      }
    }

    useSocketListener([
      {
        event: "create",
        callback: res => {
          if (res) alert("success")
          else alert("error")
        }
      }
    ])

    return (
        <Stack spacing={3}>

        <FormControl 
          isRequired
          isInvalid={error && state.roomName == ""}
        >
          <FormLabel htmlFor="name">
            Room Name
          </FormLabel>
          <Input
            id="name"
            placeholder="e.g. Trivia Nerds"
            size="lg"
            onChange={e => dispatch({
              type: "roomName",
              payload: e.target.value
            })}
          />
        </FormControl>
        <FormControl 
          isRequired
          isInvalid={error && state.displayName == ""}
        >
          <FormLabel htmlFor="create-displayName">
            Display Name
          </FormLabel>
          <Input
            id="create-displayName"
            size="lg"
            onChange={e => dispatch({
              type: "displayName",
              payload: e.target.value
            })}
          />
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel htmlFor="difficulty">
            Difficulty
          </FormLabel>
          <RadioGroup 
            id="difficulty" 
            size="md"
            value={state.difficulty}
            onChange={value => dispatch({
              type: "difficulty",
              payload: value
            })}
          >
            <Stack 
              spacing={5} 
              direction="row"
            >
              <Radio value="Easy">Easy</Radio>
              <Radio value="Medium">Medium</Radio>
              <Radio value="Hard">Hard</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel htmlFor="category">
            Category
          </FormLabel>
          <Select
            size="lg"
            id="category"
            placeholder={state.category !== "Any" ? state.category : ""}
          >
            {categories.map((item, index) =>
              <option 
                key={index} 
                value={item}
                p={"0.5em"}
                onClick={() => dispatch({
                  type: "category",
                  payload: item
                })}
              >
                {item}
              </option>
            )}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="rounds">
            Number of rounds to win
          </FormLabel>
          <NumberInput
            id="rounds"
            defaultValue={10}
            min={1}
            max={99}
            onChange={e => dispatch({
              type: "rounds",
              payload: e
            })}
          >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Button
          rightIcon={<Icon as={IoCreateOutline} fontSize="1.25em" />}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Create
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

const difficulties = [
  "Easy",
  "Medium",
  "Hard"
]

const categories = [
    "Any",
    "General Knowledge",
    "Books",
    "Films",
    "Music",
    "Musicals & Plays",
    "Television",
    "Video Games",
    "Board Games",
    "Science & Natures",
    "Computers",
    "Math",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Comics",
    "Gadgets",
    "Anime & Manga",
    "Cartoons & Animation"
]

export default CreateForm