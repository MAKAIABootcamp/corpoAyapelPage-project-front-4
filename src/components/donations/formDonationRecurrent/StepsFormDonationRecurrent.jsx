// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';

// const steps = [
//   'Correo electrónico',
//   'Tarjeta de credito',
//   'Datos de usuario',
// ];

// export default function StepsFormDonationRecurrent() {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={1} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Email',
  'Tarjeta de crédito',
  'Datos de usuario',
];

export default function StepsFormDonationRecurrent({ stepActive }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={stepActive} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
