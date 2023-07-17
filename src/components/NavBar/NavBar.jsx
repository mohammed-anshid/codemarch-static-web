/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './NavBar.css'
import logo from '../../assets/cm-logo-1 1.svg';
import Button from '../../assets/Property 1=Component 2.svg';
import secondaryButton from '../../assets/button-secondary-small.svg';
import { FaBars } from 'react-icons/fa';

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
            <nav className="fixed z-20 top-10 w-100 py-[.3rem]  left-1/2 transform -translate-x-1/2 rounded-[15px] border border-[#EAEDDC] border-opacity-40 bg-[#002B23] shadow-md">
                <div className="flex navbar items-center gap-16 justify-between  px-11 lg:pl-20 lg:pr-2 py-1">
                    <div className="items-center md:space-x-11 sm:gap-11">
                        <a href="#" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover">Skills</a>
                        <a href="#" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover">Newsletter</a>
                        <a href="#" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover">Community</a>
                    </div>  
                    <button className="md:space-x-16 hidden sm:hidden xs:hidden lg:inline-block md:inline-block">
                        <img className="h-10" src={secondaryButton} alt="" />
                    </button>
                </div>
            </nav>
            ):(
            // Main Navigation Bar
            <nav className="fixed bg-transparent w-full z-20 top-0 left-0 lg:pt-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[1.5rem]">
                    <a href="" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo"/>
                    </a>
                    <div className="flex md:order-2">
                        <button className="hidden sm:hidden xs:hidden lg:inline-block md:inline-block">
                            <img className="w-36" src={Button} alt="" />
                        </button>
                        <a onClick={() => setState(!state)} className="inline-flex items-center p-2 w-16 h-12 justify-center text-[1.7rem] text-secondaryText rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-secondaryText dark:text-secondaryText dark:hover:bg-secondaryText dark:focus:ring-secondaryText" aria-controls="navbar-sticky" aria-expanded="false">
                            <FaBars/>
                        </a>

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
                    <div className="top-0 right-0 w-[190px] bg-[#082d26] text-white fixed h-full">
                        <button onClick={()=>setState(!state)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close menu</span>
                        </button>    
                    {/* Mobile navigation links */}
                        <div class="py-4 overflow-y-auto mt-4">
                            <ul class="space-y-2 font-medium text-center">
                                <li>
                                    <a href="#" class="flex p-2 m-4 text-secondaryText hover:text-secondaryHover rounded-lg dark:text-secondaryHover hover:bg-[#001e18] dark:hover:bg-secondaryHover group">
                                        <span class="ml-3 text-center">Skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex p-2 m-4 text-secondaryText hover:text-secondaryHover rounded-lg dark:text-secondaryHover hover:bg-[#001e18] dark:hover:bg-secondaryHover group">
                                        <span class="ml-3 text-center">Newsletter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex p-2 m-4 text-secondaryText hover:text-secondaryHover rounded-lg dark:text-secondaryHover hover:bg-[#001e18] dark:hover:bg-secondaryHover group">
                                        <span class="ml-3 text-center">Community</span>
                                    </a>
                                </li>
                                <li>
                                    <button className="">
                                        <img className="w-[152px]" src={Button} alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            )
        }
    </>
  )
}

export default NavBar