import React from 'react';
import {useSelector} from 'react-redux';


function Profile() {
const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>Profile Page</h1>
        <p>Name:</p>
        <p>Age:</p>
        <p>Email:</p>
      
    </div>
  )
}

export default Profile
