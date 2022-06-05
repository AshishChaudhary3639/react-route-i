import React, { useContext } from 'react'
import {AuthContext} from '../Context/AuthContext'
import '../styles/navbar.css'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {

  const {isAuth,logout}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleClick=()=>{

    if(isAuth){
      logout()
      navigate("/")
    }
    else{
      navigate("/LoginPage")

    }
  }


  return (
    <div className='navbar'>
      <div className='box-1'>
        <Link to="/start" className='link'>Start</Link>
        <Link to="/sale" className='link'>Sale</Link>
        <Link to="/manage" className='link'>Manage</Link>
        <Link to="/market" className='link'>Market</Link>
      </div>
      <div className='box-2'>
        <Link to="/pricing" className='link'>Pricing</Link>
        <Link to="/learning" className='link'>Learning</Link>
        <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
        <Link to="startLearning" className='navbtn'><button>Start free triel</button></Link>
      </div>
    </div>
  )
}

export default Navbar