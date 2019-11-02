import React from 'react';
import FollowerCard from './FollowerCard.js';

const FollowersList = ({ followers }) => {

  return (
    <>
    <h2>Followers</h2>
    <div className="followers">
      {followers.map(item => 
        <FollowerCard user={item} key={item.id} />
      )}
    </div>
    </>
  )
}

export default FollowersList;