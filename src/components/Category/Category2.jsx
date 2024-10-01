import React from 'react'
import Button from '../Shared/Button'
import gaming from '../../assets/category/gaming.png'
import vr from '../../assets/category/vr.png'
import speaker from '../../assets/category/speaker.png'
const Category2 = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className='py-10 sm:col-span-2 px-5 bg-gradient-to-br from-gray-300/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-strat lg:items-end'>
                <div>
                    <div className='mb-5'>
                        <p className='text-black'>Enjoy</p>
                        <p className='text-2xl text-gray-900 font-semibold my-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold text-black opacity-20 mb-4'>Gaming</p>
                        <Button text={"Browse"} bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                </div>
                <img src={gaming} className='sm:w-[280px] w-[150px] top-44 sm:top-3 absolute h-auto right-2 block' alt="" />
            </div>
            <div className='py-10 col-span-1 px-5 bg-gradient-to-br from-green-500/90 to-green-200 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-5'>
                        <p className='text-black'>Enjoy</p>
                        <p className='text-2xl text-white font-semibold my-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold text-black opacity-20 mb-4'>Virtual</p>
                        <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-green-500"}/>
                    </div>
                </div>
                <img src={vr} className='w-[220px] absolute h-auto block right-1 top-28' alt="" />
            </div>
            <div className='py-10 px-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-5'>
                        <p className='text-gray-800'>Enjoy</p>
                        <p className='text-2xl text-white font-semibold my-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold text-black opacity-20 mb-4'>Speakers</p>
                        <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-brandBlue"}/>
                    </div>
                </div>
                <img src={speaker} className='w-[200px] absolute h-auto block top-32 right-0' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category2
