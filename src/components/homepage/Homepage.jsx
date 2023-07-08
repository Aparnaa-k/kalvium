import React from 'react'
import Navbar from '../navbar/nav_bar';
import './Homepage.css';
import img from '../../assets/hmpg_img.webp';

function Homepage() {
  return (
    <>
    <Navbar/>
    <div className='main'>
      <h3>
      The Best UG Program In Computer Science
      </h3>
      <p>B.Tech. | BCA | BS</p>
      <img src={img} alt='img' className='hmpg_img'/>
      
    </div>
    </>
  )
}

export default Homepage;
