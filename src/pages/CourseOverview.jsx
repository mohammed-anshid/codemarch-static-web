import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Review from '../components/Review/review'
import Learn from '../components/Learn/Learn'
import PracticeProject from '../components/PracticeProjects/PracticeProject'
import AboutOverview from '../components/AboutOverview/AboutOverview'
import ProjectInThis from '../components/ProjectInThis/ProjectInThis'
import FAQ from '../components/FAQ/FAQ'

const CourseOverview = () => {
    const data =[ {heading:"What is JavaScript?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},  {heading:"What does JavaScript do?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},{heading:"What kind of Jobs can JavaScript get me?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},{heading:"Why is JavaScript so popular?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},{heading:"Are Java & JavaScript the same?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <NavBar/>
        <div className='w-[90%] xl:w-[80%]  mx-auto' >
            <Learn/> 
            <PracticeProject/>
            <AboutOverview/>
            {/* <ProjectInThis/> */}
        </div>
        <div className='' >
            {/* <Review/> */}
        </div>
        <div className='w-[80%]  mx-auto'>
            {/* <FAQ/> */}
        </div>
        <Footer/>
    </>
  )
}

export default CourseOverview