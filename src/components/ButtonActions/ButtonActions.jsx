import React from 'react';
import './ButtonActions.scss';

const ButtonActions = ({label}) => {
  return (
    <>
    <button className='btn-action'>{label}</button>
    </>
  )
}

export default ButtonActions