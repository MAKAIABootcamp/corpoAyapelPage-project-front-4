import React, { useState } from 'react';
import './stylesBtnQuantityMoney.scss';

const BtnQuantityMoney = ({ amount, isSelected, onClick}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick(amount)
  };

  return (
    <div>
     <button
        className={`btn__quantity ${isSelected ? "active" : ""}`}
        onClick={handleClick}
      >
        <span className="gif-container">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a href="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688167470/ayapel/xhwaslf4c5sm8r6snozb.gif"></a>
        </span>
        <span className='btn_quantity__value'>$ { amount !== "Otro Valor" ? Number(amount).toLocaleString() : amount }</span>
      </button>
    </div>
  );
};

export default BtnQuantityMoney;
