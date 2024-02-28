import React from 'react'
import { products } from '../assets'


const Products = () => {
  return (
    <div className='screen-width screen-padding products'>
        <p className='text-center text'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <div className='w-full'>
            <img className='w-full' src={products} alt="products" />
        </div>
        <p className='text-center text'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
    </div>
  )
}

export default Products