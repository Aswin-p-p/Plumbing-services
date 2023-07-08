import React from 'react'
import Navbar from '../../navbar/Navbar'
import Page1 from '../../First/Page1'
import Content from '../../content/Content'
import Service from '../../content-2/Service'
import About from '../../about/About'
import SerTarget from '../../services/SerTarget'
import Profile from '../../profile/Profile'
import Footer from '../../footer/Footer'

function MainPage() {
  return (
    <>
    <div className=" row m-0 p-0">
      <div className="sticky-top ">
      <Navbar/>
   </div>
    <Page1/>
   <Service/> 
   <About/>
   <SerTarget/>
   <Profile/>
   <Footer/>
   

    
    </div>
    </>
  )
}

export default MainPage