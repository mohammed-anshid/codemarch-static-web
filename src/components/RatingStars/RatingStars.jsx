/* eslint-disable react/style-prop-object */
import React from 'react';
import './ratingStar.css';
// import { LiaStarSolid, LiaStar } from 'react-icons/lia';


const RatingStars = ({ ratingValue }) => {
  return (
    <>
        <div className="rating">
            <div className="flex items-center gap-1 ">
                {[1, 2, 3, 4, 5].map((index) => (
                    <span key={index}>{index <= ratingValue ? 
                        <svg width="30" height="22" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6022 0L19.1186 10.7234L30.5 10.6776L21.2467 17.2766L24.809 28L15.6019 21.3552L6.44097 28L9.95713 17.2766L0.75 10.6776L12.1314 10.7234L15.6022 0Z" fill="url(#paint0_linear_1849_255)"/>
                            <defs>
                                <linearGradient id="paint0_linear_1849_255" x1="15.625" y1="0" x2="15.625" y2="31.0866" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EDF1E4"/>
                                    <stop offset="1" stop-color="#D7CEA5"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    :   <svg width="30" height="23" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8522 0L18.3686 10.7234L29.75 10.6776L20.4967 17.2766L24.059 28L14.8519 21.3552L5.69097 28L9.20713 17.2766L0 10.6776L11.3814 10.7234L14.8522 0Z" fill="url(#paint0_linear_1849_258)"/>
                            <path d="M14.8553 1.6141L17.8935 10.8792L18.0069 11.2248L18.3706 11.2234L28.1789 11.1839L20.2064 16.8696L19.9058 17.0839L20.0222 17.4343L23.0966 26.6888L15.1445 20.9498L14.8512 20.7381L14.5583 20.9505L6.6471 26.6888L9.68224 17.4324L9.79652 17.0839L9.4984 16.8702L1.56468 11.1839L11.3794 11.2234L11.7446 11.2248L11.8571 10.8773L14.8553 1.6141Z" stroke="#EAEDDC" stroke-opacity="0.4"/>
                            <defs>
                                <linearGradient id="paint0_linear_1849_258" x1="14.875" y1="0" x2="14.875" y2="65.1" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#011F1A"/>
                                    <stop offset="1" stop-color="#013229"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    }
                    </span>
                ))}
            </div>
        </div>
    </>
  );
};

export default RatingStars;
