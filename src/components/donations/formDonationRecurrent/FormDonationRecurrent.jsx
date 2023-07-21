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


const FormDonationRecurrent = ({ handleClose, selectedAmount }) => {

    const dispatch = useDispatch();

    const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
    console.log(suscriptionDonation)
    const [currentStep, setCurrentStep] = useState('email');

    let initialValues = {
        email: "",
    }

    const sendForm = (data) => {
        dispatch(updateDataSuscription(data));
    }

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
        setCurrentStep('payment');
    }

    const handleConfirmation = () => {
        setCurrentStep("confirmation");
        handleClose(); // Cerrar el modal después de establecer setCurrentStep("confirmation")
    };

    return (
        <>
            {currentStep === 'email' && (
                <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
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
                        <p className='formDonationsRecurrent__stepOne__title'> Paso 1 Seleccione el metodo de pago</p>
                        {Object.keys(suscriptionDonation).length === 0 &&
                            <div onClick={handleConfirmTdc} className={Object.keys(suscriptionDonation).length === 0 ? 'formDonationsRecurrent__selectCard' : 'formDonationsRecurrent__selectCard-active'}>
                                <ImCreditCard className='formDonationsRecurrent__iconCard' />
                                <p>Tarjeta de Crédito</p>
                            </div>
                        }
                    </div>
                </form>
            )}

            {currentStep === 'payment' && (
                <PaymentCreditCard setCurrentStep={setCurrentStep} currentStep={currentStep} selectedAmount={selectedAmount} />
            )}

            {currentStep === 'customerInformation' && (
                <CustomerInformation setCurrentStep={setCurrentStep} currentStep={currentStep} selectedAmount={selectedAmount} />
            )}

            {currentStep === 'confirmation' && (
                <ConfirmationSuscription setCurrentStep={setCurrentStep} currentStep={currentStep} handleClose={handleClose} selectedAmount={selectedAmount} />
            )}
        </>


    );
}

export default FormDonationRecurrent

