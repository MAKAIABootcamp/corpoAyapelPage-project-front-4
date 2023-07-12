import React, { useEffect, useState } from 'react'

const GraficIndcator = () => {


    const Counter = ({ stopValue }) => {
        const [count, setCount] = useState(0);
        // const stopValue = 100;

        useEffect(() => {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount === stopValue) {
                        clearInterval(interval);
                        return prevCount;
                    }
                    return prevCount + 1;
                });
            }, 60);

            return () => {
                clearInterval(interval);
            };
        }, []);

        return <div className="counter">{count}</div>;
    };


    return (
        <div className='donationsIndicator__container'>


            <div className="donationsIndicator__titles">
                <div className='donationsIndicator__title--ambiental'>
                Pilar Ambiental
                </div>
                <div className='donationsIndicator__title--social'>
                Pilar Social
                </div>
                <div className='donationsIndicator__title--economic'>
                Pilar Económico
                </div>
            </div>

         
            <div class="wrap">
                <div class="col col1"></div>
                <div class="col col2">
                    <div class="circle circle1">
                        <h2><span> <i><Counter stopValue={8} /></i></span></h2>
                        <div class="shim shim1"></div>
                    </div>
                    <div class="content">
                        <p>Toneladas de pet reciclado y despachadas</p>
                    </div>
                </div>
                <div class="col col1">
                    <div class="circle circle2">
                        <h2><span> <i><Counter stopValue={50} /></i></span></h2>
                        <div class="shim shimx shim2"></div>
                    </div>
                    <div class="content">
                        <p>Arboles nativos listos para la venta</p>
                    </div>
                </div>
                <div class="col col2"></div>
                <div class="col col1"></div>
                <div class="col col2">
                    <div class="circle circle3">
                        <h2><span> <i><Counter stopValue={33} /></i></span></h2>
                        <div class="shim shim3"></div>
                    </div>
                    <div class="content">
                        <p>Charlas ambientales realizadas</p>
                    </div>
                </div>
                <div class="col col1">
                    <div class="circle circle4">
                        <h2><span> <i><Counter stopValue={74} /></i></span></h2>
                        <div class="shim shimx shim4"></div>
                    </div>
                    <div class="content">
                        <p>Niños participantes en educación y recreación</p>
                    </div>
                </div>
                <div class="col col2"></div>
                <div class="col col1"></div>
                <div class="col col2">
                    <div class="circle circle5">
                        <h2><span> <i><Counter stopValue={77} /></i></span></h2>
                        <div class="shim shim5"></div>
                    </div>
                    <div class="content">
                        <p>Familias fortalecidas con buenos hábitos educativos y nutricionales</p>
                    </div>
                </div>
                <div class="col col1">
                    <div class="circle circle6">
                        <h2><span> <i style={{ fontSize: '14px', display: 'flex', justifyContent: 'center' }}> $1.250.3<Counter stopValue={50} /></i></span></h2>
                        <div class="shim shimx shim6"></div>
                    </div>
                    <div class="content">
                        <p>Recursos movilizados para la población de artesanos y emprendedores</p>
                    </div>
                </div>
                <div class="col col2"></div>
                <div class="col col1"></div>
                <div class="col col2">
                    <div class="circle circle7">
                        <h2><span> <i><Counter stopValue={75} /></i></span></h2>
                        <div class="shim shim7"></div>
                    </div>
                    <div class="content">
                        <p>Artículos intercambiados por pet</p>
                    </div>
                </div>
                <div class="col col1">
                    {/* <div class="circle circle8">
                <h2><span><b></b> <i></i></span></h2>
                <div class="shim shimx shim8"></div>
            </div>
            <div class="content">
                <p></p>
            </div> */}
                </div>
                <div class="col col2"></div>
            </div>
        </div>
    )
}

export default GraficIndcator