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
import client from '../../../sanity/client';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingStatusFalse } from '../../../redux/actions/actions';
import Loader from '../../appLoader/Loader';

const Counter = ({ stopValue }) => {

    const [count, setCount] = useState(0);
    const lastTwoDigits = stopValue % 100;

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === lastTwoDigits) {
                    clearInterval(interval);
                    return prevCount;
                }
                return (prevCount + 1) % 100;
            });
        }, 60);

        return () => {
            clearInterval(interval);
        };
    }, [lastTwoDigits]);

    const fullValue = stopValue - lastTwoDigits + count;
    const formattedValue = formatWithCommas(fullValue);

    return (
        <div>
            <div className="donationsIndicator__counter">
                {formattedValue}
            </div>
        </div>
    );
};


function formatWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


const DonationsIndicator = ({ handleGoToDonations, handleGoToTestimonials }) => {

    const { loading } = useSelector((store) => store.loading);
    const dispatch = useDispatch();

    const [allPostData, setAllPostData] = useState(null)
    useEffect(() => {
        dispatch(setLoadingStatusFalse());
        client
            .fetch(
                `*[_type == "ImpactIndicator"] {
                  getionSocial[]{
                      mainImage{
                          asset->{
                              _id,
                              url
                            }
                        },
                        text,
                        indicator
                        
                    },
                    gestionEconomica[]{
                        mainImage{
                            asset->{
                                _id,
                                url
                            }
                        },
                        text,
                        indicator
                        
                    },
                    gestionAmbiental[]{
                        mainImage{
                            asset->{
                                _id,
                                url
                            }
                        },
                        text,
                        indicator
                        
                    }
                }`
            )
            .then((data) => {
                setAllPostData(data);
                dispatch(setLoadingStatusFalse());
            })
            .catch(console.error);
    }, [])


    // Añadir un estado para controlar si el componente ha sido montado
    const [componentMounted, setComponentMounted] = useState(false);

    // Utilizamos un useEffect para marcar el componente como montado una vez que se monta
    useEffect(() => {
        setComponentMounted(true);
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <Loader />
                </>
            ) : (
                <div className='donationsIndicator__background'>
                    {/* <GraficIndcator/> */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
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
                                <h3 style={{ color: "#fff" }}>¿Qué hemos logrado?</h3>
                                <h2>Gestión ambiental</h2>
                                <div className='donationsIndicator__containerCarousel'>
                                    {allPostData && allPostData?.[0].gestionAmbiental.map((data, index) => (
                                        <article index={index} style={{ position: 'relative' }}>

                                            <div className="donationsIndicator__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.mainImage.asset.url}')` }}>
                                            </div>
                                            <div className='donationsIndicator__content' >
                                                <Counter stopValue={Number(data.indicator)} />
                                                <p>{data.text}</p>
                                            </div>
                                        </article>
                                    ))}

                                </div>
                            </div>
                            <CtaDonations
                                onClick={handleGoToDonations}
                                label={'¿QUIERES DONAR?'}
                                width={'15rem'}
                                height={'3rem'}
                                borderRadius={'2rem'}
                            />
                            <article className="donationsIndicator__next" onClick={handleGoToTestimonials}>
                                <BtnKnowMore onClick={handleGoToTestimonials} />
                            </article>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='donationsIndicator__container'>
                                <h3 style={{ color: "#fff" }}>¿Qué hemos logrado?</h3>
                                <h2>Gestión social</h2>
                                <div className='donationsIndicator__containerCarousel'>
                                    {allPostData && allPostData?.[0].getionSocial.map((data, index) => (
                                        <article index={index} style={{ position: 'relative' }}>

                                            <div className="donationsIndicator__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.mainImage.asset.url}')` }}>
                                            </div>
                                            <div className='donationsIndicator__content' >
                                                <Counter stopValue={Number(data.indicator)} />
                                                <p>{data.text}</p>
                                            </div>
                                        </article>
                                    ))}

                                </div>
                            </div>
                            <CtaDonations
                                onClick={handleGoToDonations}
                                label={'¿QUIERES DONAR?'}
                                width={'15rem'}
                                height={'3rem'}
                                borderRadius={'2rem'}
                            />
                            <article className="donationsIndicator__next" onClick={handleGoToTestimonials}>
                                <BtnKnowMore onClick={handleGoToTestimonials} />
                            </article>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='donationsIndicator__container'>
                                <h3 style={{ color: "#fff" }}>¿Qué hemos logrado?</h3>
                                <h2>Gestión económica</h2>
                                <div className='donationsIndicator__containerCarousel'>
                                    {allPostData && allPostData?.[0].gestionEconomica.map((data, index) => (
                                        <article index={index} style={{ position: 'relative' }}>

                                            <div className="donationsIndicator__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.mainImage.asset.url}')` }}>
                                            </div>
                                            <div className='donationsIndicator__content' >
                                                <Counter stopValue={Number(data.indicator)} />
                                                <p>{data.text}</p>
                                            </div>
                                        </article>
                                    ))}

                                </div>
                            </div>

                            <CtaDonations
                                onClick={handleGoToDonations}
                                label={'¿QUIERES DONAR?'}
                                width={'15rem'}
                                height={'3rem'}
                                borderRadius={'2rem'}
                            />
                            <article className="donationsIndicator__next" onClick={handleGoToTestimonials}>
                                <BtnKnowMore onClick={handleGoToTestimonials} />
                            </article>
                        </SwiperSlide>

                    </Swiper>

                </div>
            )}
        </>
    )
}


export default DonationsIndicator