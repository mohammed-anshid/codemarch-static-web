import React, { useRef } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Banner from '../components/CodeCamps/Banner';
import CodecampsList from '../components/CodecampsList/CodecampsList';
import Review from '../components/Review/review';
import Socials from '../components/Socials/Socials';
import { CodecampFeatures } from '../components/CodecampFeatures/CodecampFeatures';

const CodeCamp = () => {
  const productListComponentRef = useRef(null);

  const handleScrollToProductList = () => {
    if (productListComponentRef.current) {
      productListComponentRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <NavBar/>
      <Banner onSubmit={handleScrollToProductList}/>
      <CodecampFeatures/>
      <div ref={productListComponentRef}></div>
      <CodecampsList ref={productListComponentRef}/>
      <Socials/>
      {/* <Review/> */}
      <Footer/>
    </>
  )
}

export default CodeCamp