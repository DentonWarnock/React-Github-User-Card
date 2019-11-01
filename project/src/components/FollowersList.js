import React from 'react';
import FollowerCard from './FollowerCard.js';

const FollowersList = ({ followers }) => {

  return (
    <>
    <div>{followers.length}</div>
    {followers.map(item => 
      <FollowerCard user={item} key={item.id} />
    )}
    </>
  )
}

export default FollowersList;