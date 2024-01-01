import React, { useState } from 'react'

const FAQ = ({heading}) => {
    const data = [
        {
          heading: "What is JavaScript?",
          text: "JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence.",
        },
        {
          heading: "What does JavaScript do?",
          text: "JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence.",
        },
        {
          heading: "What kind of Jobs can JavaScript get me?",
          text: "JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence.",
        },
        {
          heading: "Why is JavaScript so popular?",
          text: "JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence.",
        },
        {
          heading: "Are Java & JavaScript the same?",
          text: "JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence.",
        },
    ];
  return (
    <>
        <div className="mt-24">
            <h1 className="text-5xl font-darker-grotesque text-center font-extrabold lg:text-[4rem] text-[#EDF1E4] ">
                Frequently Asked Questions
            </h1>
            <div className="mt-32">
                <FaqAccordian
                    heading="What is JavaScript?"
                    text="JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."
                    
                />
                <FaqAccordian
                    heading="What does JavaScript do?"
                    text="JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."
                    open={true}
                />
                <FaqAccordian
                    heading="What kind of Jobs can JavaScript get me?"
                    text="JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."
                />
                <FaqAccordian
                    heading="Why is JavaScript so popular?"
                    text="JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."
                />
                <FaqAccordian
                    heading="Are Java & JavaScript the same?"
                    text="JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."
                />
            </div>
        </div>
    </>
  )
}

export default FAQ

const FaqAccordian = ({ heading, text, open }) => {
    // const [openId, setOpenId] = useState();
    return (
        <div className=" mt-8">
            <div>
                <div className="flex justify-between ">
                    <h3 className="font-dm-sans font-bold text-[#EDF1E4] text-lg lg:text-[1.5rem]">
                        {heading}
                    </h3>
                    <div>
                        <img src="/downArrow.svg" alt="" />
                    </div>
                </div>
                {open && (
                    <p className="font-dm-sans font-normal text-[#D7CEA5] mt-8 text-sm lg:text-lg w-[95%]">
                        {text}
                    </p>
                )}
            </div>
            <div className="h-[1px]  bg-gradient-to-r from-[#d7cea500] via-[#d7cea5af] to-[#d7cea500] mt-8"></div>
        </div>
    );
};