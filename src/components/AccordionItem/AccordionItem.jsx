import React, { useState } from 'react';
import './AccordionItem.css';
import {motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { contentDetails } from '../../redux/contentSlice';

import { HiOutlineChevronDown } from 'react-icons/hi';

export const AccordionItem = ({ data,toggleSidebar }) => {
  console.log(data,'0000')
  
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleContent = (content) => {
    console.log(content, 'each day task')
    dispatch(contentDetails(content));
    if(window.innerWidth <= 768){
      toggleSidebar();
    }
  }

  console.log(data)
  return (
    <>
      <div className="accordion-bg mt-4 p-5 rounded-md flex justify-between items-center border border-[#3D8361]">
        <div className='block'>
          <div onClick={() => setShow(!show)} className="flex justify-between text-[#EDF1E4] items-center cursor-pointer">
            <h1 className="text-2xl font-semibold">{data?.module}</h1>
          </div>
          <div className="overview-icons mt-4 flex gap-2 text-[#3D8361]">
            <div className='flex gap-2 items-center font-semibold'>
              <span>
                <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.06356 20L0 16.3953V0L9.06356 3.60465V20Z" fill="#3D8361"/>
                  <path d="M10.165 20L19.2286 16.3954V7.62939e-06L10.165 3.60466V20Z" fill="#3D8361"/>
                  <path d="M12.4365 20L18.5401 19.3023V17.8605L12.4365 20Z" fill="#3D8361"/>
                  <path d="M6.58553 20L0.688477 19.3023V17.8605L6.58553 20Z" fill="#3D8361"/>
                </svg>
              </span>
              <span>10</span>
            </div>
            <span className="dots">•</span>
            <div className='flex gap-2 items-center font-semibold'>
              <span>
                <svg width="17" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3144 8.4368V2.8195H10.9525V0H5.59048V2.8195H0.228516V8.4368H2.91986V14.0541H0.228516V19.6714H5.59048V16.8519H10.9525V19.6714H16.3144V14.0541H19.0058V8.4368H16.3144Z" fill="#3D8361"/>
                </svg>
              </span>
              <span>10</span>
            </div>
            <span className="dots">•</span>
            <div className='flex gap-2 items-center font-semibold'>
              <span>
                <svg width="14" height="19" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.02265 13.0218H5.38951C5.41153 12.3392 5.64273 11.6897 6.08311 11.0732C6.54551 10.4346 7.07396 9.81807 7.66848 9.22356C8.28501 8.62904 8.83548 8.04554 9.3199 7.47305C9.80432 6.87853 10.0685 6.27301 10.1126 5.65648C10.1566 5.06196 9.99148 4.56653 9.61716 4.17019C9.26486 3.77385 8.70337 3.57568 7.93271 3.57568C7.29415 3.57568 6.79873 3.69678 6.44642 3.93899C6.11614 4.1812 5.88494 4.48947 5.75282 4.86379C5.62071 5.2161 5.54364 5.57941 5.52162 5.95373C5.4996 6.30604 5.48859 6.58128 5.48859 6.77945H1.75637C1.58022 6.05282 1.54719 5.30417 1.65729 4.53351C1.7894 3.76284 2.08666 3.04722 2.54906 2.38665C3.01146 1.70406 3.66102 1.15359 4.49774 0.735226C5.33446 0.316865 6.39137 0.107684 7.66848 0.107684C8.90154 0.107684 10.0025 0.316865 10.9713 0.735226C11.9402 1.15359 12.6998 1.73709 13.2503 2.48574C13.8228 3.23438 14.109 4.10414 14.109 5.09499C14.109 5.9097 13.9329 6.62531 13.5806 7.24185C13.2503 7.83636 12.8319 8.37582 12.3255 8.86024C11.8191 9.34466 11.3126 9.80706 10.8062 10.2474C10.2997 10.6658 9.87038 11.1062 9.51807 11.5686C9.18779 12.009 9.02265 12.4934 9.02265 13.0218ZM7.17305 19.2973C6.27027 19.2973 5.65374 19.0771 5.32345 18.6367C5.01519 18.1743 4.86105 17.6348 4.86105 17.0183C4.86105 16.4018 5.01519 15.8733 5.32345 15.4329C5.65374 14.9925 6.27027 14.7723 7.17305 14.7723C8.05381 14.7723 8.64832 14.9925 8.95659 15.4329C9.26486 15.8733 9.41899 16.4018 9.41899 17.0183C9.41899 17.6789 9.26486 18.2293 8.95659 18.6697C8.64832 19.0881 8.05381 19.2973 7.17305 19.2973Z" fill="#3D8361"/>
                </svg>
              </span>
              <span>10</span>
            </div>
            <span className="dots">•</span>
            <div className='flex gap-2 items-center font-semibold'>
              <span>
                <svg width="20" height="18" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.53855 8.09091L2.72037 6.18182L6.53855 4.27273V0.454551L0.811279 4.27273V8.09091L6.53855 11.9091V8.09091Z" fill="#3D8361"/>
                  <path d="M10.3567 4.27273L14.1749 6.18182L10.3567 8.09091V11.9091L16.084 8.09091V4.27273L10.3567 0.454548V4.27273Z" fill="#3D8361"/>
                </svg>
              </span>
              <span>10</span>
            </div>
          </div>
        </div>
        <HiOutlineChevronDown
          onClick={() => setShow(!show)} 
          className={`text-2xl font-thin transition-all duration-500 text-[#EDF1E4] cursor-pointer ${
            show ? "rotate-180" : ""
          }`}
        ></HiOutlineChevronDown>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            
            <div className="text-left text-sm mt-1 w-full p-3 space-y-5 mx-auto text-gray-200 font-bold ">
              
              {
                data?.contents?.map((content,index)=> {
                  console.log(content,'-p----')
                  
                  return (
                    <div className="flex justify-between">
                      <div className="flex self-center gap-3">
                        <div className="flex gap-2 item-center justify-normal self-center ">
                          <input type="checkbox" id="some_id" className="
                            checkbox relative peer shrink-0
                            appearance-none w-5 h-5 border border-[#3D8361] rounded-[4px]
                            mt-1 checked:border-1 focus:outline-none focus:ring-offset-0  
                            disabled:border-steel-400 disabled:bg-steel-400
                            "
                          />
                          <svg
                            className="
                              absolute 
                              w-4 h-4 mt-[5px] mx-[2px]
                              hidden peer-checked:block
                              pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#002B23"
                            stroke-width="4"
                            stroke-linecap=""
                            stroke-linejoin=""
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p onClick={()=>handleContent(content)} className="cursor-pointer font-sans font-medium text-md self-center">{content?.title}</p>
                      </div>
                      <div className='self-center'>
                        <span>
                          <svg width="18" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.06356 20L0 16.3953V0L9.06356 3.60465V20Z" fill="#3D8361"/>
                            <path d="M10.165 20L19.2286 16.3954V7.62939e-06L10.165 3.60466V20Z" fill="#3D8361"/>
                            <path d="M12.4365 20L18.5401 19.3023V17.8605L12.4365 20Z" fill="#3D8361"/>
                            <path d="M6.58553 20L0.688477 19.3023V17.8605L6.58553 20Z" fill="#3D8361"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  )
                })
                
              } 
              
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
