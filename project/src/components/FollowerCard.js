import React from 'react';


const FollowerCard = ({ user }) => {

  console.log("Follower Card: user: ", user)

  return (
    <>    
      <div className="follower-card" key={user.id}>  
        <img src={`${user.avatar_url}`} alt={user.login}/>
        <h4>{user.login}</h4>
        <a href={user.html_url} rel="noopener noreferrer" target="_blank">{user.html_url}</a>                      
      </div>     
    </>
  )
}

export default FollowerCard;