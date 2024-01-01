import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//icons
import { FaCode } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { DiCodeigniter } from "react-icons/di";
import { BiSolidHome } from "react-icons/bi";
// import { MdSpaceDashboard } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
// import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const framerSidebarPanel = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.3 },
}
  
const framerText = delay => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    }
}
  
const framerIcon = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1.5,
    },
}  

const MobileMenu = ({ state, setState }) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/')
    }

    const sidebarToggle = () => {
        setState(!state)
    }

  return (

        <>
            <motion.div {...framerSidebarPanel} className="top-0 right-0 z-40 w-[230px] md:w-[265px] bg-[#001713]  p-6 backdrop-blur-sm text-white fixed h-full ">
                <div className='w-full flex justify-between pt-3'>
                    <div className='flex gap-4'>
                        {/* <img class="w-9 h-9 rounded" src="https://res.cloudinary.com/ddb081sch/image/upload/v1702445268/cld-sample-5.jpg" alt="Default avatar"/> */}
                        <h3 className='self-center text-xl font-medium'>Hello!</h3>
                    </div>
                    <button 
                        onClick={sidebarToggle}
                        className='text-2xl '>
                        <IoMdClose/>
                    </button>
                
                </div>
                <div className="options-list mt-10 text-lg font-medium">
                    <ul className='space-y-6'>

                        { menuItems.map((item, index) => (
                            <motion.li key={index}>
                                <a href={item.href} className="flex gap-4 cursor-pointer">
                                    <motion.span {...framerIcon} className="self-center text-xl font-extrabold">
                                        {item.icon}
                                    </motion.span>
                                    <motion.span {...framerText(index)}>
                                        {item.text === 'Logout' ? (
                                            <span onClick={handleLogout}>{item.text}</span>
                                        ) : (
                                            item.text
                                        )}
                                    </motion.span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>


  )
}

export default MobileMenu

const menuItems = [
    // { icon: <MdSpaceDashboard />, text: 'Dashboard', href:'/'},
    { icon: <BiSolidHome />, text: 'Home', href:'/'},
    { icon: <DiCodeigniter />, text: 'Codecamps', href:'/codecamps'},
    { icon: <FaCode />, text: 'Courses', href:'/'},
    // { icon: <IoPerson />, text: 'Profile', href:'/'},
    // { icon: <IoLogOut />, text: 'Logout', href:''},
];

  
