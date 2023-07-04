import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import AnimatedCursor from "react-animated-cursor"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <AnimatedCursor color='110, 190, 74' innerSize={30}/>
    </>
  )
}

export default Layout