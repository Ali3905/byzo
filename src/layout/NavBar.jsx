import React from 'react'
import "../styles/Navbar.css"
import Dropdown from '../features/landing/components/Dropdown'
import logo from "../Assets/logo.svg"
import cart from "../Assets/cart-shopping.svg"

const NavBar = () => {
  return (
    <nav className='nav'>
        
      <img src={logo} alt="Logo"  />
      <Dropdown op1={"Lahore"} op2={"Karachi"} op3={"Islamabad"} op4={"Rawalpindi"}/>
      <input type="text" placeholder='Search for Products' />
      <button className='btn_primary btn_login'>Log in</button>
      <button className='btn_primary btn_cart'>
        <img src={cart} alt="cart" id='cart' />
        My Cart</button>

    </nav>
  )
}

export default NavBar
