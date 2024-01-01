import React, { useState } from 'react'

const AboutOverview = () => {
  return (
    <div>
        <div className="bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] rounded-xl  mt-[7.5rem] ">
            <div className="h-[2px]"></div>
            <div className="flex">
                <div className="w-[2px]"></div>
                <div className=" p-3 m-[1px] lg:p-12  bg-gradient-to-b from-[#013229] to-[#011F1A]  rounded-xl    ">
                    <h1 className="font-darker-grotesque text-5xl text-[rgb(237,241,228)]">
                        About this course
                    </h1>
                    <p className="mt-8 font-dm-sans font-normal leading-8 text-base  text-[#D7CEA5]">
                        You interact with JavaScript code all the time — you just might not
                        realize it. It powers dynamic behavior on websites (like this one)
                        and plays an important role in many fields, like front- and back-end
                        engineering, game and mobile development, virtual reality, and more.
                        In this course, you’ll learn JavaScript fundamentals that will be
                        helpful as you dive deeper into more advanced topics.
                    </p>

                    <div className="flex mt-10 gap-4 ">
                        <h1 className="text-4xl font-darker-grotesque lg:text-5xl text-[#EDF1E4]  font-extrabold">
                        Syllabus
                        </h1>
                        <button className=" text-sm px-1 py-2 lg:px-5 bg-gradient-to-b from-[#D7CEA5] to-[#3D8361] font-dm-sans rounded h-14 font-bold lg:text-xl">
                        11 lessons • 12 projects • 8 quizzes
                        </button>
                    </div>

                    <div className="mt-10">
                        <Accordian
                            heading="Welcome to Learn JavaScript"
                            text="Learn about what the JavaScript course has in store!"
                        />
                        <Accordian
                            heading="Introduction"
                            text="Learn about what the JavaScript course has in store!"
                        />
                        <Accordian
                            heading="Conditionals"
                            text="Learn about what the JavaScript course has in store!"
                        />
                        <Accordian
                            heading="Functions"
                            text="Learn about what the JavaScript course has in store!"
                        />
                        <Accordian
                            heading="Scope"
                            text="Learn about what the JavaScript course has in store!"
                        />
                        <Accordian
                            heading="Arrays"
                            text="Learn about what the JavaScript course has in store!"
                        />
                    </div>
                    <div className="w-full flex justify-center mt-16">
                        <button className="py-4 px-16 rounded font-bold bg-gradient-to-b from-[#EDF1E4] to-[#D7CEA5]">
                            Enroll Now
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


const Accordian = ({ heading, text }) => {

    const [open,setOpen] = useState(false)
    
    return (
        <div className="  mt-8">
            <div>
                <div className="flex justify-between ">
                    <h3 className="font-dm-sans font-bold text-[#EDF1E4] text-xl">
                    {heading}
                    </h3>
                    <img className={`${ open && "rotate-180"} cursor-pointer `} onClick={()=>setOpen(!open)} src="/downArrow.svg" alt="" />
                </div>
                <p className="font-dm-sans font-normal text-[#D7CEA5] mt-3">{text}</p>
            </div>
    
            {open && (
                <div>
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="Introduction to JavaScript"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="Variables"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="Kelvin Weather"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="Dog Years"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="JavaScript Quiz"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="JavaScript Coding Exercise"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                    <IntroCard
                        img="/bookIcon.svg"
                        heading="JavaScript Recap"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
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
            <div className="flex flex-col justify-between ml-6">
                <h1 className="font-dm-sans font-bold text-[#EDF1E4] text-base">
                    {heading}
                </h1>
                <p className="font-dm-sans font-normal text-[#3D8361]">{text}</p>
            </div>
        </div>
    );
};