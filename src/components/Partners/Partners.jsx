import React from 'react'
import partner1 from '../../assets/brand/br-1.png'
import partner2 from '../../assets/brand/br-2.png'
import partner3 from '../../assets/brand/br-3.png'
import partner4 from '../../assets/brand/br-4.png'
import partner5 from '../../assets/brand/br-5.png'
const Partners = () => {
  return (
    <div data-aos="fade-right" className='bg-slate-200 dark:bg-white/10 py-8 mt-16 hidden md:block'>
      <div className='container'>
            <div className='opacity-50 grid place-items-center grid-cols-5 gap-4'>
                <img className='block dark:invert w-[100px]' src={partner1} alt="brand" />
                <img className='block dark:invert w-[100px]' src={partner2} alt="brand" />
                <img className='block dark:invert w-[100px]' src={partner3} alt="brand" />
                <img className='block dark:invert w-[100px]' src={partner4} alt="brand" />
                <img className='block dark:invert w-[100px]' src={partner5} alt="brand" />
            </div>
      </div>
    </div>
  )
}

export default Partners
