import React from 'react'
import { trophy,pic } from '../assets'

const Hero = () => {
  return (
    <div className='screen-width screen-padding flex hero'>
        <div className='trophy flex-center'>
            <img className="trophy-img" src={trophy} alt="trophy" />
        </div>
        <div className='hero-content'>
            <p className='text'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul className='text'>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <div className='w-full pic-container'>
                <img className='w-full' src={pic} alt="pic" />
            </div>
            <p className='text'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

        </div>
    </div>
  )
}

export default Hero