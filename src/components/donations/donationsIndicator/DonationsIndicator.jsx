import React, { useEffect, useState } from 'react';
import './donationsIndicator.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import CtaDonations from '../ctaDonations/CtaDonations';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../appLoader/Loader';
import { actionGetDataAsync } from '../../../redux/actions/dataActions';


const DonationsIndicator = ({ handleGoToDonations, handleGoToTestimonials }) => {

    const { loading } = useSelector((store) => store.loading);
    const { data } = useSelector((store) => store.data);
    const dispatch = useDispatch();

    const fields = [
        'getionSocial[]{ text, indicator, mainImage{ asset->{ _id, url } } }',
        'gestionEconomica[]{ text, indicator, mainImage{ asset->{ _id, url } } }',
        'gestionAmbiental[]{ text, indicator, mainImage{ asset->{ _id, url } } }',
    ];


    useEffect(() => {
        dispatch(actionGetDataAsync("ImpactIndicator", fields));
    }, [dispatch]);

    const [componentMounted, setComponentMounted] = useState(false);

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
                                    {data[2] && data[2].ImpactIndicator?.[0].gestionAmbiental.map((data, index) => (
                                        <article index={index} style={{ position: 'relative' }} key={index}>

                                            <div className="donationsIndicator__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.mainImage.asset.url}')` }}>
                                            </div>
                                            <div className='donationsIndicator__content' >
                                                <div>
                                                    <div className="donationsIndicator__counter">
                                                        {Number(data.indicator)}
                                                    </div>
                                                </div>
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
                                    {data[2] && data[2].ImpactIndicator?.[0].getionSocial.map((data, index) => (
                                        <article index={index} style={{ position: 'relative' }} key={index}>

                                            <div className="donationsIndicator__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.mainImage.asset.url}')` }}>
                                            </div>
                                            <div className='donationsIndicator__content' >
                                                <div>
                                                    <div className="donationsIndicator__counter">
                                                        {Number(data.indicator)}
                                                    </div>
                                                </div>
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
                                    {data[2] && data[2].ImpactIndicator?.[0].gestionEconomica.map((data, index) => (
                                        <article index={index} style={{ position: 'relative' }} key={index}>

                                            <div className="donationsIndicator__image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.mainImage.asset.url}')` }}>
                                            </div>
                                            <div className='donationsIndicator__content' >
                                                <div>
                                                    <div className="donationsIndicator__counter">
                                                        {Number(data.indicator)}
                                                    </div>
                                                </div>
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