import React from 'react'

const ProfileTopTracks = dataProps => {
    const { data } = dataProps

    React.useEffect(() => console.log(data), [])
    return (
        <h1>your top tracks</h1>
    )
}

export default ProfileTopTracks