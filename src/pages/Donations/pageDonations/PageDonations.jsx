import React, { useEffect, useState } from 'react'
import Donations from '../Donations'
import './pageDonations.scss';
import Testimonials from '../../../components/donations/testimonials/Testimonials';
import DonorProgress from '../../../components/donations/donorProgress/DonorProgress';
import ImpactIndicator from '../../../components/donations/impactIndicator/ImpactIndicator';
import SocialMediaButton from '../../../components/SocialMediaButton/SocialMediaButton';
import DonationsIndicator from '../../../components/donations/donationsIndicator/DonationsIndicator';
import "../../FullPage/FullPage.scss";
import { Helmet } from 'react-helmet';
import BannerDonations from '../bannerDonations/BannerDonations';
import { useRef } from 'react';

const PageDonations = () => {
  const donationsRef = useRef(null);
  const donorProgressRef = useRef(null);
  const donationIndicatorRef = useRef(null);
  const testimonialsRef = useRef(null);

  const [dataTransactionDetail, setDataTransactionDetail] = useState(null)

  
  const handleGoToDonations = () => {
    donationsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToDonorProgress = () => {
    donorProgressRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  const handleGoToDonationIndicator = () => {
    donationIndicatorRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToTestimonials = () => {
    testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="container__mainDonations">
        <div className="div" style={{height:'100vh'}}>
        <BannerDonations handleGoToDonations={handleGoToDonations}/>
        </div>   
         <div className="div" ref={donationsRef} >
          <Donations handleGoToDonorProgress={handleGoToDonorProgress}/>
        </div> 
         <div className="div" ref={donorProgressRef}>
          <DonorProgress handleGoToDonations={handleGoToDonations} handleGoToDonationIndicator={handleGoToDonationIndicator}/>
        </div>
        <div className="div" ref={donationIndicatorRef}>
          <DonationsIndicator handleGoToDonations={handleGoToDonations} handleGoToTestimonials={handleGoToTestimonials}/>
        </div>
        <div className="div" ref={testimonialsRef}>
          <Testimonials handleGoToDonations={handleGoToDonations}/>
        </div>
        <Helmet>
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/40152509.js"
          ></script>
        </Helmet> 
      </main>
    </>
  )
}

export default PageDonations