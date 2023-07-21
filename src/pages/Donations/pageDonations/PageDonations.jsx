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

const PageDonations = () => {

  const [dataTransactionDetail, setDataTransactionDetail] = useState(null)

  return (
    <>
      <main className="container">
        <div className="div" style={{height:'100vh'}}>
        <BannerDonations/>
        </div>  
        <div className="div">
          <Donations />
        </div>
        <div className="div">
          <DonorProgress />
        </div>
        <div className="div">
          <DonationsIndicator />
        </div>
        <div className="div">
          <Testimonials />
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