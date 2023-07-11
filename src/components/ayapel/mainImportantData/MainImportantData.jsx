// import React from 'react'
// import { useEffect, useRef } from 'react';
// import { TweenMax, Cubic } from 'gsap';








// const MainImportantData = () => {

//     const cardSliderRef = useRef(null);

//     useEffect(() => {
//       const cards = Array.from(cardSliderRef.current.querySelectorAll('.slider-item'));

//       startAnim(cards);

//       function startAnim(array) {
//         if (array.length >= 4) {
//           TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: () => sortArray(array) });

//           TweenMax.fromTo(array[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

//           TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

//           TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut });
//         } else {
//           // Aquí puedes manejar el caso en el que haya menos de 4 elementos en el array
//           // Por ejemplo, puedes mostrar un mensaje de error
//           console.log('Sorry, carousel should contain more than 3 slides');
//         }
//       }

//       function sortArray(array) {
//         const delay = setTimeout(() => {
//           const firstElem = array.shift();
//           array.push(firstElem);
//           startAnim(array);
//         }, 3000);

//         return () => clearTimeout(delay);
//       }
//     }, []);

//   return (
//     // <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'500px', fontSize:'300%'}}>


//     // </div>
//     <>
//     <div id="card-slider" className="slider" ref={cardSliderRef}>

// <a name="about" id="about"></a>
// <div className="">

//   <div className="slide-content d-lg-block d-none col-lg-6">
//     <div className="slider-wrap">
//       <div id="card-slider" className="slider">
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/macrey.png" alt=""/>
//           </div>
//           <div className="animation-card_content ">
//             <h4 className="animation-card_content_title title-2  text-light">Volunteering</h4>
//             <p className="animation-card_content_description p-2  text-light">
//               Facilitator of group processes receiving and replicating training in humanist values
//             </p>
//             {/* <p className="animation-card_content_city"></p> */}
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/fami.jpeg" alt=""/>
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light">Being a Mom</h4>
//             <p className="animation-card_content_description p-2 text-light">I enjoy to spending time in family, mainly sharing with my son and being part of his growth has been wonderful</p>
//             {/* <p className="animation-card_content_city"></p> */}
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/knit.jpg" alt=""/>
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light"> Hobbies </h4>
//             <p className="animation-card_content_description p-2 text-light"> Love to knit, it allows me to connect with myself and develop my creativity</p>
//             {/* <p className="animation-card_content_city"></p> */}
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/mar.png" alt=""/>
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light"> I am... </h4>
//             <p className="animation-card_content_description p-2 text-light">  A dreamer woman,  I like to take over new challenges,  I also love to travel as well as I am always involved in everything </p>
//             {/* <p className="animation-card_content_city"></p> */}
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/dreamer.jpg" alt=""/>
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light"> My favorite phrase </h4>
//             <p className="animation-card_content_description p-2 text-light fst-italic"> <i className="fa-solid fa-quote-left"></i> <small> Everything that we vividly imagine, ardently desire, sincerely believe, and enthusiastically undertake will inevitably come to pass.</small> <i className="fa-solid fa-quote-right"></i> <small className="ps-2">  Paul Meyer </small></p>
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/learn.jpg" alt=""/>
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light">Committed to continuous learning</h4>
//             <p className="animation-card_content_description p-2 text-light"> I want to venture every day in the tech field and web development </p>
//             {/* <p className="animation-card_content_city"></p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//     </>
//   )
// }

// export default MainImportantData

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const MainImportantData = () => {
//   const cardSliderRef = useRef(null);

//   useEffect(() => {
//     const cards = Array.from(cardSliderRef.current.querySelectorAll('.slider-item'));
//     startAnim(cards);

//     function startAnim(array) {
//       if (array.length >= 4) {
//         gsap.fromTo(array[0], { duration: 0.5, x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: 'power2.inOut', onComplete: () => sortArray(array) });

//         gsap.fromTo(array[1], { duration: 0.5, x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: 'power2.inOut' });

//         gsap.to(array[2], { duration: 0.5, bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: 'power2.inOut' });

//         gsap.fromTo(array[3], { duration: 0.5, x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: 'power2.inOut' });
//       } else {
//         console.log('Sorry, carousel should contain more than 3 slides');
//       }
//     }

//     function sortArray(array) {
//       const delay = setTimeout(() => {
//         const firstElem = array.shift();
//         array.push(firstElem);
//         startAnim(array);
//       }, 3000);

//       return () => clearTimeout(delay);
//     }
//   }, []);

//   return (
//     <div className="slider-wrap">
//       <div className="slider" ref={cardSliderRef}>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/macrey.png" alt="" />
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2  text-light">Volunteering</h4>
//             <p className="animation-card_content_description p-2  text-light">
//               Facilitator of group processes receiving and replicating training in humanist values
//             </p>
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/fami.jpeg" alt="" />
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light">Being a Mom</h4>
//             <p className="animation-card_content_description p-2 text-light">
//               I enjoy spending time with my family, mainly sharing with my son and being part of his growth has been wonderful
//             </p>
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/knit.jpg" alt="" />
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light">Hobbies</h4>
//             <p className="animation-card_content_description p-2 text-light">
//               Love to knit, it allows me to connect with myself and develop my creativity
//             </p>
//           </div>
//         </div>
//         <div className="slider-item">
//           <div className="animation-card_image">
//             <img src="images/mar.png" alt="" />
//           </div>
//           <div className="animation-card_content">
//             <h4 className="animation-card_content_title title-2 text-light">I am...</h4>
//             <p className="animation-card_content_description p-2 text-light">
//               A dreamer woman, I like to take on new challenges, I also love to travel and be involved in everything
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainImportantData;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);



gsap.defaults({ ease: 'none' });

const AnimationComponent = () => {
  useEffect(() => {
    const pulses = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: 'center',
        ease: 'elastic(2.5, 1)',
      },
    }).to('.ball02, .text01', {}, 0.2)
      .to('.ball03, .text02', {}, 0.33)
      .to('.ball04, .text03', {}, 0.46)
      .to('.ball05, .text04', {}, 0.56)
      .to('.ball06, .text05', {}, 0.76);

    const main = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '#svg',
        scrub: true,
        start: 'top center',
        end: 'bottom center',
      },
    }).to('.ball01', { duration: 0.01, autoAlpha: 1 })
      .from('.theLine', { drawSVG: 0 }, 0)
      .to('.ball01', {
        motionPath: {
          path: '.theLine',
          align: '.theLine',
          alignOrigin: [0.5, 0.5],
        },
      }, 0)
      .add(pulses, 0);

    return () => {
      // Clean up animation on component unmount
      main.kill();
      pulses.kill();
      gsap.set('.ball, .text', { clearProps: 'all' });
    };
  }, []);

  return (
    <div>
    <h1 className="header-section">Datos importantes de Ayapel</h1>
  
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
      <path className="line01 line" d="M 10 200  600 200" />
      <path className="line02 line" d="M 10 400  600 400" />
      <path className="line03 line" d="M 10 600  600 600" />
      <path className="line04 line" d="M 10 800  600 800" />
      <path className="line05 line" d="M 10 1000  600 1000" />
      <path className="line06 line" d="M 10 1200  600 1200" />
      <text className="text01" x="30" y="0">
        <tspan x="160" dy="5.5em" width="100" style={{ fontSize: '.5rem', width:'150px' }}>Se encuentra ubicado en el</tspan>
        <tspan x="170" dy="1em" width="100" style={{ fontSize: '.8rem', width:'150px' }}>Departamento de Córdoba, Colombia.</tspan>
      </text>
      <text className="text01" x="30" y="190">
        <tspan x="160" dy="9.5em" width="100" style={{ fontSize: '.5rem', width:'150px' }}>Evita las inundaciones al soportar la creciente de los ríos</tspan>
        <tspan x="150" dy="1em" width="100" style={{ fontSize: '.6rem', width:'150px' }}>y es el lugar que eligen 62 especies de aves para migrar</tspan>
      </text>
      <text className="text02" x="30" y="390">
        200.000
        <tspan x="160" dy="5.5em" width="100" style={{ fontSize: '.5rem', width:'150px' }}>Tiene una extensión de 200 mil hectáreas, de las cuales </tspan>
        <tspan x="170" dy="1em" width="100" style={{ fontSize: '.8rem', width:'150px' }}>140 mil pertenecen al complejo cenagoso..</tspan>
      </text>
      <text className="text03" x="30" y="590">
        2005
        <tspan x="230" dy="1em" width="100" style={{ fontSize: '.4rem', width:'150px' }}>En 2005, la pobreza medida por el NBI era del 61,55%.  </tspan>
      </text>
      <text className="text04" x="30" y="790">
        2018
        <tspan x="210" dy="1em" width="100" style={{ fontSize: '.5rem', width:'150px' }}>Es el segundo humedal más importante en el país y en  </tspan>
        <tspan x="210" dy="1em" width="100" style={{ fontSize: '.4rem', width:'150px' }}>2018 fue designado como territorio RAMSAR, la mayor protección en el mundo para un humedal,</tspan>
        <tspan x="210" dy="1em" width="100" style={{ fontSize: '.4rem', width:'150px' }}>lo que le permitió encaminar acciones hacia la gestión y conservación del ecosistema.</tspan>
      </text>
      <text className="text05" x="50" y="960">
        <tspan x="80" dy="2em" width="100" style={{ fontSize: '.4rem', width:'150px' }}>Históricamente, la agricultura ha sido </tspan>
        <tspan x="80" dy="1em" width="100" style={{ fontSize: '.4rem', width:'150px' }}>su actividad principal, seguida </tspan>
        <tspan x="80" dy="1em" width="100" style={{ fontSize: '.4rem', width:'150px' }}>de la pesca y la minería.</tspan>
      </text>
      <text className="text06" x="50" y="1130">
        <tspan x="40" dy=".5em" width="100" style={{ fontSize: '.8rem', width:'150px' }}>En las últimas décadas el municipio ha sido afectado  </tspan>
        <tspan x="40" dy="1em" width="100" style={{ fontSize: '.8rem', width:'150px' }}> por la minería ilegal la proliferación de cultivos </tspan>
        <tspan x="40" dy="1em" width="100" style={{ fontSize: '.8rem', width:'150px' }}> ilícitos, el desempleo y una inundación causada por </tspan>
        <tspan x="40" dy="1em" width="100" style={{ fontSize: '.8rem', width:'150px' }}> el desbordamiento del río Cauca.</tspan>
      </text>
  
  
      <path
        className="theLine"
        d="M -5,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
        fill="none"
        stroke="transparent"
        strokeWidth="10px"
      />
  
      <circle className="ball ball01" r="20" cx="50" cy="100" />
      <circle className="ball ball02" r="20" cx="278" cy="201" />
      <circle className="ball ball03" r="20" cx="327" cy="401" />
      <circle className="ball ball04" r="20" cx="203" cy="601" />
      <circle className="ball ball05" r="20" cx="125" cy="790" />
      <circle className="ball ball06" r="20" cx="303" cy="990" />
    </svg>
  </div>
  
  );
};

export default AnimationComponent;
