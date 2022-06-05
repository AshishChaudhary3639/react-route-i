import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
const Login = () => {
  const [loginCreds, setLoginCreds] = useState({})
  const {login}=useContext(AuthContext)
  const onChange=(e)=>{
    const {name,value}= e.target
    setLoginCreds({...loginCreds,[name]:value,})
  }

  const handleClick=(e)=>{
    e.preventDefault()
    login()
  }

  return (
    <div>
        <h1>Login page</h1>
        <form onClick={handleClick} style={{width:'60%', margin:"auto",display:"flex", flexDirection:"column",maxWidth:"200px"}}>
          <input name='email' type="email" placeholder='Email...' onChange={onChange}/>
          <input name='password' type="password" placeholder='Password...' onChange={onChange}/>
          <button type="submit">Login</button>

        </form>
    </div>
  )
}

export default Login