import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className="max-w-[1240px] mx-auto flex flex-col px-4">
            <div className='sm:flex text-center justify-between items-center'>
                <h1>BEACHES.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                    <a href="https://github.com/ceyhun-celik/reactjs-travel-landing-page" target="_blank" rel="noreferrer"><BsGithub className='icon' /></a>
                </div>
            </div>

            <div className="flex justify-between">
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>

                <ul className='text-right lg:flex'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Views</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer