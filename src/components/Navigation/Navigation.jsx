import React from 'react';
import './Navigation.css'

const Navigation = ({ onOptionClick, activeOption }) => {

  return (
    <>
      <div className="navigation text-sm sm:text-base lg:text-xl bg-gradient-to-b from-[#0A392D] via-[rgba(10, 57, 45, 0)] to-transparent p-2 md:p-3  rounded-[14px]">
        <div className='nav-main flex gap-2 sm:gap-[4rem] overflow-x-auto '>
          <button onClick={() => onOptionClick('my-courses')} className={`option-component ${activeOption === 'my-courses' ? 'text-secondaryHover bg-[#001e18] border border-secondaryHover rounded-lg py-2 px-5 whitespace-nowrap':'py-2 px-5 text-secondaryText  bg-transparent  whitespace-nowrap'} `}>My Courses</button>
          <button onClick={() => onOptionClick('my-codecamps')} className={`option-component ${activeOption === 'my-codecamps' ? 'text-secondaryHover bg-[#001e18] border border-secondaryHover rounded-lg py-2 px-5 whitespace-nowrap':'py-2 px-5 text-secondaryText  bg-transparent  whitespace-nowrap'} `}>My Codecamp</button>
          <button disabled className="option-component disabled-btn items-center p-3 flex gap-3 text-[#D7CEA5] whitespace-nowrap">
            <span>My Challenges</span>
            <span className='soon-text md:text-lg bg-[#2679513b] px-2 rounded-md whitespace-nowrap'>COMING SOON</span>
          </button>
          <button disabled className="option-component disabled-btn items-center p-3 flex gap-3 text-secondaryText whitespace-nowrap">
            <p>My Certificates</p>
            <span className='soon-text md:text-lg bg-[#2679513b] px-2 rounded-md whitespace-nowrap'>COMING SOON</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navigation