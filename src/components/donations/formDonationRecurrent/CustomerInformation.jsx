import React, { useState } from 'react';
import { Button, Input, InputAdornment, InputLabel, TextField, FormControl, Grid, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { ImCreditCard } from 'react-icons/im';
import './formDonationsRecurrent.scss'
import { FaLess } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataSuscription } from '../../../redux/actions/suscriptionDonationActions';
import { BiSolidUser } from 'react-icons/bi';


const CustomerInformation = ({setCurrentStep}) => {

    const { suscriptionDonation } = useSelector((store) => store.suscriptionDonation);
    console.log(suscriptionDonation)

    const dispatch = useDispatch();

    let initialValues = {
        nombre: "",
        apellido: "",
        tipoDocumento: "CC",
        numeroDocumento: "",
        cellphone: "",
    }

    const documentTypes = [
        { value: 'CC', label: 'Cédula de Ciudadanía' },
        { value: 'TI', label: 'Tarjeta de Identidad' },
        { value: 'PASSPORT', label: 'Pasaporte' },
    ];


    const sendForm = (data) => {
        console.log('hola')
        console.log(data)
        const updatedData = {
            ...suscriptionDonation,
            ...data,
        };
        dispatch(updateDataSuscription(updatedData));
        setCurrentStep("confirmation")

    }

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            nombre: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El nombre del pasajero debe contener solo letras')
                .min(3, 'El nombre del pasajero debe tener al menos 3 caracteres.')
                .max(15, 'El nombre del pasajero no debe tener más de 15 caracteres.')
                .required('El nombre del pasajero es obligatorio.'),
            apellido: Yup.string().matches(/^[a-zA-Z\s']+$/, 'El apellido del pasajero debe contener solo letras')
                .min(5, 'El apellido del pasajero debe tener al menos 3 caracteres.')
                .max(15, 'El apellido del pasajero no debe tener más de 15 caracteres.')
                .required('El apellido del pasajero es obligatorio.'),
            tipoDocumento: Yup.string().required("Debes seleccionar un tipo de documento."),
            numeroDocumento: Yup.string()
                .matches(/^[0-9]+$/, 'El número de documento debe contener solo números')
                .min(10, 'El número de documento debe tener al menos 10 caracteres')
                .max(10, 'El número de documento no debe tener más de 10 caracteres')
                .required('El número de documento es obligatorio'),
        }),
        onSubmit: sendForm,

    });

    return (
        <>
            <div className='formDonationsRecurrent__stepOne'>
                <p className='formDonationsRecurrent__stepOne'> Paso 3 de 3 </p>
                <p className='formDonationsRecurrent__stepOne__title'>Información complementaria</p>
            </div>
            <form onSubmit={handleSubmit} className='formDonationsRecurrent'>
                <TextField
                    label="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    value={values.nombre}
                    error={errors.nombre}
                    helperText={errors.nombre}
                />
                <TextField
                    label="Apellido"
                    name="apellido"
                    onChange={handleChange}
                    value={values.apellido}
                    error={errors.apellido}
                    helperText={errors.apellido}
                />
                <div className='customerInformation__document'>
                    <FormControl fullWidth >
                        <Select name="tipoDocumento"
                            onChange={handleChange}
                            value={values.tipoDocumento}
                            error={errors.tipoDocumento}
                            helperText={errors.tipoDocumento}
                        >
                            {documentTypes.map((type) => (
                                <MenuItem key={type.value} value={type.value}>
                                    {type.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Número de documento"
                        name="numeroDocumento"
                        onChange={handleChange}
                        value={values.numeroDocumento}
                        error={errors.numeroDocumento}
                        helperText={errors.numeroDocumento}
                    />

                </div>
                <TextField
                    label="Numero de móvil"
                    name="cellphone"
                    onChange={handleChange}
                    value={values.cellphone}
                    error={errors.cellphone}
                    helperText={errors.cellphone}
                />

                <Button type="submit" className='formDonationsRecurrent__btnContinue'>
                    Continuar
                </Button>
            </form>
        </>
    )
}

export default CustomerInformation