/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment,useState } from 'react';
import './NavBar.css'
import logo from '../../assets/cm-logo-1 1.svg';
import Button from '../../assets/Property 1=Component 2.svg';
import { motion,AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

//Components
import MyModal from '../Modal/MyModal';
import SignupModal from '../Modal/SignupModal';
import MobileMenu from '../MobileMenu/MobileMenu';


function NavBar() {
  const [state, setState] = useState('');
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 19) {
        setNavbar(true)
        handleOnClose();
    } else {
        setNavbar(false)
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleOnClose = () => setState('');

  const user = true


  return (
    <>
        
        { navbar ?(
            <nav className='fixed z-20 rounded-[15px] lg:pl-10 px-2 py-2 border mt-10 border-[#EAEDDC] left-1/2 -translate-x-1/2 border-opacity-40 bg-[#002B23] navbar'>
                <div className='flex justify-between items-center sm:gap-7 md:gap-16 w-[20rem] md:w-[30rem] lg:w-[36rem]'>
                    <a href="/" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover hidden md:hidden sm:hidden xm:hidden lg:inline xl:inline ">Home</a>
                    <a href="/codecamp" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover hidden md:hidden sm:hidden xm:hidden lg:inline xl:inline ">codecamps</a>
                    <a href="" className="text-secondaryText lg:text-[1rem] mx-2 text-[.9rem] hover:text-secondaryHover hidden md:hidden sm:hidden xm:hidden lg:inline xl:inline ">Courses</a>
                    <a href="/" className="md:inline sm:inline xm:inline lg:hidden xl:hidden">
                        <img src={logo} className="h-6 md:h-8 lg:h-8" alt=""/>
                    </a> 
                    { !user ?
                        <Fragment>
                            <button className="btn flex items-center font-medium text-secondaryHover bg-[#3D836166] w-28 h-9 justify-center rounded-[6px]">
                                Sign up<span className="ml-1 text-xs"><FaArrowRight/></span>
                            </button>
                        </Fragment>
                        :
                        <button
                            onClick={()=>setSidebar(!sidebar)}
                        >
                            <img class="w-9 h-9 rounded" src="https://res.cloudinary.com/ddb081sch/image/upload/v1702445256/samples/two-ladies.jpg" alt="Default avatar"></img>
                        </button>
                    }
                </div>
            </nav>

            ):(
            // Main Navigation Bar
            <nav className="fixed bg-transparent w-full z-20 top-0 left-0 lg:pt-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[1.5rem]">
                    <a href="" className="flex items-center">
                        <img src={logo} className="h-6 md:h-8 mr-3" alt="Flowbite Logo"/>
                    </a>
                    <div className="flex md:order-2">
                        {!user ?
                            <Fragment>
                                <button 
                                    onClick={() => setState('signup')}
                                    className="hidden sm:hidden xs:hidden lg:inline-block md:inline-block">
                                    <img className="w-36" src={Button} alt="" />
                                </button>
                                <button  
                                    onClick={() => setState('signup')}
                                    className="btn inline-flex md:hidden items-center font-medium text-secondaryHover  bg-gradient-to-b from-[#011F1A] via-[#011F1A] to-[#01322937] border-[#EAEDDC66] border-[1px] w-28 h-[2.3rem] md:w-36 md:h-[2.7rem] justify-center rounded-[6px]">
                                    Sign up<span className="ml-1 text-xs"><FaArrowRight/></span>
                                </button>
                            </Fragment>
                            :
                            <button
                            onClick={()=>setSidebar(!sidebar)}
                        >
                            <img class="w-10 h-10 rounded" src="https://res.cloudinary.com/ddb081sch/image/upload/v1702445256/samples/two-ladies.jpg" alt="Default avatar"></img>
                        </button>
                        }
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-20 md:mt-0 md:border-0">
                            <li>
                                <a href="/" className="block py-2 pl-4 pr-4 text-secondaryText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </li>
                            <li>
                                <a href="/codecamp" className="block py-2 pl-4 pr-4 text-secondaryText rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Codecamps</a>
                            </li>
                            <li>
                                <a href="/"  className="block py-2 pl-4 pr-4 text-secondaryText  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondaryHover md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</a>
                            </li>
                        </ul>
                    </div> 
                </div>
                
                {state === 'signin' &&  <MyModal onClose={handleOnClose} setState={setState}/> }
                {state === 'signup' &&  <SignupModal onClose={handleOnClose} setState={setState} /> }

            </nav>
            )
        }

        <AnimatePresence mode="wait" initial={false}>
            { sidebar && <MobileMenu state={sidebar} setState={setSidebar}/> }
        </AnimatePresence>
        
    </>
  )
}

export default NavBar