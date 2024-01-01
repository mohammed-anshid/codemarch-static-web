import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MyCourses from '../MyCourses/MyCourses';
import MyCodecamps from '../MyCodecamps/MyCodecamps';

const DashBoard = () => {
    const navigate = useNavigate();
    const [activeOption, setActiveOption] = useState('my-courses');
      // Define a function to set the selected component based on the option clicked
    const handleOptionClick = (option) => {
        console.log(option)
        navigate(`/dashboard/${option}`);
        setActiveOption(option)
    };  
  return (
    <>
        <div className="pt-3 lg:pb-16 px-7 md:px-16 lg:px-32">
            <div className="max-w-screen-xl flex flex-wrap rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] items-center justify-between mx-auto pl-[2px] p-[1.5px]">
                <div class="flex h-full w-full rounded-[16px] bg-[#002b23]  bg-gradient-to-t from-[#001e18] to-transparent">
                    <div className="dashboard p-3 sm:p-4 w-full">
                        <div className="navigation">
                            <Navigation onOptionClick={handleOptionClick} activeOption={activeOption} />
                        </div>
                        <div className="option-components">
                            <Routes>
                                <Route path="/my-courses" element={<MyCourses />} />
                                <Route path="/my-codecamps" element={<MyCodecamps />} />
                                <Route path="/" element={<Navigate replace to="/dashboard/my-courses" />} />
                                <Route path="/*" element={<Navigate replace to="/dashboard/my-courses" />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashBoard