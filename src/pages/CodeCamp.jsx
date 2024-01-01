import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Banner from '../components/CodeCamps/Banner';
import CodecampsList from '../components/CodecampsList/CodecampsList';
import Review from '../components/Review/review';
import Socials from '../components/Socials/Socials';
import { CodecampFeatures } from '../components/CodecampFeatures/CodecampFeatures';

const CodeCamp = () => {
  return (
    <>
        <NavBar/>
        <Banner/>
        <CodecampFeatures/>
        <CodecampsList/>
        <Socials/>
        {/* <Review/> */}
        <Footer/>
    </>
  )
}

export default CodeCamp