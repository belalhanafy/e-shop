import React from 'react'
import Button from '../Shared/Button'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center'>
      <div className='container'>
        <div style={{backgroundColor: data.bgColor}} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
            <div className='p-6 sm:p-8 text-center md:text-left'>
                <p data-aos="fade-right" className='text-sm'>{data.discount}</p>
                <h1 data-aos="zoom-out" className='uppercase my-1 whitespace-wrap xl:whitespace-nowrap text-4xl lg:text-6xl font-bold'>{data.title}</h1>
                <p data-aos="fade-up" className='text-md'>{data.date}</p>
            </div>
            <div className='flex items-center justify-center mx-6'>
                <img data-aos="zoom-out" src={data.image} alt="Banner Image" className='scale-150 drop-shadow-2xl lg:w-full w-[150px] sm:w-[250px] h-full object-cover'/>
            </div>
            <div className='flex flex-col items-center md:items-start justify-center gap-2 p-10 sm:p-8'>
                <p data-aos="zoom-in" className='font-bold text-center whitespace-nowrap text-xl'>{data.title2}</p>
                <div data-aos="fade-up">
                  <p className='py-2 text-center md:text-left text-3xl whitespace-nowrap md:whitespace-pre-wrap sm:text-5xl font-bold'>{data.title3}</p>
                  <p className='text-center md:text-left text-sm tracking-wide leading-5'>{data.title4}</p>
                  <div className='py-2'>
                      <Button text={"Shop Now"} bgColor={"bg-white"} textColor={data.color}/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
