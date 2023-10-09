import React, { useEffect } from "react";
import Button from "../../assets/images/subscribe-button.svg";
import reportImg from "../../assets/images/letter-img.svg";
import ScrollReveal from 'scrollreveal';

function NewsLetter() {
  useEffect(() => {
    // Initialize ScrollReveal with your desired configuration
    ScrollReveal().reveal('.container', {
      delay: 100,
      distance: '11px',
      duration: 1000,
      easing: 'ease-in',
      origin: 'top',
    });

    // Clean up ScrollReveal when the component unmounts
    return () => {
      ScrollReveal().destroy();
    };
  }, []);
  
  return (
    <div class="container px-[1.5rem] md:px-[4rem] lg:px-[8.5rem] mx-auto pt-10 md:pt-28">
      <div class="w-full rounded-[16px] bg-gradient-to-t from-[#3d8361] to-[#D6CCA4] p-[1.5px]">
        <div class="backGround flex h-full w-full rounded-[16px] items-center justify-center  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#205340] via-[#174233]  to-[#002b23]">
          <div className="NewsLetter">
            <div className="textContent lg:mt-14 mt-6 text-center lg:mx-[8rem]">
              <h1 class="head text-3xl md:text-5xl lg:text-[4rem] mx-2 text-secondaryHover">
                Unleash Your Developer Superpowers
              </h1>
              <p className="mx-4 md:mx-5 lg:mx-14 mt-4 md:mt-5 lg:mt-9 text-secondaryText font-normal leading-9 text-bold text-[11px] lg:text-[16.6px] ">
                Dive into captivating stories, uncover industry trends, and push
                the boundaries of your coding prowess.
                Join us now to unlock coding mastery and be amazed, inspired,
                and transformed!
              </p>
              <button className="mt-5 md:mt-9">
                <a href="https://the-dev-chronicle.beehiiv.com/">
                  <img className="h-9 md:h-12 lg:h-14" src={Button} alt="Button"/>
                </a>
              </button>
            </div>
            <div className="newsImg lg:mx-31 mt-7">
              <img className="lg:h-[540px] mx-auto" src={reportImg} alt="NewsLetter"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
