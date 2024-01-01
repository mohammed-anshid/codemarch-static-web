import React from 'react';
import ProfileTage from '../components/Profiles/Profile/ProfileTage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import DashBoard from '../components/Dashboard/DashBoard'


const Dashboard = () => {

  return (
    <>
        <NavBar/>
        <ProfileTage/>
        <DashBoard/>
        <Footer/>
    </>
  )
}

export default Dashboard