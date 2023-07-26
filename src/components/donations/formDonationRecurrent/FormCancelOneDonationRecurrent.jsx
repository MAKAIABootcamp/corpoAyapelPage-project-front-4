import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import './formDonationsRecurrent.scss'
import { useSelector } from 'react-redux';
import { cancelSubscription, listCustomers, listSubscriptions } from '../../../epayco';
import LocalLoader from '../../appLoader/LocalLoader';
import Swal from 'sweetalert2';


const FormCancelOneDonationRecurrent = ({ handleClose }) => {

    const { loading } = useSelector((store) => store.loading);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [currentStep] = useState('email');

    let initialValues = {
        email: "",
    }

    const sendForm = async (data) => {
        setIsSubmitting(true);
        try {
            const responseAllCustomers = await listCustomers();
            const customerFindedFromData = responseAllCustomers.data.find((customer) => customer.email === data.email);
            console.log(customerFindedFromData.id_customer);
            const customerId = customerFindedFromData.id_customer;
            const responseAllSubscriptions = await listSubscriptions();
            console.log(responseAllSubscriptions);
            const subscriptionFindedFromData = responseAllSubscriptions.data.find((subscription) => subscription.idCustomer === customerId);
            console.log(subscriptionFindedFromData);


            if (subscriptionFindedFromData._id) {
                const result = await Swal.fire({
                    title: 'Usuario encontrado!',
                    text: 'Por favor confirmar la cancelación de suscripción a donación mensual',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirmar'
                });

                if (result.isConfirmed) {
                    try {
                        const cancelResult = await cancelSubscription(subscriptionFindedFromData._id);

                        if (cancelResult.status === true) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: '¡Su petición de cancelación a donación mensual ha sido completada!',
                                showConfirmButton: false,
                                timer: 3000
                            });
                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: '¡Su petición de cancelación a donación mensual no ha sido encontrada!',
                                showConfirmButton: false,
                                timer: 3000
                            });
                        }

                        handleClose();
                    } catch (error) {
                        console.log(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Hubo un error al procesar su solicitud. Inténtelo de nuevo más tarde.'
                        });
                    }
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario no encontrado',
                    text: 'No se encontró ningún usuario con el correo proporcionado.'
                });
                setIsSubmitting(false);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al procesar su solicitud. Inténtelo de nuevo más tarde.'
            });
            setIsSubmitting(false);
        }
    };


    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'El correo debe ser en formato: correo@dominio.com')
                .email('El correo debe ser válido')
                .required('El correo es obligatorio'),
        }),
        onSubmit: sendForm,

    });

    return (
        <>
        {isSubmitting ? 
        <LocalLoader/>
        :
        <>
            {currentStep === 'email' && (
                <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
                    <p style={{ margin: '1rem', textAlign: 'center' }}>  Por favor ingrese el correo electrónico <br /> registrado en la suscripción de donación mensual</p>

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

                </form>
            )}
         </>
}
        </>
    );
}

export default FormCancelOneDonationRecurrent