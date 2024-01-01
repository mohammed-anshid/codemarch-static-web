import React, { useState } from "react";
import { courseContents } from "../index";
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';

function Sidebar({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`flex ${isSidebarOpen ? 'ease-in' : ''}`}>
        { children  }
        <div className={'h-full ease-in'}>
          

          <div className="absolute text-white text-4xl top-7 right-7 cursor-pointer">
            <div
              onClick={toggleSidebar}
              className="content-btn flex gap-5 bg-[#001713] rounded-md w-60 h-12 border-[1px] border-[#EDF1E4] items-center justify-center">
              <div className="icon">
                <span className="text-lg"><FaArrowLeft /></span>
              </div>

              <h1 className="font-bold head text-[#EDF1E4] text-2xl mb-1">
                Course Contents
              </h1>
            </div>
          </div>
          <div
            className={`sidebar absolute lg:sticky top-0 bottom-0 w-full md:w-[370px] right-0 p-2 rounded-l-lg  h-screen  overflow-y-auto text-center shadow-[#001713] shadow-inner bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#002b23] to-[#001713] transition-width ease-in-out  
            ${isSidebarOpen ? "" : "hidden"}
            `}
          >
              <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                  <div
                    onClick={toggleSidebar}
                    className="w-10 h-10 text-base bg-[#001713] rounded-lg border border-[#EDF1E4] flex items-center justify-center cursor-pointer">
                    <span><FaArrowRight /></span>
                  </div>

                  <h1 className="font-bold head  text-[#EDF1E4] text-xl ml-3">
                    Course Contents
                  </h1>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>
              <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                <i className="bi bi-search text-sm"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
              </div>

              {
                courseContents.map((module, index) => {
                  return (
                    <AccordionItem data={module} toggleSidebar={toggleSidebar} key={index} />
                  );
                })
              }


              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover-bg-blue-600 text-white"
                onClick={toggleDropdown}
              >
                <i className="bi bi-chat-left-text-fill"></i>
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">
                    Chatbox
                  </span>
                  <span
                    className={`text-sm ${isDropdownOpen ? "rotate-180" : ""}`}
                    id="arrow"
                  >
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div
                className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isDropdownOpen ? "" : "hidden"}`}
                id="submenu"
              >
                <h1 className="cursor-pointer p-2 hover-bg-blue-600 rounded-md mt-1">
                  Social
                </h1>
                <h1 className="cursor-pointer p-2 hover-bg-blue-600 rounded-md mt-1">
                  Personal
                </h1>
                <h1 className="cursor-pointer p-2 hover-bg-blue-600 rounded-md mt-1">
                  Friends
                </h1>
              </div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover-bg-blue-600 text-white">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
