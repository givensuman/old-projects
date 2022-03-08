import React from 'react'
import { 
    Heading, Text, Stack, Image, Box
} from '@chakra-ui/react'

const ProfileTopArtists = dataProps => {
    const { data } = dataProps

    React.useEffect(() => console.log(data), [])
    return (
        <>
        <Heading size='lg'>Your top artists</Heading>
        <Stack direction='row' w='100%' spacing={2}>
            {data.items.map(item =>
            <Box>
                <Image src={item.images[0].url} alt={item.name} objectFit='cover' boxSize='200px' />
                <Text>{item.name}</Text>
            </Box>
            )}
        </Stack>
        </>
    )
}

export default ProfileTopArtists