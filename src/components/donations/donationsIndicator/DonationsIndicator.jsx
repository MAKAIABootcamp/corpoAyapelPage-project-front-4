import React, { useEffect, useRef, useState } from 'react';
import './donationsIndicator.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import GraficIndcator from './graficIndicator/GraficIndcator';



const DonationsIndicator = () => {
    return (
        <div>
            <div className='donationsIndicator__background'>
                <GraficIndcator/>
               
            </div>
        </div>
    )
}

export default DonationsIndicator