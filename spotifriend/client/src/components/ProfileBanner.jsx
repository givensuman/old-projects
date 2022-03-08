import React from 'react'
import {
    Avatar,
    Stack,
    Text
} from '@chakra-ui/react'

const ProfileBanner = dataProps => {
    const { data } = dataProps
    React.useEffect(() => console.log(data), [])
    return (
        <Stack 
        direction='row'
        align='center'
        justify='left'
        spacing={2}
        padding={5}
        >
            <Avatar 
            size='xl'
            name={data.display_name}
            onClick={() => console.log(data)}
            />
            <Stack spacing={3}>
                <Text fontSize='xl'>
                    Welcome, {data.display_name}
                </Text>
            </Stack>
        </Stack>
    )
}

export default ProfileBanner