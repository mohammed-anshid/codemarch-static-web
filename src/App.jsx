import React,{ lazy, Suspense } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';

const NavBar = lazy(()=> import('./components/NavBar/NavBar'));
const Footer = lazy(()=> import('./components/Footer/Footer'));
const Courses = lazy(()=> import('./components/Courses/Courses'));
const NewsLetter = lazy(()=> import('./components/NewsLetter/NewsLetter'));
const Community = lazy(()=> import('./components/Community/Community'));
const Brand = lazy(()=> import('./components/Brand/Brand'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <NavBar/>
        <Brand/>
        <Courses/>
        <NewsLetter/>
        <Community/>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
