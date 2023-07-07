import React from 'react'
import './DonationButton.scss';
const DonationButton = ({bottom}) => {
  return (
    <section className={bottom ? "btn-bottom" : "mainHome__button"}>
    <figure>
      <img
        src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688695567/Soft_Blue_Navy_Playful_Cute_Pet_Shop_Logo___8_-removebg-preview_qsdq0h.png"
        alt=""
        className={bottom ? "app-logo" :"App-logo"}
      />
    </figure>
    <figure className="text-btn">
      <img
        src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688163689/Soft_Blue_Navy_Playful_Cute_Pet_Shop_Logo___4_-removebg-preview_sycznc.png"
        alt=""
        className={bottom ? "logo-text-2" :"logo-text"}
      />
    </figure>
  </section>
  )
}

export default DonationButton