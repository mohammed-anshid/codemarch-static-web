import React,{lazy} from 'react'
import MyAccount from '../components/Profiles/Profile/MyAccount';

const NavBar = lazy(()=> import('../components/NavBar/NavBar'));
const Footer = lazy(()=> import('../components/Footer/Footer'));

function profile() {
  return (
    <div>
        <NavBar/>
        <MyAccount/>
        <Footer/>
    </div>
  )
}

export default profile