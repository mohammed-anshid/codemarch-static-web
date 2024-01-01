import React, { useState } from 'react'

const FAQAccordion = ({ heading }) => {
    const [openId, setOpenId] = useState();
  return (
    <div>
        <div className=" mt-8">
            <div>
                <div className="flex justify-between ">
                    <h3 className="font-dm-sans font-bold text-[#EDF1E4] text-[2rem]">
                        {heading?.heading}
                    </h3>
                    <img src="/downArrow.svg" alt="" onClick={setOpenId(heading?.heading)} />
                </div>
                {/* {openId === heading && (
                <p className="font-dm-sans font-normal text-[#D7CEA5] mt-3 text-2xl w-[95%]">
                    {text?.text}
                </p>
                )} */}
            </div>
        <div className="h-[1px]  bg-gradient-to-r from-[#d7cea500] via-[#d7cea5af] to-[#d7cea500] mt-8"></div>
        </div>
    </div>
  )
}

export default FAQAccordion