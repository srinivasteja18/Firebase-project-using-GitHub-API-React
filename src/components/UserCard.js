import React from 'react'


export default function UserCard({user}) {
    return (
        <div className="home-profile">
            <img className="profile-pic" src={user.avatar_url}/>
            <p className="user-name" >{user.login}</p>
            <p className="user-followers" >{user.followers_url?.login}</p>
        </div>
    )
}
