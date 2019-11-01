import React from 'react';


const FollowerCard = (props) => {

  console.log("Follower Card: user: ", props.user)

  return (
    <>    
      <div key={props.user.id}>        
        <img src={`${props.user.avatar_url}`} alt="user"/>
        <p>{props.user.id}</p>
        <p>{props.user.login}</p>
      </div>     
    </>
  )
}

export default FollowerCard;