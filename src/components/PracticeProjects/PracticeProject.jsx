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
        <div className="flex flex-col mt-[7.5rem] gap-3 lg:flex-row ">
            {
                codecamp?.map((item, index) => (
                    <Fragment key={index}>
                        <Card img={icons[index]} heading={item.title} text={item.description} />
                        {(index === 0 || index === 1) && (
                            <div className="h-[2px] my-10 bg-gradient-to-r lg:my-0 lg:w-[2px] lg:h-auto lg:bg-gradient-to-b from-[#d7cea500] via-[#d7cea5] to-[#d7cea500]"></div>
                        )}
                    </Fragment>
                ))
            }
        </div>
    </>
  )
}

export default PracticeProject

const Card = ({ img, heading, text }) => {
    return (
        <div className="px-2">
            <img src={img} className='w-' alt="" />
            <h1 className="mt-6 text-4xl text-font font-bold text-[#EDF1E4]">
                {heading}
            </h1>
            <p className="mt-5 font-dm-sans text-lg text-[#D7CEA5]">{text}</p>
        </div>
    );
};