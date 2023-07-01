import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import AnimatedCursor from "react-animated-cursor"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <AnimatedCursor color='255,255,255' innerSize={30}/>
    </>
  )
}

export default Layout