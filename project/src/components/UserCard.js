import React from 'react';

const UserCard = ({ user }) => {

  return (
    <>
      <div key={user.id}>
        <img src={`${user.avatar_url}`} alt="user"></img>
        <div>{user.name}</div>
      </div>
    </>
  )
}

export default UserCard;