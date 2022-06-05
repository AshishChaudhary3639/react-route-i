import React from 'react'
import Navbar from './Navbar'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='header'>
        <Navbar/>
        <h1>Shopify</h1>
    </div>
  )
}

export default Header