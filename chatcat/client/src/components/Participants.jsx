import React from 'react'

export default function Participants({ users }) {

    // List of users in the chat, made as its own component to prevent larger refreshing on user join/leave

    return (
        <div className='users-div'>
            <span className='bust-span'>
                    <i className="fas fa-user"></i>&nbsp;&nbsp;
                    {users.length}&nbsp;
                    {users.length !== 1 ? 'participants' : 'participant'}
            </span>
            <div className='participants flex-col'>
                {users.map(user => 
                <span 
                key={user.id}>
                    {user.name}</span>)}
            </div>
        </div>
    )
}

