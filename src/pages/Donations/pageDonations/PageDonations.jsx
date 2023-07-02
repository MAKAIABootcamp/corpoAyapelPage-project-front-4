// import React from 'react'
// import Donations from '../Donations'
// import './pageDonations.scss';
// import Testimonials from '../../../components/donations/testimonials/Testimonials';

// const PageDonations = () => {
//   return (
// <main className="">
//       <div>
//         <Donations/>
//       </div>
//       <div>
//         <Testimonials />
//       </div>
//       <div>
//         {/* <OurProjects /> */}
//       </div>
//     </main>
//   )
// }

// export default PageDonations

import React, { useState, useEffect } from 'react';
import Donations from '../Donations';
import './pageDonations.scss';
import Testimonials from '../../../components/donations/testimonials/Testimonials';
import ImpactIndicator from '../../../components/donations/impactIndicator/ImpactIndicator';

const PageDonations = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled) {
                // Realizar el desplazamiento aquí usando el método que prefieras
                // Por ejemplo, usando el método scrollIntoView para cada componente
                // Esto asegurará que se desplacen solo una vez.
                // Ejemplo: 
                document.getElementById('donations').scrollIntoView();
                document.getElementById('testimonials').scrollIntoView();
                document.getElementById('impactIndicator').scrollIntoView();

                // Después de realizar el desplazamiento, actualiza el estado para que no vuelva a suceder.
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Limpia el evento del listener cuando el componente se desmonta.
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    return (
        <main className="">
            <div id="donations">
                <Donations />
            </div>
            <div id="testimonials">
                <Testimonials />
            </div>
            <div>
                <div id="impactIndicator">
                    <ImpactIndicator />
                </div>

            </div>
        </main>
    );
};

export default PageDonations;
