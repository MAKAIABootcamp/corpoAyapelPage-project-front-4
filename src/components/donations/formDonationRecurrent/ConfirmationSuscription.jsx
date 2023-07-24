// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createSuscription, paySuscription } from '../../../epayco';
// import Swal from 'sweetalert2';
// import Loader from '../../appLoader/Loader';
// import { setLoadingStatusFalse } from '../../../redux/actions/actions';
// import LocalLoader from '../../appLoader/LocalLoader';

// const ConfirmationSuscription = ({ dataFormDonationRecurrent, setDataFormDonationRecurrent, currentStep, setCurrentStep, handleClose, selectedAmount }) => {
//   const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
//   const [suscriptionResponse, setSuscriptionResponse] = useState(null);
//   const [suscriptionPayResponse, setSuscriptionPayResponse] = useState(null);
//   const { loading } = useSelector((store) => store.loading);
//   const dispatch = useDispatch();

//   createSuscription(suscriptionDonation)
//     .then((response) => {
//       console.log(response);
//       Swal.fire({
//         title: 'El estado de su suscripción es:',
//         text: `${response.message}`,
//         icon: 'info',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'confirmar el pago de suscripción'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           paySuscription(suscriptionDonation)
//             .then((response) => {
//               console.log(response);

//               Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Felicidades, donación mensual ha sido completada!',
//                 html: ' Recuerde que puede cancelar su suscripción en cualquier momento',
//                 showConfirmButton: false,
//                 timer: 3000
//               });
//             }).then(() => {
//               handleClose();
//               window.location.reload();
//             })
//         }
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return (
//     <>
//     <LocalLoader/>
//     </>
//   );
// };

// export default ConfirmationSuscription;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSuscription, paySuscription } from '../../../epayco';
import Swal from 'sweetalert2';
import Loader from '../../appLoader/Loader';
import { setLoadingStatusFalse } from '../../../redux/actions/actions';
import LocalLoader from '../../appLoader/LocalLoader';

const ConfirmationSuscription = ({ dataFormDonationRecurrent, setDataFormDonationRecurrent, currentStep, setCurrentStep, handleClose, selectedAmount }) => {

  console.log(dataFormDonationRecurrent);
  createSuscription(dataFormDonationRecurrent)
    .then((response) => {
      console.log(response);
      Swal.fire({
        title: 'El estado de su suscripción es:',
        text: `${response?.message}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'confirmar el pago de suscripción'
      }).then((result) => {
        if (result.isConfirmed) {
          paySuscription(dataFormDonationRecurrent)
            .then((response) => {
              console.log(response?.status);


              Swal.fire({
                title: 'Felicidades, donación mensual ha sido completada!',
                html: ' Recuerde que puede cancelar su suscripción en cualquier momento',
               // title: 'El estado de su suscripción es:',
                text: `${response?.status}`,
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {

                  handleClose();
                window.location.reload();
                }
              })
            })
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <LocalLoader />
    </>
  );
};

export default ConfirmationSuscription;

