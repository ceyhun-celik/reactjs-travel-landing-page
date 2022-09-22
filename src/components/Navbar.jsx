import React, { useState } from 'react'
import { BsGithub, BsPerson } from 'react-icons/bs'
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    return (
        <div className='flex justify-between items-center h-20 px-4'>
            <div>
                <h1 className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
            </div>

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Book</li>
            </ul>

            <div className='hidden md:flex'>
                <BiSearch className='mr-1' size={20} />
                <BsPerson className='mr-1' size={20} />
                <a href="https://github.com/ceyhun-celik/reactjs-travel-landing-page" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 className='text-black' size={20} />}
            </div>

            {/* Mobile menu dropdown */}
            <div className={`${nav ? 'top-0' : 'top-[-100%]'} absolute left-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col`}>
                <ul>
                    <h1>BEACHES.</h1>

                    <li className='border-b'>Home</li>
                    <li className='border-b'>Destinations</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>Views</li>
                    <li className='border-b'>Book</li>

                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>

                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar