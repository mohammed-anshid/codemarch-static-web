import React from 'react';
import './codecampsList.css';
import { useNavigate } from 'react-router-dom';

import { codecamps } from '..';

const CodecampsList = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="pt-24 md:pt-10 lg:pb-16 px-4 md:px-16">
            <div className="max-w-screen-xl flex flex-wrap rounded-[16px]  items-center justify-between mx-auto p-3">
                <div className="banner-header w-full">
                    <div className="content mx-0 md:mx-3 text-center justify-center">
                        <h4 className="text-6xl hidden md:block lg:text-[4.7rem] break-words header bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-transparent font-extrabold">Enroll. Upskill. Master.</h4>
                        <h4 className="text-6xl md:hidden lg:text-[4.7rem] break-words header bg-gradient-to-t from-secondaryText to-secondaryHover bg-clip-text text-transparent font-extrabold">
                            <span>Enroll.</span><br />
                            <span>Upskill.</span><br />
                            <span>Master.</span>
                        </h4>
                        <p className="text-sm sm:text-xl text-secondaryHover my-7 custom-line-height">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            <br className="hidden sm:block md:hidden lg:block"/>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
                <div className="bootcamps flex overflow-x-auto gap-8">
                    {codecamps.map((item,index) => (
                        <div onClick={()=>navigate(`/codecamp/${item.id}`)} key={index} className="md:w-72  mt-10 max-h-max mb-10 cursor-pointer bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.6px] rounded-[20px]">
                            <div className='mx-auto h-full rounded-[20px] overflow-hidden bg-[#001e18]  bg-gradient-to-t from-[#001e18] to-transparent'>

                                <div className="m-3 max-h-max">
                                    <div className="relative">
                                        <img
                                            className="rounded-2xl w-full h-32 md:h-36"
                                            src={item.image}
                                            alt=""
                                        />
                                        <button className="buttonStyle">{item.type}</button>
                                    </div>

                                        <div className='m-1 h-[155px] md:h-[190px]'>
                                            <h1 className="mt-3 md:mt-5 text-[#D7CEA5] text-lg font-medium leading-32 tracking-tight text-left">
                                                {item.title}
                                            </h1>
                                            <p className="text-[17px] md:text-xl text-font mt-3 md:mt-4 font-normal leading-32 tracking-wide text-left text-[#3D8361]">
                                                {item.description.substring(0, 145) + '.'}
                                            </p>
                                        </div>                                                              

                                        <div className="flex items-center gap-2 pt-5 md:pt-10 mt-7">
                                            <div className="flex -space-x-5 md:-space-x-4 ">
                                                <div className="samllbox"></div>
                                                <div className="samllbox"></div>
                                                <div className="samllbox"></div>
                                                <div className="samllbox"></div>              
                                               
                                            </div>
                                            <div className="flex justify-between">
                                                <h4 className="textStyle ml-5  w-20"></h4>
                                                <h4 className="textStyle ml-2  w-20"></h4>
                                            </div>
                                        </div>
                                  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default CodecampsList