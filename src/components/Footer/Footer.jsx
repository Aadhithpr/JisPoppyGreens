import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'


const Footer = () => {       
  return (
    <div className='footer' id='Footer'>
      <div className="left-f">
        <img src={logo} alt=""/>
      </div>
      <div className="center-f">
        <h1>Contact Us</h1>
      </div>
      <div className="right-f">
        <h3>Email: Jispoppygreens@gmail.com</h3>
        <h3>Mobile: +91 8296756622</h3>
        <h3>#28, Escorts Engineers Layout, Attur Layout,</h3>
        <h3>Yelahanka, NewTown, Bangalore. - 560064</h3>
      </div>
    </div>
  )
}

export default Footer
