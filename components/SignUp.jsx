import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2>SignUp page</h2>
      <form style={{width:'60%', margin:"auto"}}>
          <input type="text" placeholder='User Name' /><br/>
          <input type="email" placeholder='Email' /><br/>
          <input type="password" placeholder='Password' />

        </form>
    </div>
  )
}

export default SignUp