import React from "react";
import useInput from '../hooks/useInput.js'

const Input = () => {
  const username = useInput('')
  const password = useInput('')

  return (
    <div>
      <input type={'text'} placeholder="username" {...username}/>
      <input type={'text'} placeholder="password" {...password}/>
      <button onClick={() => console.log(username.value, password.value)}>Click</button>
    </div>
  );
}

export default Input