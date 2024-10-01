import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright } from 'react-icons/fa6'
import Button from '../Shared/Button'
import { IoIosSend } from 'react-icons/io'
import { MdOutlinePhoneIphone } from 'react-icons/md'
const menuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/#Shop"
    },
    {
        id: 3,
        name: "About",
        link: "/#About"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#Blogs"
    }
]
const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pb-8 pt-5">
            <div className='py-8 px-4'>
                <a className='text-primary font-semibold text-2xl tracking-widest uppercase sm:text-3xl' href="#">
                    Eshop
                </a>
                <p className="text-gray-500 text-sm py-4">
                    Eshop is a platform for buying and selling products online.
                </p>
                <p className='mb-5'>
                    Made with 💖 by Kolkasa <FaRegCopyright className='inline-block' /> 2024
                </p>
                <Button text={"Shop Now"} bgColor={"bg-primary"} textColor={'text-white'}/>
            </div>
            <div className='py-8 px-4'>
                <h2 className='text-black font-bold text-2xl mb-3 dark:text-white'>
                    Important Links
                </h2>
                <ul className='flex flex-col gap-4'>
                    {menuLinks.map((link) =>
                        <li key={link.id}><a className='duration-200 hover:text-black dark:hover:text-white text-gray-500 inline-block font-medium text-lg' href={link.link}>{link.name}</a></li>
                    )}
                </ul>
            </div>
            <div className='py-8 px-4'>
                <h2 className='text-black font-bold text-2xl mb-3 dark:text-white'>
                    Quick Links
                </h2>
                <ul className='flex flex-col gap-4'>
                    {menuLinks.map((link) =>
                        <li key={link.id}><a className='duration-200 hover:text-black dark:hover:text-white text-gray-500 inline-block font-medium text-lg' href={link.link}>{link.name}</a></li>
                    )}
                </ul>
            </div>
            <div className='py-8 px-4'>
                <h2 className='text-black font-bold text-2xl mb-3 dark:text-white'>
                    Address
                </h2>
                <div className='flex items-center gap-2'>
                    <IoIosSend className='text-xl'/>
                    <p>Noida , Uttar Pradesh</p>
                </div>
                <div className='flex items-center gap-2 my-4'>
                    <MdOutlinePhoneIphone className='text-xl'/>
                    <p>+91 1234567890</p>
                </div>
                <div className='flex items-center gap-4'>
                    <a className='duration-300 text-3xl hover:text-brandBlue' href="">
                        <FaFacebook />
                    </a>
                    <a className='duration-300 text-3xl hover:text-primary' href="">
                        <FaInstagram />
                    </a>
                    <a className='duration-300 text-3xl hover:text-brandBlue' href="">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
