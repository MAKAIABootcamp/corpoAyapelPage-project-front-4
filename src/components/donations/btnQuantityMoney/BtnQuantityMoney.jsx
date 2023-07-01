import React, { useState } from 'react';
import './stylesBtnQuantityMoney.scss';

const BtnQuantityMoney = ({amount}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={`btn__quantity ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <span className="gif-container">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a href="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688167470/ayapel/xhwaslf4c5sm8r6snozb.gif"></a>
        </span>
        <span className='btn_quantity__value'>$ {amount}</span>
      </button>
    </div>
  );
};

export default BtnQuantityMoney;
