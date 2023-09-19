import React, { useEffect, useRef } from 'react';
import './stylesTestimonials.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import CtaDonations from '../ctaDonations/CtaDonations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../appLoader/Loader';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import { actionGetDataAsync } from '../../../redux/actions/dataActions';


const Testimonials = ({ handleGoToDonations }) => {

    const { loading } = useSelector((store) => store.loading);
    const { data } = useSelector((store) => store.data);
    const dispatch = useDispatch();
    const fields = [
        "nombre",
        "texto",
        "name",
        `mainImage{
            asset->{
                _id,
                url
            }
        }
        `,
    ];

    useEffect(() => {
        dispatch(actionGetDataAsync("testimonios", fields));
    }, [dispatch]);


    const testimoniosRef = useRef(null);

    const handleGoLeft = () => {
        if (testimoniosRef.current) {
            const scrollAmount = -310;
            testimoniosRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleGoRight = () => {
        if (testimoniosRef.current) {
            const scrollAmount = 310;
            testimoniosRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const truncateText = (text, maxLength) => {
        return text.length <= maxLength ? text : text.substring(0, maxLength) + "...";
    };

    return (
        <>
            {loading ? (
                <>
                    <Loader />
                </>
            ) : (
                <div className='testimonials__background'>
                    <div>
                        <h3 className='testimonials__title'>Testimonios</h3>

                        <div className='testimonials__container'>
                            <div className="testimonials__container__Row">
                                <AiFillLeftCircle onClick={handleGoLeft} className="testimonials__container__RowLeft" />
                            </div>
                            <div className='testimonials__container__carousel' ref={testimoniosRef}>
                                {data && data[1]?.testimonios?.map((data, index) => (
                                    <section className="testimonialsCard" key={index}>
                                        <section className="testimonialsCard__gestion">
                                        </section>
                                        <section className="testimonialsCard__img">
                                            <figure>
                                                <img src={data.mainImage.asset.url} alt="" />
                                            </figure>
                                        </section>
                                        <div className='bg__div'></div>
                                        <div className='bg__divContent'></div>
                                        <section className="testimonialsCard__content">
                                            <span className="testimonialsCard__title">{data.nombre}</span>
                                            <RiDoubleQuotesL className='icon__quote' />
                                            <RiDoubleQuotesR className='icon__quote__right' />
                                            <p className="testimonialsCard__text"  >{truncateText(data.texto, 250)}</p>
                                        </section>
                                    </section>
                                ))}
                            </div>
                            <div class="col-1  d-flex aling-items-center">
                                <AiFillRightCircle onClick={handleGoRight} className="testimonials__container__RowLeft" />
                            </div>
                        </div>
                        <article className='testimonials__ctaDonations'>
                            <CtaDonations
                                onClick={handleGoToDonations}
                                label={'¿QUIERES DONAR?'}
                                width={'15rem'}
                                height={'3rem'}
                                borderRadius={'2rem'}
                            />
                        </article>
                        <article onClick={handleGoToDonations} className="testimonials__next" style={{ transform: 'rotate(180deg)' }}>
                            <BtnKnowMore style={{ transform: 'rotate(180deg)' }} />
                        </article>
                    </div>
                </div>
            )}
        </>
    );
};

export default Testimonials;
