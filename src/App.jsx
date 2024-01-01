import React,{ lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import MyAccount from './components/Profiles/Profile/MyAccount';
import MyModal from './components/Modal/MyModal';
import SignupModal from './components/Modal/SignupModal';
import CodeCamp from './pages/CodeCamp';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import CourseContent from './pages/CourseContent';
import CourseOverview from './pages/CourseOverview';

const NavBar = lazy(()=> import('./components/NavBar/NavBar'));
const Footer = lazy(()=> import('./components/Footer/Footer'));
const Courses = lazy(()=> import('./components/Courses/Courses'));
const NewsLetter = lazy(()=> import('./components/NewsLetter/NewsLetter'));
const Community = lazy(()=> import('./components/Community/Community'));
const Brand = lazy(()=> import('./components/Brand/Brand'));

function App() {

  return (
    <div className="App">
      <Routes>

        {/* <Route path='/dashboard/*' element={
          <Suspense fallback={<Loader />}>
            <Dashboard/>
          </Suspense>
        }/> */}

        <Route path='/codecamps' element={
          <Suspense fallback={<Loader />}>
            <CodeCamp/>
          </Suspense>
        }/>

        <Route path='/codecamp/:id' element={
          <Suspense fallback={<Loader />}>
            <CourseOverview/>
          </Suspense>
        }/>

        {/* <Route path='/content' element={
          <Suspense fallback={<Loader />}>
            <CourseContent/>
          </Suspense>
        }/>

        <Route path='/profile' element={
          <Suspense fallback={<Loader />}>
            <Account/>
          </Suspense>
        }/> */}
      
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <NavBar />
              {/* <MyAccount /> */}
              <Brand />
              <Courses />
              <NewsLetter />
              <Community />
              <Footer />
            </Suspense>
          }
        />
      </Routes>
  
    </div>
  );
}

export default App;
