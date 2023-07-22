import React from 'react'
import "./Navbar.css"
import Dropdown from '../../features/landing/components/Dropdown'

const NavBar = () => {
  return (
    <div className='nav'>
        
      <img src="" alt="Logo"  />
      <Dropdown op1={"Lahore"} op2={"Karachi"} op3={"Islamabad"} op4={"Rawalpindi"}/>
      <input type="text" placeholder='Search for Products' />
      <button className='btn_primary btn_login'>Log in</button>
      <button className='btn_primary btn_cart'>My Cart</button>

    </div>
  )
}

export default NavBar
