import React from 'react'
import Home from '../../pages/Home/Home';
import Ayapel from '../../pages/Ayapel/Ayapel';
import AwesomeSlider from "react-awesome-slider"
import { 
    Provider,
    Link,
    withNavigationContext,
    withNavigationHandlers
  } from "react-awesome-slider/dist/navigation";
import Donations from '../../pages/Donations/Donations';
  

const NavigationSlider = withNavigationHandlers(AwesomeSlider);
const NavegationSlider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: () => <Home/>
        },
        {
          slug: "page-two",
          className: "page-two",
          children: () => <Donations/>
        }
      ]}
    />
  )
}

export default NavegationSlider