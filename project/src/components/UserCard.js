import React from 'react';

const UserCard = ({ user }) => {

  return (
    <>
      <div key={user.id}>
        <img src={`${user.avatar_url}`} alt={user.id} />
        <h4>{user.name}</h4>
        <p>Repos: {user.public_repos}</p>
        <p>Following: {user.following}</p>
        <p>Followers {user.followers}</p>
      </div>
    </>
  )
}

export default UserCard;