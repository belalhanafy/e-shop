import React from 'react'
import { FaCircleXmark } from "react-icons/fa6";
import Button from '../Shared/Button';

const Popup = ({orderPopup,setOrderPopup,handleOrderPopup}) => {
  return (<>
  {orderPopup && 
        <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                <div className='w-[400px] rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-2xl'>Order Now</h1>
                        <div>
                            <button className='text-lg' onClick={handleOrderPopup}><FaCircleXmark /></button>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <input placeholder='Name' className='form-input' type="text" />
                        <input placeholder='Email' className='form-input' type="email" />
                        <input placeholder='Address' className='form-input' type="text" />
                    </div>
                    <div className='flex justify-center'>
                        <Button text={"Order Now"} bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                </div>
            </div>
        </div>
  }
    </>
  )
}

export default Popup
