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
import { createCardToken } from '../../../epayco';


const PaymentCreditCard = ({setCurrentStep, selectedAmount}) => {

    const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
    console.log(suscriptionDonation)

    const dispatch = useDispatch();

    let initialValues = {
        cardNumber: "",
        names: "",
        expiryMonth: "",
        expiryYear: "",
        codigoCVV: "",
    }

    const sendForm = async (data) => {
        try {
          console.log('hola');
          console.log(data);
          const updatedData = {
            ...suscriptionDonation,
            ...data,
          };
      
          dispatch(updateDataSuscription({paymentInfo: updatedData}));
      
          const tokenCard = {
            ...suscriptionDonation,
            ...data,
          };
      
          const cardTokenResponse = await createCardToken(tokenCard);

          const cardToken = {
            ...suscriptionDonation,
            ...cardTokenResponse,
          };

          dispatch(updateDataSuscription({cardToken: cardToken}));
      console.log(suscriptionDonation)
          setCurrentStep("customerInformation");
        } catch (error) {
          // Manejar errores si es necesario
          console.error(error);
        }
      };
      

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            cardNumber: Yup.string()
                // .matches(/^(?:3[47]\d{13}|4(?:\d{12}|\d{15})|(?:5[1-5]\d{14}|6011\d{12}))$/, 'El número de tarjeta debe contener solo números')
                .min(13, 'El número de tarjeta debe tener al menos 13 números')
                .max(16, 'El número de tarjeta no debe tener más de 16 números')
                .required('El número de tarjeta es obligatorio'),
            names: Yup.string().matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'El nombre debe contener solo letras')
                .min(5, 'El nombre debe tener al menos 3 caracteres.')
                .max(20, 'El nombre no debe tener más de 15 caracteres.')
                .required('El nombre es obligatorio.'),
            expiryMonth: Yup.string().required("La fecha es obligatoria."),
            expiryYear: Yup.string().required("La fecha es obligatoria."),
            codigoCVV: Yup.string()
                .matches(/^[0-9]+$/, 'El código CVV debe contener solo números')
                .min(3, 'El código CVV debe tener al menos 3 digitos')
                .max(4, 'El código CVV no debe tener más de 4 digitos')
                .required('El código CVV es obligatorio'),
        }),
        onSubmit: sendForm,

    });

    return (
        <>
            <div className='formDonationsRecurrent__stepOne'>
                <p className='formDonationsRecurrent__stepOne'> Paso 2 de 3 </p>
                <p className='formDonationsRecurrent__stepOne__title'>Información de la tarjeta de crédito</p>
            </div>
            <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
                <TextField
                    id="outlined-password-input"
                    label={
                        <span>
                            <BiSolidUser style={{ verticalAlign: 'middle' }} /> Nombre como aparece en la tarjeta
                        </span>
                    }
                    name="names"
                    onChange={handleChange}
                    value={values.names}
                    error={errors.names}
                    helperText={errors.names}
                />
                <TextField
                    id="outlined-password-input"
                    label={
                        <span>
                            <ImCreditCard className='formDonationsRecurrent__iconCard' style={{ verticalAlign: 'middle' }} /> Número de la tarjeta
                        </span>
                    }
                    name="cardNumber"
                    onChange={handleChange}
                    value={values.cardNumber}
                    error={Boolean(errors.cardNumber)}
                    helperText={errors.cardNumber}
                />

                <div className='formDonationsRecurrent__date'>
                    <TextField
                        id="expiryMonth"
                        name="expiryMonth"
                        label="MM"
                        onChange={handleChange}
                        value={values.expiryMonth}
                        variant="outlined"
                        inputProps={{
                            min: '1',
                            max: '12',
                        }}
                    />

                    <TextField
                        id="expiryYear"
                        name="expiryYear"
                        label="AAAA"
                        onChange={handleChange}
                        value={values.expiryYear}
                        variant="outlined"
                        inputProps={{
                            min: '2022',
                            max: '2050',
                        }}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="CVC"
                        name="codigoCVV"
                        onChange={handleChange}
                        value={values.codigoCVV}
                        helperText={errors.codigoCVV}
                        error={errors.codigoCVV}
                    />
                </div>
                <Button type="submit" className='formDonationsRecurrent__btnContinue'>
                    Continuar
                </Button>
            </form>
        </>
    )
}

export default PaymentCreditCard