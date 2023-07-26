import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import AnimatedCursor from "react-animated-cursor"
import SocialMediaButton from '../../components/SocialMediaButton/SocialMediaButton'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <AnimatedCursor color='110, 190, 74' innerSize={30} trailingSpeed={1}  outerStyle={{
    mixBlendMode: 'exclusion',  zIndex: 9999999999, 
  }}/>
      
      <div className="social-media-fixed">
        <SocialMediaButton />
      </div>

    </>
  )
}

export default Layout