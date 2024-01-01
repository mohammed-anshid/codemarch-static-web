import React, { Fragment, useEffect, useState } from 'react';

// Icons-Images //
import puzzleIcon from '../../assets/puzzleIcon.svg';
import tickIcon from '../../assets/tickbigIcon.svg';
import startIcon from '../../assets/startIcon.svg';
import { useParams } from 'react-router-dom';
import { codecamps } from '..';

const PracticeProject = () => {
    const icons = [puzzleIcon,tickIcon,startIcon]
    const [codecamp, setCodecamp] = useState(null)
    const { id } = useParams()

    console.log(id)

    useEffect(()=> {
        const codecamp = codecamps.find(c => c.id === id);
        setCodecamp(codecamp?.whatYoullGet)
    },[id])
  return (
    <>
        <div className="pt-24 md:pt-15 lg:pb-11 px-9 md:px-1">
            <div className="border-gradient max-w-screen-xl flex flex-col lg:flex-row  gap-3 mx-auto p-1 ">
                {codecamp?.map((item, index) => (
                    
                    <React.Fragment key={index}>
                        <Card icon={icons[index]} heading={item.title} text={item.description} />
                        {( index === 0 || index === 1 ) && (
                            <div className="h-[2px] my-10 bg-gradient-to-r lg:my-0 lg:w-[2px] lg:h-auto lg:bg-gradient-to-b from-[#d7cea500] via-[#d7cea5] to-[#d7cea500]"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>    
    </>
  )
}

export default PracticeProject

const Card = ({ icon, heading, text }) => {
    return (
        <div className="px-2">
            <img className='h-[4rem] w-[4rem] md:h-[4.5rem] md:w-[4.5rem]' src={icon} alt="" />
            <h1 className="mt-5 text-3xl md:text-4xl header font-extrabold text-[#EDF1E4]">{heading}</h1>
            <p className="mt-5 md:mt-8 leading-7 md:leading-10 text-sm md:text-base text-[#D7CEA5] lg:max-w-[500px]">
                {text}
            </p>
        </div>
    );
};