import React from 'react';
import logo from '../../assets/Group 47.png';
import { FaArrowRight } from 'react-icons/fa';


const MyModal = ({ onClose,setState }) => {  
  
  const handleOnClose = (e) => {
    if(e.target.id === "container") onClose();
  };  

  const handleClick = () => {
    setState('signup');
  }
    
//   if(!visible) return null; 
  return (
    <div 
        id="container"
        onClick={handleOnClose} 
        className="fixed inset-0 bg-opacity-30  backdrop-blur-lg flex justify-center items-center"
    >
        <div className="bg-gradient-to-t bg-[#002b23] from-[#001e18] to-transparent w-[22rem] sm:w-[27rem] md:h-[36.8rem] border-2 rounded-xl">
            <div className="p-6 space-y-6 sm:space-y-[2rem]">
                <div className="logo mt-5">
                    <img className="h-10 sm:h-12 mx-auto" src={logo} alt="" />
                </div>

                {/* Buttons */}
                <div className="space-y-3 sm:space-y-4">
                    <button
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center bg-[#3D836166] justify-center w-full h-10 sm:h-12 space-x-4  rounded-lg"
                    >
                        <svg className='h-6 sm:h-10' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.1901 16.3444C31.1901 15.07 31.0866 14.14 30.8628 13.1755H16.3101V18.9277H24.8522C24.6801 20.3572 23.7501 22.51 21.6834 23.9566L21.6544 24.1491L26.2557 27.7137L26.5745 27.7455C29.5022 25.0416 31.1901 21.0633 31.1901 16.3444Z" fill="#EDF1E4" />
                            <path d="M16.3101 31.5C20.495 31.5 24.0083 30.1221 26.5745 27.7456L21.6834 23.9566C20.3745 24.8694 18.6178 25.5066 16.3101 25.5066C12.2112 25.5066 8.73236 22.8028 7.49224 19.0656L7.31047 19.081L2.52595 22.7838L2.46338 22.9577C5.01224 28.021 10.2478 31.5 16.3101 31.5Z" fill="#EDF1E4" />
                            <path d="M7.49221 19.0655C7.165 18.101 6.97563 17.0676 6.97563 15.9999C6.97563 14.9321 7.165 13.8988 7.475 12.9343L7.46633 12.7289L2.62185 8.96667L2.46335 9.04207C1.41284 11.1432 0.810059 13.5027 0.810059 15.9999C0.810059 18.4971 1.41284 20.8565 2.46335 22.9576L7.49221 19.0655Z" fill="#EDF1E4" />
                            <path d="M16.3101 6.49329C19.2206 6.49329 21.1839 7.75051 22.3034 8.80114L26.6778 4.53C23.9912 2.03278 20.495 0.5 16.3101 0.5C10.2478 0.5 5.01224 3.97886 2.46338 9.04216L7.47503 12.9344C8.73236 9.19722 12.2112 6.49329 16.3101 6.49329Z" fill="#EDF1E4" />
                        </svg>

                        <h6 className='text-white'>Login with Google</h6>
                    </button>
                    <button
                        aria-label="Login with Github"
                        type="button"
                        className="flex items-center bg-[#3D836166] justify-center w-full h-10 sm:h-12 space-x-4  rounded-lg"
                    >
                        <svg className='h-6 sm:h-10' width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5001 0.470581C7.66466 0.470581 0.5 7.59919 0.5 16.3932C0.5 23.4282 5.08452 29.3966 11.4419 31.502C12.2415 31.6494 12.5351 31.1566 12.5351 30.7361C12.5351 30.3564 12.5202 29.1021 12.5133 27.7716C8.06209 28.7348 7.12283 25.893 7.12283 25.893C6.39499 24.0525 5.3463 23.5632 5.3463 23.5632C3.89461 22.5749 5.45573 22.5952 5.45573 22.5952C7.06242 22.7076 7.90842 24.2361 7.90842 24.2361C9.33547 26.6703 11.6514 25.9665 12.5645 25.5597C12.7081 24.5306 13.1227 23.8282 13.5803 23.4305C10.0265 23.0279 6.2906 21.6626 6.2906 15.5615C6.2906 13.8232 6.91563 12.4028 7.93916 11.2877C7.77303 10.8866 7.22537 9.26718 8.09415 7.07396C8.09415 7.07396 9.43774 6.64602 12.4953 8.70609C13.7716 8.35329 15.1404 8.17637 16.5001 8.17031C17.8599 8.17637 19.2297 8.35329 20.5084 8.70609C23.5623 6.64602 24.904 7.07396 24.904 7.07396C25.7749 9.26718 25.227 10.8866 25.0608 11.2877C26.0868 12.4028 26.7075 13.8232 26.7075 15.5615C26.7075 21.6771 22.9645 23.0237 19.4017 23.4179C19.9756 23.912 20.4869 24.881 20.4869 26.3665C20.4869 28.497 20.4684 30.2116 20.4684 30.7361C20.4684 31.1598 20.7564 31.6563 21.5674 31.4999C27.9213 29.3921 32.5 23.4258 32.5 16.3932C32.5 7.59919 25.3364 0.470581 16.5001 0.470581ZM6.49257 23.1526C6.45733 23.2317 6.33227 23.2555 6.21834 23.2011C6.10229 23.1492 6.03711 23.0414 6.07474 22.962C6.10918 22.8805 6.2345 22.8578 6.35029 22.9124C6.4666 22.9644 6.53284 23.0733 6.49257 23.1526ZM7.2796 23.8515C7.20329 23.9219 7.05412 23.8892 6.95291 23.7779C6.84825 23.6669 6.82864 23.5185 6.90601 23.447C6.9847 23.3766 7.12937 23.4096 7.23429 23.5206C7.33895 23.6329 7.35935 23.7803 7.2796 23.8515ZM7.81953 24.7456C7.7215 24.8134 7.5612 24.7498 7.46211 24.6083C7.36407 24.4667 7.36407 24.2969 7.46422 24.2288C7.56358 24.1608 7.7215 24.222 7.82191 24.3625C7.91968 24.5065 7.91968 24.6763 7.81953 24.7456ZM8.73267 25.7812C8.64497 25.8774 8.45818 25.8516 8.32146 25.7203C8.18156 25.5919 8.14261 25.4097 8.23058 25.3134C8.31934 25.2169 8.50719 25.2441 8.64497 25.3743C8.78381 25.5025 8.8262 25.686 8.73267 25.7812ZM9.91281 26.1308C9.87413 26.2555 9.69423 26.3122 9.513 26.2592C9.33203 26.2046 9.2136 26.0585 9.25016 25.9325C9.28778 25.807 9.46848 25.7479 9.65104 25.8046C9.83174 25.8589 9.95044 26.004 9.91281 26.1308ZM11.2559 26.2791C11.2604 26.4104 11.1067 26.5193 10.9165 26.5216C10.7252 26.5259 10.5704 26.4196 10.5683 26.2904C10.5683 26.1578 10.7185 26.0499 10.9098 26.0468C11.1001 26.0431 11.2559 26.1486 11.2559 26.2791ZM12.5753 26.2287C12.5981 26.3569 12.4658 26.4885 12.2769 26.5235C12.0912 26.5573 11.9192 26.4782 11.8957 26.3511C11.8726 26.2198 12.0072 26.0882 12.1927 26.0542C12.3819 26.0215 12.5512 26.0985 12.5753 26.2287Z" fill="#EDF1E4" />
                        </svg>

                        <h6 className='text-white'>Login with GitHub</h6>
                    </button>
                </div>

                <p className="text-white text-center">OR</p>

                {/* input's form*/}
                <form>
                    <div className="space-y-3 sm:space-y-4">
                        <div className="">
                            <input id="email" type="email" className=" h-10 sm:h-12 w-full rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" placeholder="E-mail"/>
                        </div>
                        <div className="">
                            <input id="password" type="password" className="h-10 sm:h-12 w-full rounded-lg bg-[#002b23] px-4 border-2 border-[#3D8361] outline-none text-[#3D8361] focus:ring-0 focus:ring-[#3D8361] placeholder-[#3D8361]" placeholder="Password"/>
                        </div>
                    </div>
                    <button className="flex items-center mt-4 text-[#002b23] font-semibold bg-gradient-to-b from-[#EDF1E4] via-[#EDF1E4] to-[#D7CEA5] w-full h-10 sm:h-12 md:h-12 justify-center rounded-lg">
                        Log In<span className="ml-1 text-xs"><FaArrowRight/></span>
                    </button>
                </form>

                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center text-secondaryHover text-sm font-thin">
                            <p>New Here?</p>
                        </div>
                        <div className="text-sm font-medium text-secondaryText hover:underline">
                            <p onClick={handleClick} >Signup</p>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-secondaryText hover:underline">Forgot password?</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyModal