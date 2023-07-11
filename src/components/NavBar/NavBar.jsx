/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './NavBar.css'
import logo from '../../assets/cm-logo-1 1.svg';
import Button from '../../assets/Property 1=Component 2.svg';
import secondaryButton from '../../assets/button-secondary-small.svg'

function NavBar() {
  const [state, setState] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 19) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
        
        { navbar ?(
            // Secondary Navigation Bar
            <nav className="fixed z-20 top-10 w-100 min-w-100 left-1/2 transform -translate-x-1/2 rounded-[15px] border border-[#EAEDDC] border-opacity-40 bg-[#002B23] shadow-md">
                <div className="flex navbar items-center gap-16 justify-between lg:pl-20 sm:pl-40 lg:pr-2 py-1">
                    <div className="flex items-center md:space-x-16 sm:space-x-16">
                        <a href="#" className="text-secondaryText hover:text-secondaryHover">Skills</a>
                        <a href="#" className="text-secondaryText hover:text-secondaryHover">Newsletter</a>
                        <a href="#" className="text-secondaryText hover:text-secondaryHover">Community</a>
                    </div>  
                    <button className="md:space-x-16">
                        <img className="h-10" src={secondaryButton} alt="" />
                    </button>
                </div>
            </nav>
            ):(
            // Main Navigation Bar
            <nav className=" fixed bg-transparent w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo"/>
                    </a>
                    <div className="flex md:order-2">
                        <button onClick={()=>console.log('hello')} type="button"  className='invisible md:visible'>
                            <img className='w-36' src={Button} alt="" />
                        </button>
                        <button onClick={()=>setState(!state)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-20 md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 pl-4 pr-4 text-secondaryText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-4 pr-4 text-secondaryText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Newsletter</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-4 pr-4 text-secondaryText  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${state ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="top-0 right-0 w-[170px] bg-blue-600 text-white fixed h-full">
                    {/* Mobile navigation links */}
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </a>
                    </div>
                </div>
            </nav>
            )
        }
    </>
  )
}

export default NavBar