import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Community from './components/Community/Community';
import Brand from './components/Brand/Brand';
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <NavBar2/> */}
      <Brand/>
      <Courses/>
      <NewsLetter/>
      {/* <Community/> */}
      <Footer/>
    </div>
  );
}

export default App;
