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
