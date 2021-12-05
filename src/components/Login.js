import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../features/user';

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>{dispatch(login({name: "Anand", age: 30, email: "anand@gmail.com"}))}}>Login</button>
    </div>
  )
}

export default Login
