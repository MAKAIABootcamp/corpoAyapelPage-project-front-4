// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import './bannerDonations.scss';

// gsap.registerPlugin(ScrollTrigger);

// function BannerDonations() {
//   const mainRef = useRef(null);
//   const scrollDistRef = useRef(null);
//   const arrowBtnRef = useRef(null);

//   useEffect(() => {
//     gsap.set(mainRef.current, {
//       position: 'fixed',
//       background: '#fff',
//       width: '100%',
//       maxWidth: '1200px',
//       height: '100%',
//       top: 0,
//       left: '50%',
//       x: '-50%',
//     });

//     gsap.set(scrollDistRef.current, {
//       width: '100%',
//       height: '200%',
//     });

//     gsap.fromTo(
//       '.sky',
//       { y: 0 },
//       {
//         y: -200,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       '.cloud1',
//       { y: 100 },
//       {
//         y: -800,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       '.cloud2',
//       { y: -150 },
//       {
//         y: -500,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       '.cloud3',
//       { y: -50 },
//       {
//         y: -650,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       '.mountBg',
//       { y: -10 },
//       {
//         y: -100,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       '.mountMg',
//       { y: -30 },
//       {
//         y: -250,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       '.mountFg',
//       { y: -50 },
//       {
//         y: -600,
//         scrollTrigger: {
//           trigger: scrollDistRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       }
//     );

//     arrowBtnRef.current.addEventListener('mouseenter', () => {
//       gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
//     });

//     arrowBtnRef.current.addEventListener('mouseleave', () => {
//       gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
//     });

//     arrowBtnRef.current.addEventListener('click', () => {
//       window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
//     });
//   }, []);

//   return (
//     <div className="scrollDist" ref={scrollDistRef}>
//       <div className="main" ref={mainRef}>
//         <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
//           <mask id="m">
//             <g className="cloud1">
//               <rect fill="#fff" width="100%" height="801" y="799" />
//               <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
//             </g>
//           </mask>

//           <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
//           <image
//             className="mountBg"
//             xlinkHref="https://assets.codepen.io/721952/mountBg.png"
//             width="1200"
//             height="800"
//           />
//           <image
//             className="mountMg"
//             xlinkHref="https://assets.codepen.io/721952/mountMg.png"
//             width="1200"
//             height="800"
//           />
//           <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800" />
//           <image
//             className="mountFg"
//             xlinkHref="https://assets.codepen.io/721952/mountFg.png"
//             width="1200"
//             height="800"
//           />
//           <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
//           <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />
//           <text fill="#fff" x="350" y="200">
//             EXPLORE
//           </text>
//           <polyline
//             className="arrow"
//             fill="#fff"
//             points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
//           />

//           <g mask="url(#m)">
//             <rect fill="#fff" width="100%" height="100%" />
//             <text x="350" y="200" fill="#162a43">
//               FURTHER
//             </text>
//           </g>

//           <rect
//             id="arrowBtn"
//             width="100"
//             height="100"
//             opacity="0"
//             x="550"
//             y="220"
//             style={{ cursor: 'pointer' }}
//             ref={arrowBtnRef}
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default BannerDonations;


import React from 'react'
import './bannerDonations.scss'
import YouTube from 'react-youtube';
import BtnKnowMore from '../../../components/donations/btnKnowMore/BtnKnowMore';

const BannerDonations = () => {
    // const handleVideoReady = (event) => {
    //     //     // Aquí puedes agregar lógica adicional cuando el video esté listo
    // };

    const handleToNextComponent = () => {
        console.log('voy al next')
   
      }

    return (
        <>
            {/* <div className='bannerDonations__container' style={{height:'100vh'}}>

            <section className='sectionBanner'>
                <img id='bg' src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689225699/ayapel/i8bxcqmckedeig3xprsg.jpg" alt="" />
                <img id='top' src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689225652/ayapel/s8oftcjl16h2hvf7vcvu.jpg" alt="" />
                <img  id='botton' src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1689225653/ayapel/gpxphzifq0sacev96qb3.jpg" alt="" />
            </section>
        </div> */}


      
            <div className='container__video'>
                
                <iframe
                    width="1500px"
                    height="850px"
                    src="https://www.youtube.com/embed/nzSJh5Ucgvc?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
         
            </div>
             



        </>
    )
}

export default BannerDonations