import React from 'react';
import {useDispatch} from 'react-redux'


function ChangeColor() {
  const dispatch = useDispatch();
  return (
    <div>
      <input type='text' onChange={}/>
      <button onClick={()=>{dispatch()}}>Change Color</button>
    </div>
  )
}

export default ChangeColor
