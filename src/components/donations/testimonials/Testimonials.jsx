// import React from 'react'
// import './stylesTestimonials.scss'
// import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

// const Testimonials = () => {
//     return (
//         <div className='donations__background'>
//             <main className=''>
//                 <section className="mainCircleCard" >
//                     <section className="mainCircleCard__gestion">
//                     </section>
//                     <section className="mainCircleCard__img">
//                         <figure>
//                             <img src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?size=626&ext=jpg" alt="" />
//                         </figure>
//                     </section>
//                     <div className='bg__div'></div>
//                     <div className='bg__divContent'></div>
//                     <section className="mainCircleCard__content">
//                         <span className="mainCircleCard__title">Pepito Perez</span>

//                         <RiDoubleQuotesL className='icon__quote' />
//                         <RiDoubleQuotesR className='icon__quote__right' />
//                         <p className="mainCircleCard__text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
//                     </section>

//                 </section>
//             </main>
//         </div>
//     )
// }

// export default Testimonials

import React from 'react';
import './stylesTestimonials.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import CtaDonations from '../ctaDonations/CtaDonations';

const testimonios = [
    {
        nombre: 'Pepito Perez',
        imagen: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?size=626&ext=jpg',
        texto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    },
    {
        nombre: 'Pepito Perez',
        imagen: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?size=626&ext=jpg',
        texto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    },
    {
        nombre: 'Pepito Perez',
        imagen: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?size=626&ext=jpg',
        texto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    }
    // Agrega más testimonios aquí
];

const Testimonials = () => {
    return (
        <div className='donations__background'>
            <div>
                <h3 className='testimonials__title'>QUIENES NOS APOYAN</h3>

                <div className='testimonials__container'>

                    {testimonios.map((testimonio, index) => (
                        <section className="mainCircleCard" key={index}>
                            <section className="mainCircleCard__gestion">
                            </section>
                            <section className="mainCircleCard__img">
                                <figure>
                                    <img src={testimonio.imagen} alt="" />
                                </figure>
                            </section>
                            <div className='bg__div'></div>
                            <div className='bg__divContent'></div>
                            <section className="mainCircleCard__content">
                                <span className="mainCircleCard__title">{testimonio.nombre}</span>
                                <RiDoubleQuotesL className='icon__quote' />
                                <RiDoubleQuotesR className='icon__quote__right' />
                                <p className="mainCircleCard__text">{testimonio.texto}</p>
                            </section>
                        </section>
                    ))}
                </div>
                <article className='testimonials__ctaDonations'>
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
            </div>
        </div>
    );
};

export default Testimonials;
