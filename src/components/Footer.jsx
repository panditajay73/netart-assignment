import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {

    const footerItems = [
        "CHEMICALS & PROCESS","POWER","WATER & WASTE WATER","OILS & GAS","PHARMA","SUGARS & DISTILLERIES","PAPER & PULP","MARINE & DEFENCE","METAL & MINING","FOOD & BEVERAGE","PETROCHEMICAL & REFINERIES","SOLAR","BUILDING","HVAC","FIRE FIGHTING","AGRICULTURE & RESIDENTIAL"
    ]

  return (
    <div className='screen-width screen-padding footer'>
        <hr className='footer-line'/>
        <p className='text-center text'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <div className='text-center text segments'>{
            footerItems.map((item,index)=>{
                return(
                <div key={index}>
                    <span >{item}</span>
                </div>
            )})
        }</div>
        <div className='footer-links-container'>
            <ul className='footer-links flex text'>
                <li className='flex-center text'>
                    <div className='call flex-center'>
                        <IoCall color='red'/>
                    </div>
                    <span>Toll Free: <span className=''>1800 200 1234</span></span>
                </li>
                <li className='flex-center text'>
                    <MdOutlineFacebook size={22}/>
                    <span><a href="https://www.facebook.com/cripumps" target='_blank'>www.facebook.com/cripumps</a></span>
                </li>
                <li className='flex-center text'>
                    <FaGlobe size={22}/>
                    <span><a href="https://www.cripumps.com"target='_blank'>www.cripumps.com</a></span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer