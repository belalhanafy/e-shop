import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10'>
        <div className='flex flex-col lg:flex-row items-center gap-3'>
            <div>
                <FaCarSide className='text-primary w-10 h-10'/>
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='text-black font-bold dark:text-white'>Free Shipping</h2>
                <p className='text-gray-500'>Free Shipping On All Order</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-3'>
            <div>
                <FaCheckCircle className='text-primary w-10 h-10'/>
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='text-black font-bold dark:text-white'>Safe Money</h2>
                <p className='text-gray-500'>30 Days Money Back</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-3'>
            <div>
                <FaWallet className='text-primary w-10 h-10'/>
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='text-black font-bold dark:text-white'>Secure Payment</h2>
                <p className='text-gray-500'>All Payment Secure</p>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-3'>
            <div>
                <FaHeadphonesAlt className='text-primary w-10 h-10'/>
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='text-black font-bold dark:text-white'>Online Support 24/7</h2>
                <p className='text-gray-500'>Technical Support 24/7</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
