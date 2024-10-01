import React, { useState } from 'react'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import DarkMode from './DarkMode'
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

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
const dropDownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
]
const Navbar = ({handleOrderPopup}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 overflow-visible'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    <div className='lg:hidden'>
                        <button className='text-3xl' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FaXmark /> : <IoMenu />}
                        </button>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <a className='text-primary font-semibold text-2xl tracking-widest uppercase sm:text-3xl' href="#">
                            Eshop
                        </a>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-5'>
                                {menuLinks.map((link) =>
                                    <li key={link.id}><a className='duration-200 hover:text-black px-2 dark:hover:text-white text-gray-500 inline-block font-medium text-lg' href={link.link}>{link.name}</a></li>
                                )}
                                <li className='relative group'>
                                    <a href="#" className='duration-200 py-2 hover:text-black dark:hover:text-white text-gray-500 gap-1 flex items-center font-medium text-lg'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </a>
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md p-3 bg-white dark:bg-gray-800 shadow-md'>
                                        <ul className='space-y-2'>
                                            {dropDownLinks.map((link) =>
                                                <li className='text-gray-500 hover:bg-primary/20 rounded-md dark:hover:text-white duration-300 hover:text-black' key={link.id}>
                                                    <a className='w-full p-2 inline-block' href={link.link}>{link.name}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='relative group hidden sm:block'>
                            <input type="text"
                                placeholder='Search'
                                className='search-bar'
                            />
                            <IoMdSearch className='group-hover:text-primary duration-200 absolute top-1/2 -translate-y-1/2 right-3 text-xl text-gray-600 dark:text-gray-400' />
                        </div>

                        <button onClick={handleOrderPopup} className='relative pl-2'>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute -top-2 -right-3 flex items-center justify-center text-xs'>4</div>
                        </button>

                        <div className='pl-5'>
                            <DarkMode />
                        </div>
                    </div>
                </div>
                <div className={`duration-200 lg:hidden container overflow-hidden ${isOpen ? 'mt-5 dropdown-enter-active' : 'mt-0 dropdown-leave-active'}`}>
                    <ul className='flex-col items-left gap-5 flex'>
                        {menuLinks.map((link) =>
                            <li key={link.id}><a className='duration-300 hover:text-black hover:translate-x-2 px-2 dark:hover:text-white text-gray-500 inline-block font-medium text-lg' href={link.link}>{link.name}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
