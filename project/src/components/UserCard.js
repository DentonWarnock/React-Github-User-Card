import React from 'react';

const UserCard = ({ user }) => {

  return (
    <>
      <div className="user-card" key={user.id}>
        <img src={`${user.avatar_url}`} alt={user.id} />
        <div className="card-info">
          <h4>{user.name}</h4>
          <p>Repos: {user.public_repos}</p>
          <p>Following: {user.following}</p>
          <p>Followers {user.followers}</p>
        </div>
        <div>
          <a href={user.html_url} rel="noopener noreferrer" target="_blank">{user.html_url}</a>                      
        </div> 
      </div>
    </>
  )
}

export default UserCard;