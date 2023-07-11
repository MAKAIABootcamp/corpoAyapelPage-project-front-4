// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import YouTube from 'react-youtube';

// gsap.registerPlugin(ScrollTrigger);

// const VideoDonations = () => {
//   const videoRef = useRef(null);
//   const textRef = useRef(null);
//   const blackBoxRef = useRef(null);

//   useEffect(() => {
//     gsap.set(videoRef.current, { opacity: 0 });

//     const tl = gsap.timeline({
//       defaults: { duration: 1, ease: 'power2.inOut' },
//       scrollTrigger: {
//         trigger: videoRef.current,
//         start: 'top center',
//         end: 'bottom center',
//         scrub: true,
//       },
//     });

//     tl.to(videoRef.current, { opacity: 1 })
//       .fromTo(blackBoxRef.current, { opacity: 0 }, { opacity: 1 })
//       .fromTo(textRef.current, { opacity: 0, y: '50%' }, { opacity: 1, y: '0%' });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   const handleVideoReady = (event) => {
//     // Aquí puedes agregar lógica adicional cuando el video esté listo
//   };

//   return (
//     <section className="Video__StyledSection-jh2dmk-0">
//       <div className="Container-sc-4cax2l-0 haloKz">
//         <div className="BigTextWithVideo__JumboTextWrap-sc-1pyvynd-0 ckVlwp">
//           <div className="BigTextWithVideo__MaskedVideo-sc-1pyvynd-1 fxxZIS">
//             <YouTube
//               videoId="nzSJh5Ucgvc"
//               opts={{
//                 playerVars: {
//                   autoplay: 1,
//                   mute: 1,
//                   loop: 1,
//                   controls: 0,
//                 },
//               }}
//               onReady={handleVideoReady}
//               containerClassName="LazyVideo__StyledVideo-sc-12k5ev0-0 gaXtOT"
//             />
//           </div>
//           <svg viewBox="0 0 1280 720" className="BigTextWithVideo__VideoMask-sc-1pyvynd-2 gcJSwU">
//             {/* ... SVG elements for text mask ... */}
//           </svg>
//           <button aria-label="Play video" className="UnstyledButton-sc-1h2eotw-0 PlayButton__StyledPlayButton-uz6a6t-0 ecKsGc cdAvpU BigTextWithVideo__StyledPlayButton-sc-1pyvynd-5 fsvabr play-button">
//             {/* ... Play button SVG ... */}
            
//             <svg width="12" height="14" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
//               <polygon points="10 0 60 30 60 30 10 60"></polygon>
//               <polygon points="10 20 50 30 50 30 10 40"></polygon>
//             </svg>
//           </button>
//           <svg viewBox="0 0 1280 720" className="BigTextWithVideo__VideoMask-sc-1pyvynd-2 gcJSwU">
//             <g fillRule="evenodd">
//               <mask id="text-mask-sH5H6sfXr1w">
//                 <rect fill="#fff" x="0" y="0" width="1280" height="720"></rect>
//                 <rect className="filler" fill="#000" x="0" y="0" width="1280" height="720" data-svg-origin="640 360" transform="matrix(0.5,0,0,0,320,360)" style={{ transformOrigin: '0px 0px', opacity: 1, visibility: 'inherit' }}></rect>
//                 <g className="the-text" data-svg-origin="640.9741020202637 346.3981533050537" transform="matrix(1,0,0,1,1,0)" style={{ transformOrigin: '0px 0px', opacity: 1, visibility: 'inherit' }}>
//                   <text fill="#000" x="570" y="545" textAnchor="middle">DONAR</text>
//                   <text fill="#000" x="640" y="335" textAnchor="middle" dominantBaseline="hanging"></text>
//                 </g>
//               </mask>
//             </g>
//             <rect mask="url(#text-mask-sH5H6sfXr1w)" x="0" y="0" width="1280" height="720" className="BigTextWithVideo__BGRect-sc-1pyvynd-3 bRInmh"></rect>
//             <rect className="BigTextWithVideo__BlackBox-sc-1pyvynd-4 fwHjoV black-box" x="0" y="0" width="1280" height="720" opacity="0" data-svg-origin="640 360" transform="matrix(0.5,0,0,0,320,360)" style={{ transformOrigin: '0px 0px', opacity: 0, visibility: 'inherit' }}></rect>
//           </svg>
//         </div>
//         <div className="Video__Content-jh2dmk-1 kyVnXK">
//           <h2>Our Vision</h2>
//           <p>From conception to production, our promise is to help grow your brand through custom design and premium apparel.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoDonations;
