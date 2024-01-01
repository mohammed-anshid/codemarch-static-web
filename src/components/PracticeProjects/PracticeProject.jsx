import React from 'react'

const PracticeProject = () => {
    const icons = []
  return (
    <>
        <div className="flex flex-col mt-[7.5rem] gap-3 lg:flex-row ">
            <Card
                img="/puzzleIcon.svg"
                heading="Feature 1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <div className=" h-[2px] my-10 bg-gradient-to-r lg:my-0  lg:w-[2px] lg:h-auto  lg:bg-gradient-to-b from-[#d7cea500] via-[#d7cea5] to-[#d7cea500] "></div>
            <Card
                img="/tickbigIcon.svg"
                heading="Feature 2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            {/* <div className=" h-[2px] my-10 bg-gradient-to-r lg:w-[1px] lg:my-0  lg:h-auto  lg:bg-gradient-to-b from-[#d7cea500] via-[#d7cea5] to-[#d7cea500]"></div> */}
            <div className=" h-[2px] my-10 bg-gradient-to-r lg:my-0  lg:w-[2px] lg:h-auto  lg:bg-gradient-to-b from-[#d7cea500] via-[#d7cea5] to-[#d7cea500] "></div>
            <Card
                img="/startIcon.svg"
                heading="Feature 3"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
        </div>
    </>
  )
}

export default PracticeProject

const Card = ({ img, heading, text }) => {
    return (
        <div className="px-2">
            <img src={img} alt="" />
            <h1 className="mt-6 text-4xl font-darker-grotesque font-extrabold text-[#EDF1E4]">
                {heading}
            </h1>
            <p className="mt-5 font-dm-sans text-lg text-[#D7CEA5]">{text}</p>
        </div>
    );
};