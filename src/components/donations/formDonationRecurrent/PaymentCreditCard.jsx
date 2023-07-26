import React, { useState } from 'react';
import { Button, Input, InputAdornment, InputLabel, TextField, FormControl, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { ImCreditCard } from 'react-icons/im';
import './formDonationsRecurrent.scss'
import { FaLess } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { BiSolidUser } from 'react-icons/bi';
import { createCardToken } from '../../../epayco';
import Swal from 'sweetalert2';
import LocalLoader from '../../appLoader/LocalLoader';


const PaymentCreditCard = ({ selectedAmount, dataFormDonationRecurrent, setDataFormDonationRecurrent, currentStep, setCurrentStep }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

  //  console.log(dataFormDonationRecurrent);

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
            setIsSubmitting(true);
          console.log('Entre a sendform');
          console.log(data);
      
          const cardTokenResponse = await createCardToken({ ...dataFormDonationRecurrent, ...data });
      
         // console.log(dataFormDonationRecurrent);
        //  console.log(cardTokenResponse); // Imprimir cardTokenResponse aquí
          if (cardTokenResponse.status === false) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${cardTokenResponse?.message}`,
          })
          setIsSubmitting(false);
        }else {
          setDataFormDonationRecurrent({cardTokenResponse, ...dataFormDonationRecurrent, ...data})
          console.log(dataFormDonationRecurrent);
          setCurrentStep(2);

        }
        } catch (error) {
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
            expiryMonth: Yup.string()
                .test('valid', 'El mes debe estar entre 01 y 12', (value) => {
                    if (!value) return false;
                    const numericValue = Number(value);
                    return numericValue >= 1 && numericValue <= 12;
                })
                .matches(/^\d{2}$/, 'El mes debe tener 2 dígitos Ej: 01')
                .required("La fecha es obligatoria."),
            expiryYear: Yup.string()
                .test('valid', 'La fecha de expiración puede ser menor', (value) => {
                    if (!value) return false; // No se ha proporcionado ningún valor, lo manejamos como inválido
                    const currentYear = new Date().getFullYear();
                    const numericValue = Number(value);
                    return numericValue >= currentYear;
                })
                .matches(/^\d{4}$/, 'El año debe tener 4 dígitos Ej: 2025')
                .required("La fecha es obligatoria."),
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
         {isSubmitting ? 
         <LocalLoader/>
         :
         <>
            <div className='formDonationsRecurrent__stepOne'>
                {/* <p className='formDonationsRecurrent__stepOne'> Paso 2 de 3 </p> */}
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
                        error={Boolean(errors.expiryMonth)}
                        helperText={errors.expiryMonth}
                    />

                    <TextField
                        id="expiryYear"
                        name="expiryYear"
                        label="AAAA"
                        onChange={handleChange}
                        value={values.expiryYear}
                        variant="outlined"
                        error={Boolean(errors.expiryYear)}
                        helperText={errors.expiryYear}
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
}
        </>
    )
}

export default PaymentCreditCard