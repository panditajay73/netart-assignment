import React from 'react'
import { logo } from '../assets'


const Header = () => {
  return (
    <div className='screen-width w-full screen-padding flex-center'>
        <img className='logo' src={logo} alt="logo" />
    </div>
  )
}

export default Header