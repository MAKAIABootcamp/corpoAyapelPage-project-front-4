import React from 'react'
import Donations from '../Donations'
//import './pageDonations.scss';
import Testimonials from '../../../components/donations/testimonials/Testimonials';
import DonorProgress from '../../../components/donations/donorProgress/DonorProgress';
import ImpactIndicator from '../../../components/donations/impactIndicator/ImpactIndicator';

const PageDonations = () => {
  return (
<main className="containerDonation">
      <div>
        <Donations/>
      </div>
      <div>
      <ImpactIndicator />
      </div>
      <div>
      <DonorProgress />
      </div>
      <div>
        <Testimonials />
      </div>
    </main>
  )
}

export default PageDonations

// import React, { useState, useEffect } from 'react';
// import Donations from '../Donations';
// import './pageDonations.scss';
// import Testimonials from '../../../components/donations/testimonials/Testimonials';
// import ImpactIndicator from '../../../components/donations/impactIndicator/ImpactIndicator';
// import DonorProgress from '../../../components/donations/donorProgress/DonorProgress';

// const PageDonations = () => {
//     const [hasScrolled, setHasScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!hasScrolled) {
//                 // Realizar el desplazamiento aquí usando el método que prefieras
//                 // Por ejemplo, usando el método scrollIntoView para cada componente
//                 // Esto asegurará que se desplacen solo una vez.
//                 // Ejemplo: 
//                 document.getElementById('donations').scrollIntoView();
//                document.getElementById('testimonials').scrollIntoView();
//                // document.getElementById('impactIndicator').scrollIntoView();

//                 // Después de realizar el desplazamiento, actualiza el estado para que no vuelva a suceder.
//                 setHasScrolled(true);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             // Limpia el evento del listener cuando el componente se desmonta.
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [hasScrolled]);

//     return (
//         <main className="containerDonation">
//             <div id="donations">
//                 <Donations />
//             </div>
//             <div id="impactIndicator">
//                 <ImpactIndicator />
//             </div>
//             <div id="donorProgress">
//                 <DonorProgress />
//             </div>
//             <div id="testimonials">
//                 <Testimonials />
//             </div>
          
//         </main>
//     );
// };

//export default PageDonations;
