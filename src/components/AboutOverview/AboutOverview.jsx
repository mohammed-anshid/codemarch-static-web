import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { codecamps } from '..'


// Icons //
import { IoIosArrowDown } from "react-icons/io";
import bookIcon from '../../assets/bookIcon.svg';
import { MdDescription } from 'react-icons/md';

const AboutOverview = () => {
    const [codecamp, setCodecamp] = useState(null)
    const { id } = useParams()

    console.log(id)

    useEffect(()=> {
        const codecamp = codecamps.find(c => c.id === id);
        setCodecamp(codecamp)
    },[id])


    console.log(codecamp,'pppppp')

  return (
    <div>
        <div className="bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] rounded-xl  mt-[7.5rem] ">
            <div className="h-[2px]"></div>
            <div className="flex">
                <div className="w-[2px]"></div>
                <div className=" p-3 m-[1px] lg:p-12  bg-gradient-to-b from-[#013229] to-[#011F1A]  rounded-xl  w-full  ">
                    <h1 className="text-font text-4xl md:text-4xl lg:text-5xl font-extrabold text-secondaryHover">
                        About this course
                    </h1>
                    <p className="mt-8 font-dm-sans font-normal leading-8 text-base  text-[#D7CEA5]">
                        {codecamp?.aboutCourse}
                    </p>

                    <div className="flex mt-10 gap-4 ">
                        <h1 className="text-font text-4xl md:text-4xl lg:text-5xl font-extrabold text-secondaryHover">
                            Syllabus
                        </h1>
                        <button className=" text-sm px-1 py-2 lg:px-5 bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] font-dm-sans rounded h-14 font-bold lg:text-xl">
                            11 lessons • 12 projects • 8 quizzes
                        </button>
                    </div>

                    <div className="mt-10">
                        {
                            codecamp?.syllabus?.map((item,index)=> (

                                <Accordian
                                    key={index}
                                    heading={item.title}
                                    text={item.description}
                                    syllabus={item.includes}
                                />
                                

                            ))
                        }
                        
                    </div>
                    <div className="w-full flex justify-center mt-16">
                        <button className="py-4 px-16 rounded font-bold bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5]">
                            {/* Enroll Now */}
                            Coming Soon
                        </button>
                    </div>
                </div>
                <div className="w-[2px]"></div>
            </div> 
            <div className="h-[2px]"></div>
        </div>
    </div>
  )
}

export default AboutOverview


const Accordian = ({ heading, text, syllabus }) => {
    console.log('orakkaaammm')

    const [open,setOpen] = useState(false)
    
    return (
        <div className="mt-8">
            <div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-dm-sans font-bold text-[#EDF1E4] text-xl">
                            {heading}
                        </h3>
                        <p className="font-dm-sans font-normal text-[#D7CEA5] mt-3">{text}</p>
                    </div>
                    <span className={`${ open && "rotate-180"} cursor-pointer  self-center text-secondaryHover text-3xl`} onClick={()=>setOpen(!open)}><IoIosArrowDown/></span>
                </div>
            </div>
    
            {open && (
                <div>
                    {
                        syllabus?.map((item, index) => (
                            <IntroCard
                                key={index}
                                img={bookIcon}
                                heading={item.title}
                                text={item.description}
                            />
                        ))
                    }
                </div>
            )}
            <div className="h-[1px]  bg-gradient-to-r from-[#d7cea500] via-[#d7cea5af] to-[#d7cea500] mt-8"></div>
        </div>
    );
};

const IntroCard = ({ img, heading, text }) => {
    return (
        <div className="mt-8 flex">
            <img src={img} alt="" width={72} height={72}  className="self-start" />
            <div className="flex flex-col item-center justify-between ml-6">
                <h1 className="font-dm-sans font-bold text-[#EDF1E4] text-base">
                    {heading}
                </h1>
                <p className="font-dm-sans font-normal text-[#3D8361]">{text}</p>
            </div>
        </div>
    );
};