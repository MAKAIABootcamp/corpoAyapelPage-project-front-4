import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import './btnKnowMore.scss';

const BtnKnowMore = () => {
  return (
    <div className="btn-know-more">
      <BsFillArrowDownCircleFill className="icon__arrow" style={{ width: '50px' }} />
    </div>
  );
};

export default BtnKnowMore;
