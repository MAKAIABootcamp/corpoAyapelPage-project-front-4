import React, { useState, useEffect } from 'react';
import './donorProgress.scss'
import { GoGoal } from "react-icons/go";
import BtnKnowMore from '../btnKnowMore/BtnKnowMore';
import CtaDonations from '../ctaDonations/CtaDonations';
import client from '../../../sanity/client';
//import icon from '../../../../src/assets/animation_500_ljmbftnk.gif'

const ProgressBar = ({ progress, goal, totalDonors, height }) => {
    const containerStyles = {
        width: '100%',
        backgroundColor: '#777779',
        borderRadius: '20px',
        height: `${height}px`,
        position: 'relative', 
    };

    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#6EBE4A',
        borderRadius: '20px',
        position: 'absolute', 
        top: 0,
        left: 0,
    };

    const imageStyles = {
        width: '50px', 
        height: '50px',
        position: 'absolute',
        top: 8,
        left: `${progress}%`,
        transform: 'translate(-50%, -50%)',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
            <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1689223287/logo-blanco_x4th99_1_1_jvvols_1_ieflxf.svg" alt="Imagen de progreso" style={imageStyles} />
            {/* <div style={{ textAlign: 'center', marginTop: '5px' }}>
        {`${progress}% (${totalDonors}/${goal})`}
      </div> */}
        </div>
    );
};

const DonorProgress = () => {

    const [allPostData, setAllPostData] = useState(null)
    useEffect(() => {
        client
            .fetch(
                `*[_type == "donorsGoals"] {
          goal,
          currentDonors
        }`
            )
            .then((data) => setAllPostData(data))
            .catch(console.error)
    }, [])
    console.log(allPostData)


    const [progress, setProgress] = useState(0);
    const goal = allPostData?.[0].goal; // Meta esperada de donadores
    const totalDonors = allPostData?.[0].currentDonors; // Total de donadores actual


    // Calcula el progreso actual en base al total de donadores actual y la meta esperada
    useEffect(() => {
        const calculatedProgress = (totalDonors / goal) * 100;
        setProgress(calculatedProgress >= 100 ? 100 : calculatedProgress);
    }, [goal, totalDonors]);

    return (
        <div className="donorProgress__background">
            <main className="donorProgress__main">
                <div style={{ padding: '20px' }}>
                    <h3 className='donorProgress__title'>Cada contribución constante nos acerca más a lograr nuestras metas y marcar la diferencia en la vida de aquellos a quienes servimos</h3>
                    <article className='donorProgress__container__progress'>
                        <div>
                            <p className='donorProgress__init'> </p>
                        </div>
                        <ProgressBar progress={progress} goal={goal} totalDonors={totalDonors} height={20} className='donorProgress__bar' />
                        <div className='donorProgress__goal'>
                            <GoGoal style={{fontSize:'3rem'}}/> 
                            {/* <a href="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1688355815/ayapel/wv4shprazlxdoatxles9.gif"></a> */}
                            <p style={{textAlign:'center', fontSize:'1rem'}}>300 Donantes</p>
                        </div>
                    </article>
                    <div className='donorProgress__status'>
                 <p> {totalDonors} Donantes apoyan a CorpoAyapel  </p> 
                 
                </div>

                    <article className='donorProgress__ctaDonations'>
                    <CtaDonations
                        label={'¿QUIERES DONAR?'}
                        width={'15rem'}
                        height={'3rem'}
                        borderRadius={'2rem'}
                        backgroundColor={'#6EBE4A'}
                    />
                </article>
                <article className="testimonials__next">
                    <BtnKnowMore />
                </article>
              
                </div>
            </main>
        </div>
    );
};

export default DonorProgress;
