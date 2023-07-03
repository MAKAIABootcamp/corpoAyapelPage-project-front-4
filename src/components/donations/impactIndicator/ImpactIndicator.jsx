import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './impactIndicator.scss';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import CtaDonations from '../ctaDonations/CtaDonations';

const ImpactIndicator = () => {

    const carouselData = [
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
        {
            imageSrc: 'https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688247025/ayapel/hyomekkahqrukj8ylpj3.jpg',
            text: 'Texto para la primera imagen',
        },
    ];


    const chunkedData = [];
    for (let i = 0; i < carouselData.length; i += 3) {
        chunkedData.push(carouselData.slice(i, i + 3));
    }

    return (
        <div className='impactIndicator__background'>
            <main className='impactIndicator__main'>
                <div>
                    <h3 className='impactIndicador__title'>Con las donaciones recurrentes, creamos un impacto duradero.</h3>

                </div>
                <section style={{ maxWidth: '950px', maxHeight: '600px' }}>
                    <Carousel showThumbs={false}>
                        {chunkedData.map((group, index) => (
                            <div key={index} className='impactIndicator__carousel'>
                                {group.map((item, subIndex) => (
                                    <div key={subIndex} className="impactIndicator__circle__image">
                                        <img src={item.imageSrc} alt="" />
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </section>
                <article className='impactIndicator__ctaDonations'>
                    <CtaDonations
                        label={'QUIERO DONAR'}
                        width={'15rem'}
                        height={'3rem'}
                        borderRadius={'2rem'}
                    />
                </article>
                <article className="testimonials__next">
                    <BtnKnowMore />
                </article>

            </main>
        </div>
    )
}

export default ImpactIndicator;
