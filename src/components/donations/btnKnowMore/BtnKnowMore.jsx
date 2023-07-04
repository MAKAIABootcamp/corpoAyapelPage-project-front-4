import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import './btnKnowMore.scss';

const BtnKnowMore = ({ onClick }) => {
  return (
    <>  
    <BsFillArrowDownCircleFill  onClick={onClick} style={{width:'50px'}} className='icon__arrow'/>
  
    </>
  )
}

export default BtnKnowMore