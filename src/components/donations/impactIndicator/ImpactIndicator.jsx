import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './impactIndicator.scss';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import CtaDonations from '../ctaDonations/CtaDonations';
import client from '../../../sanity/client';

const ImpactIndicator = () => {

    const [allPostData, setAllPostData] = useState(null)
    useEffect(() => {
        client
            .fetch(
                `*[_type == "PersonasImpactadas"] {
        title,
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
    

    const chunkedData = [];
    for (let i = 0; i < allPostData?.length; i += 3) {
        chunkedData.push(allPostData?.slice(i, i + 3));
    }
    console.log(chunkedData)

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
                                        <img src={item.mainImage.asset.url} alt="" />
                                        <p>{item.title}</p>
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
