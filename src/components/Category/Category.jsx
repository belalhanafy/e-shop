import React from 'react'
import Button from '../Shared/Button'
import earphone from '../../assets/category/earphone.png'
import watch from '../../assets/category/watch.png'
import macbook from '../../assets/category/macbook.png'
import gaming from '../../assets/category/gaming.png'
const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className='py-10 px-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-5'>
                        <p className='text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold my-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Earphone</p>
                        <Button text={"Browse"} bgColor={"bg-primary"} textColor={"text-white"}/>
                    </div>
                </div>
                <img src={earphone} className='w-[320px] absolute h-auto -right-2 -top-8 sm:-top-3 block' alt="" />
            </div>
            <div className='py-10 px-5 bg-gradient-to-br from-brandYellow/100 to-brandYellow/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-5'>
                        <p className='text-black'>Enjoy</p>
                        <p className='text-2xl text-white font-semibold my-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold text-black opacity-20 mb-4'>Gadget</p>
                        <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-yellow-500"}/>
                    </div>
                </div>
                <img src={watch} className='w-[320px] absolute h-auto block top-5 -right-14 sm:-right-28-' alt="" />
            </div>
            <div className='sm:col-span-2 py-10 px-5 bg-gradient-to-br from-primary/90 to-primary/100 text-white rounded-3xl relative h-[320px] flex items-start lg:items-end'>
                <div>
                    <div className='mb-5'>
                        <p className='text-gray-800'>Enjoy</p>
                        <p className='text-2xl text-white font-semibold my-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold text-black opacity-20 mb-4'>Laptop</p>
                        <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-primary"}/>
                    </div>
                </div>
                <img src={macbook} className='sm:w-[350px] w-[200px] top-32 sm:-top-4 absolute h-auto block -right-4' alt="" />
            </div>
        </div>
      </div>    
    </div>
  )
}

export default Category
