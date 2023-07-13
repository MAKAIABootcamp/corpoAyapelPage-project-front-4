import React, { useEffect, useRef, useState } from 'react';
import './donationsIndicator.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
//import { Parallax, Pagination, Navigation } from 'swiper/modules';
import GraficIndcator from './graficIndicator/GraficIndcator';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import CtaDonations from '../ctaDonations/CtaDonations';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';

const Counter = ({ stopValue }) => {
    const [count, setCount] = useState(0);
    // const stopValue = 100;

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === stopValue) {
                    clearInterval(interval);
                    return prevCount;
                }
                return prevCount + 1;
            });
        }, 60);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div className="donationsIndicator__counter">{count}</div>;
};

const DonationsIndicator = () => {
    return (
        <>
            <div className='donationsIndicator__background'>
                {/* <GraficIndcator/> */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='donationsIndicator__container'>
                            <h3>Gestión ambiental</h3>
                            <div className='donationsIndicator__containerCarousel'>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689261449/ayapel/cpefakxd4vij3uszdoc5.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        <Counter stopValue={55} />
                                        <p>Toneladas de pet reciclado y despachadas</p>
                                    </div>
                                </article>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689262165/ayapel/cahspl3bzooveov01bhy.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        <Counter stopValue={300} />
                                        <p>Árboles nativos listos para la venta</p>
                                    </div>
                                </article>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689262473/ayapel/q2jyhgkduclgyrqcyv72.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        <Counter stopValue={25} />
                                        <p>Charlas ambientales realizadas</p>
                                    </div>
                                </article>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='donationsIndicator__container'>
                            <h3>Gestión social</h3>
                            <div className='donationsIndicator__containerCarousel'>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        <Counter stopValue={240} />
                                        <p>Familias fortalecidas con buenos hábitos educativos y nutricionales</p>
                                    </div>
                                </article>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689261448/ayapel/oczq1l3syf3bbj8ja09e.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        <Counter stopValue={220} />
                                        <p>Niños participantes en educación y recreación</p>
                                    </div>
                                </article>
                            
                            </div>
                        </div>

                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className='donationsIndicator__container'>
                            <h3>Gestión económica</h3>
                            <div className='donationsIndicator__containerCarousel'>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        
                                        <p> <Counter stopValue={60} /> Millones en Recursos movilizados para la población de artesanos y emprendedores</p>
                                    </div>
                                </article>
                                <article style={{ position: 'relative' }}>

                                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', backgroundSize:'cover', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689261448/ayapel/uoxfx3okdmbgnm6yqdya.jpg')" }}>
                                    </div>
                                    <div className='donationsIndicator__content'>
                                        <Counter stopValue={55} />
                                        <p>Artículos intercambiados por pet</p>
                                    </div>
                                </article>
                            
                            </div>
                        </div>

                    </SwiperSlide>
               
                </Swiper>
                <div>
                <article className='donationsIndicator__ctaDonations'>
                    <CtaDonations
                        label={'¿QUIERES DONAR?'}
                        width={'15rem'}
                        height={'3rem'}
                        borderRadius={'2rem'}
                    />
                </article>
                <article className="donationsIndicator__next">
                    <BtnKnowMore />
                </article>
                </div>
                   
               
                
               
            </div>
        </>
    )
}

export default DonationsIndicator