import React from 'react'
import "../styles/Footer.css"
import { Link } from "react-router-dom"
import logo from "../Assets/logo.svg"
import google from "../Assets/Group 427320822.svg"
import app from "../Assets/_Group_.svg"
import getit from "../Assets/getiton.svg"
import play from "../Assets/googleplay.svg"
import download from "../Assets/download.svg"
import appstore from '../Assets/app.svg'
import insta from "../Assets/Instagram.svg"
import fb from "../Assets/Facebook.svg"
import linkedin from "../Assets/Linkedin.svg"
import watsapp from "../Assets/Whatsapp.svg"
import twitter from "../Assets/Twitter.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <h3>Categories</h3>
      <div className='footer_top'>
        <ul>
            <li><Link to="#">Paan Corner</Link ></li>
            <li><Link to="#">Fruits & Vegetable</Link ></li>
            <li><Link to="#">Homegrown Brands</Link ></li>
            <li><Link to="#">Breakfast & Sauces</Link ></li>
            <li><Link to="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link to="#">Paan Corner</Link ></li>
            <li><Link to="#">Fruits & Vegetable</Link ></li>
            <li><Link to="#">Homegrown Brands</Link ></li>
            <li><Link to="#">Breakfast & Sauces</Link ></li>
            <li><Link to="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link to="#">Paan Corner</Link ></li>
            <li><Link to="#">Fruits & Vegetable</Link ></li>
            <li><Link to="#">Homegrown Brands</Link ></li>
            <li><Link to="#">Breakfast & Sauces</Link ></li>
            <li><Link to="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link to="#">Paan Corner</Link ></li>
            <li><Link to="#">Fruits & Vegetable</Link ></li>
            <li><Link to="#">Homegrown Brands</Link ></li>
            <li><Link to="#">Breakfast & Sauces</Link ></li>
            <li><Link to="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link to="#">Paan Corner</Link ></li>
            <li><Link to="#">Fruits & Vegetable</Link ></li>
            <li><Link to="#">Homegrown Brands</Link ></li>
            <li><Link to="#">Breakfast & Sauces</Link ></li>
            <li><Link to="#">Cleaning Essentials</Link ></li>
        </ul>
        
      </div>

      <div className='footer_bottom'>
        <div className="socials">
            <img src={logo} alt="logo" id='logo'/>
            <div>
                <img src={linkedin} alt="Linkedin" />
                <img src={insta} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={watsapp} alt="watsapp" />
                <img src={fb} alt="facebook" />
            </div>
        </div>
        <ul>
            <li><Link to="#">Home</Link ></li>
            <li><Link to="#">Delivery Areas</Link ></li>
            <li><Link to="#">Careers</Link ></li>
            <li><Link to="#">Customer Support</Link ></li>
            <li><Link to="#">Press</Link ></li>
        </ul>
        <ul>
            <li><Link to="#">Privacy Policy</Link ></li>
            <li><Link to="#">Terms of Use</Link ></li>
            <li><Link to="#">Responsible Disclosure Policy</Link ></li>
        </ul>
        <div className="downloads">
            <h3>Download App</h3>
            <div  className='downloads_child'>
                <img src={google} alt="google" />
                <span>
                    <img src={getit} alt="app" id='getit'/>
                    <img src={play} alt="app" />
                </span>
              
            </div>
            <div className='downloads_child'>
                <img src={app} alt="app" />
                <span>
                    <img src={download} alt="app" />
                    <img src={appstore} alt="app" />
                </span>
            </div>
        </div>
        
      </div>

    </footer>
  )
}

export default Footer
