import React from 'react';
import "./nav_bar.css";
import logo from '../../../src/assets/logo.svg';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
          <img src={logo} alt='logo' className='logo'/>
          <ul>
            <h>Program</h>
            <h>Campus <MdOutlineKeyboardArrowDown/> </h>
            <h>About Us</h>
            <h>FAQ's</h>
            
          </ul>

        </div>
        <div className='right'>
          <ul>
            <h className="hire">Hire From us</h>
            <h>Your Application</h>
          </ul>
          <button>Get Prospectus</button>
        </div>
    </div>
  )
}

export default Navbar;