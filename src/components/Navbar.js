import React from 'react'
import Menu from './Menu'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='containerNavbar'>
      <div className='logo'>ZK Production</div>
      <Menu />
    </div>
  )
}

export default Navbar
