import React, { useState } from 'react';
import { Button, Input, InputAdornment, InputLabel, TextField, FormControl, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { ImCreditCard } from 'react-icons/im';
import './formDonationsRecurrent.scss'
import { FaLess } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataSuscription } from '../../../redux/actions/suscriptionDonationActions';
import { BiSolidUser } from 'react-icons/bi';
import PaymentCreditCard from './PaymentCreditCard';
import CustomerInformation from './CustomerInformation';
import ConfirmationSuscription from './ConfirmationSuscription';
import StepsFormDonationRecurrent from './StepsFormDonationRecurrent';
import { MdArrowBackIosNew, MdCancel } from 'react-icons/md';

const FormDonationRecurrent = ({ handleClose, selectedAmount, dataFormDonationRecurrent, setDataFormDonationRecurrent }) => {
  const dispatch = useDispatch();
  const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
  const [currentStep, setCurrentStep] = useState(0); // Estado local para el paso activo

  let initialValues = {
    email: "",
  };

  const sendForm = (data) => {
    // dispatch(updateDataSuscription({email: data}));
    setDataFormDonationRecurrent(data)
  };

 // console.log(dataFormDonationRecurrent);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'El correo debe ser en formato: correo@dominio.com')
        .email('El correo debe ser válido')
        .required('El correo es obligatorio'),
    }),
    onSubmit: sendForm,
  });

  const handleConfirmTdc = () => {
    setCurrentStep(1); // Avanzar al paso de pago (paso 1)
  };

  const handleConfirmation = () => {
    setCurrentStep(3); // Avanzar al paso de confirmación (paso 3)
    handleClose(); // Cerrar el modal después de establecer setCurrentStep(3)
  };

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  };

 // console.log(suscriptionDonation);

  return (
    <>
          <button className='formDonationsRecurrent__btnCancel' onClick={handleClose}><MdCancel/></button>
      {currentStep === 0 && (
           <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
           <StepsFormDonationRecurrent stepActive={currentStep} />
           Ingrese su correo electrónico para iniciar
           <div className='formDonationsRecurrent__email'>
             <TextField
               id="outlined-password-input"
               label="Email"
               type="email"
               name="email"
               onChange={handleChange}
               value={values.email}
               error={errors.email}
               helperText={errors.email}
               className='aaa'
             />
             <button type='submit' className='formDonationsRecurrent__btnConfirmEmail'>Confirmar</button>
           </div>
           <div className='formDonationsRecurrent__stepOne'>
             {Object.keys(dataFormDonationRecurrent).length !== 0 && 
             <>
               {/* <p className='formDonationsRecurrent__stepOne__title'>Paso 1 Seleccione el método de pago</p> */}
               <div onClick={handleConfirmTdc} className={Object.keys(dataFormDonationRecurrent).length === 0 ? 'formDonationsRecurrent__selectCard' : 'formDonationsRecurrent__selectCard-active'}>
                 <ImCreditCard className='formDonationsRecurrent__iconCard' />
                 <p>Tarjeta de Crédito</p>
               </div>
             </>
             } 
           </div>
          
         </form>
      )}

      {currentStep === 1 && (
        <>
         {currentStep > 0 && (
             <button className='formDonationsRecurrent__btnBack' onClick={handleGoBack}><MdArrowBackIosNew />Volver</button>
           )}
          <StepsFormDonationRecurrent stepActive={currentStep} />
          <PaymentCreditCard setCurrentStep={setCurrentStep} currentStep={currentStep} selectedAmount={selectedAmount} dataFormDonationRecurrent={dataFormDonationRecurrent} setDataFormDonationRecurrent={setDataFormDonationRecurrent}/>
        </>
      )}

      {currentStep === 2 && (
        <>
          <StepsFormDonationRecurrent stepActive={currentStep} />
          <CustomerInformation setCurrentStep={setCurrentStep} currentStep={currentStep} selectedAmount={selectedAmount}  dataFormDonationRecurrent={dataFormDonationRecurrent} setDataFormDonationRecurrent={setDataFormDonationRecurrent} />
        </>
      )}

      {currentStep === 3 && (
        <>
          <StepsFormDonationRecurrent stepActive={currentStep} />
          <ConfirmationSuscription setCurrentStep={setCurrentStep} currentStep={currentStep} handleClose={handleClose} selectedAmount={selectedAmount} dataFormDonationRecurrent={dataFormDonationRecurrent} setDataFormDonationRecurrent={setDataFormDonationRecurrent}/>
        </>
      )}
    </>
  );
};

export default FormDonationRecurrent;
