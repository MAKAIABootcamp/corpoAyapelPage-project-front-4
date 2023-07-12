import React, { useEffect, useRef, useState } from 'react';
import './stylesTestimonials.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import CtaDonations from '../ctaDonations/CtaDonations';
import client from '../../../sanity/client';


const Testimonials = () => {

    const [allPostData, setAllPostData] = useState(null)
    useEffect(() => {
        client
            .fetch(
                `*[_type == "testimonios"] {
          nombre,
          texto,
          name,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
            )
            .then((data) => setAllPostData(data))
            .catch(console.error)
    }, [])
    console.log(allPostData)

    // Paso 1: Crear una referencia para el contenedor de testimonios
    const testimoniosRef = useRef(null);

    const handleGoLeft = () => {
        if (testimoniosRef.current) {
            const scrollAmount = -310; // Aumentar la cantidad de desplazamiento a -300
            testimoniosRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleGoRight = () => {
        if (testimoniosRef.current) {
            const scrollAmount = 310; // Aumentar la cantidad de desplazamiento a 300
            testimoniosRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const truncateText = (text, maxLength) => {
        return text.length <= maxLength ? text : text.substring(0, maxLength) + "...";
    };


    return (
        <>

            <div className='testimonials__background'>
                <div>
                    <h3 className='testimonials__title'>¿Quiénes nos apoyan?</h3>

                    <div className='testimonials__container'>
                        <div className="testimonials__container__Row">
                            <AiFillLeftCircle onClick={handleGoLeft} className="testimonials__container__RowLeft" />
                        </div>
                        <div className='testimonials__container__carousel' ref={testimoniosRef}>


                            {allPostData && allPostData.map((data, index) => (
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
                            label={'¿QUIERES DONAR?'}
                            width={'15rem'}
                            height={'3rem'}
                            borderRadius={'2rem'}
                        />
                    </article>
                    <article className="testimonials__next">
                        <BtnKnowMore />
                    </article>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
